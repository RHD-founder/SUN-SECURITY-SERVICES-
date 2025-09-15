import { NextResponse } from "next/server";
import { z } from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  subject: z.string().min(5).max(100),
  message: z.string().min(20).max(1000),
});

// Rate limiting - simple in-memory implementation
const RATE_LIMIT_DURATION = 60 * 1000; // 1 minute in milliseconds
const RATE_LIMIT_REQUESTS = 3; // Max 3 requests per minute

interface RateLimitRecord {
  count: number;
  timestamp: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

// Create transporter function to avoid webpack issues
async function createTransporter() {
  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST || "smtp-relay.brevo.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verify connection
    await transporter.verify();
    return transporter;
  } catch (error) {
    console.error("Failed to create transporter:", error);
    throw new Error("Email service configuration error");
  }
}

export async function POST(request: Request) {
  try {
    // Debug environment variables
    console.log("Environment variables check:");
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log(
      "SMTP_PASSWORD:",
      process.env.SMTP_PASSWORD ? "***SET***" : "NOT SET"
    );
    console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);

    // Check if SMTP credentials are available
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error(
        "SMTP credentials missing. Please set environment variables."
      );
      return NextResponse.json(
        { message: "Email service is not configured properly" },
        { status: 500 }
      );
    }

    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    // Apply rate limiting
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    // Check if the IP is already rate limited
    if (record) {
      // Check if the rate limit duration has passed
      if (now - record.timestamp < RATE_LIMIT_DURATION) {
        // Increment count
        record.count += 1;

        // Check if too many requests
        if (record.count > RATE_LIMIT_REQUESTS) {
          return NextResponse.json(
            { message: "Too many requests. Please try again later." },
            { status: 429 }
          );
        }
      } else {
        // Reset if the duration has passed
        record.count = 1;
        record.timestamp = now;
      }
    } else {
      // First request from this IP
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    // Parse and validate request body
    const body = await request.json();
    const result = formSchema.safeParse(body);

    if (!result.success) {
      const errorMessage = result.error.issues
        .map((issue) => issue.message)
        .join(", ");
      return NextResponse.json(
        { message: `Validation error: ${errorMessage}` },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = result.data;

    // Define email content for admin
    const mailOptions = {
      from: "SUN SECURITY SERVICES <founder@rh-dynamics.software>", // Use verified sender with readable name
      to: process.env.ADMIN_EMAIL || "sunukhan468@gmail.com", // Business email
      replyTo: email,
      subject: `Contact Form: ${subject} from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message:

${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: #8B0000; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
    <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.9;">SUN SECURITY SERVICES</p>
  </div>
  
  <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <h2 style="color: #8B0000; margin-top: 0;">Customer Details</h2>
    
    <div style="margin-bottom: 20px;">
      <p style="margin: 5px 0;"><strong style="color: #333;">Name:</strong> ${name}</p>
      <p style="margin: 5px 0;"><strong style="color: #333;">Email:</strong> <a href="mailto:${email}" style="color: #8B0000; text-decoration: none;">${email}</a></p>
      <p style="margin: 5px 0;"><strong style="color: #333;">Phone:</strong> <a href="tel:${phone}" style="color: #8B0000; text-decoration: none;">${phone}</a></p>
      <p style="margin: 5px 0;"><strong style="color: #333;">Subject:</strong> ${subject}</p>
    </div>
    
    <div style="margin-bottom: 20px;">
      <strong style="color: #333;">Message:</strong>
      <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #8B0000; margin-top: 10px; border-radius: 4px;">
        <p style="white-space: pre-line; color: #333; margin: 0;">${message}</p>
      </div>
    </div>
    
    <div style="background-color: #e8f4fd; padding: 15px; border-radius: 4px; margin-top: 20px;">
      <p style="margin: 0; color: #333; font-size: 14px;">
        <strong>Action Required:</strong> Please respond to this inquiry within 24 hours as per our service commitment.
      </p>
    </div>
  </div>
</div>
      `,
    };

    // Send email to admin
    try {
      const transporter = await createTransporter();
      await transporter.sendMail(mailOptions);
      console.log("Admin email sent successfully");
    } catch (emailError) {
      console.error("Failed to send admin email:", emailError);
      throw new Error("Failed to send email. Please try again later.");
    }

    // Send auto-reply to the customer
    const autoReplyMailOptions = {
      from: "SUN SECURITY SERVICES <founder@rh-dynamics.software>", // Use verified sender with readable name
      to: email, // user's email
      subject: "Thank you for contacting SUN SECURITY SERVICES",
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: #8B0000; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
    <h1 style="margin: 0; font-size: 24px;">Thank You for Contacting Us!</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.9;">SUN SECURITY SERVICES</p>
  </div>
  
  <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <p style="color: #333; font-size: 16px; line-height: 1.6;">Dear ${name},</p>
    
    <p style="color: #333; font-size: 16px; line-height: 1.6;">
      Thank you for reaching out to SUN SECURITY SERVICES. We have received your message and our team will get back to you within 24 hours.
    </p>
    
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #8B0000; margin-top: 0;">Your Inquiry Details:</h3>
      <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
      <p style="margin: 5px 0;"><strong>Message:</strong> ${message.substring(
        0,
        150
      )}${message.length > 150 ? "..." : ""}</p>
    </div>
    
    <div style="background-color: #e8f5e8; padding: 15px; border-radius: 4px; margin: 20px 0;">
      <p style="margin: 0; color: #2d5a2d; font-weight: bold;">
        ✓ We will contact you within 24 hours<br>
        ✓ Our security experts will provide a detailed quote<br>
        ✓ Free consultation and site assessment available
      </p>
    </div>
    
    <p style="color: #333; font-size: 16px; line-height: 1.6;">
      For immediate assistance, please call us at <strong>+91-XXX-XXXX-XXX</strong> or visit our office at R.G. Baruah Road, Guwahati.
    </p>
    
    <p style="color: #333; font-size: 16px; line-height: 1.6;">
      Best regards,<br>
      <strong>SUN SECURITY SERVICES Team</strong><br>
      <em>Your Trusted Security Partner</em>
    </p>
  </div>
</div>
      `,
    };

    // Send auto-reply
    try {
      const transporter = await createTransporter();
      await transporter.sendMail(autoReplyMailOptions);
      console.log("Auto-reply email sent successfully");
    } catch (autoReplyError) {
      console.error("Failed to send auto-reply:", autoReplyError);
      // Continue even if auto-reply fails
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "An error occurred while sending your message" },
      { status: 500 }
    );
  }
}
