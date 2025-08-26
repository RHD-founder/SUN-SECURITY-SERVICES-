/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // ============================================================================
      // CLIENT APPROVED COLOR SYSTEM
      // ============================================================================
      colors: {
        // Primary Brand Colors (Client Approved)
        primary: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#8F1E10", // CLIENT PRIMARY - Deep Red
          600: "#7f1d1d",
          700: "#991b1b",
          800: "#7f1d1d",
          900: "#450a0a",
          950: "#2d0a0a",
        },

        // Secondary Brand Colors (Client Approved)
        secondary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0D240F", // CLIENT SECONDARY - Deep Green
          600: "#0c1e0c",
          700: "#0a1a0a",
          800: "#081608",
          900: "#061206",
          950: "#040a04",
        },

        // Accent Brand Colors (Client Approved)
        accent: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#EDE2A8", // CLIENT ACCENT - Warm Beige
          600: "#e6d89a",
          700: "#dfce8c",
          800: "#d8c47e",
          900: "#d1ba70",
          950: "#cab062",
        },

        // Semantic Colors
        success: {
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },

        warning: {
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },

        error: {
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
        },

        info: {
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },

        // Background Colors
        background: {
          primary: "#ffffff",
          secondary: "#f8f9fa",
          tertiary: "#f1f3f4",
          dark: "#0D240F",
          light: "#EDE2A8",
        },

        // Text Colors
        text: {
          primary: "#0D240F",
          secondary: "#374151",
          tertiary: "#6b7280",
          inverse: "#ffffff",
          accent: "#8F1E10",
          muted: "#9ca3af",
        },

        // Border Colors
        border: {
          primary: "#e5e7eb",
          secondary: "#d1d5db",
          accent: "#8F1E10",
          focus: "#8F1E10",
        },
      },

      // ============================================================================
      // CUSTOM FONT FAMILIES
      // ============================================================================
      fontFamily: {
        // Display fonts for hero sections and main headings
        display: ["var(--font-bebas)", "Bebas Neue", "cursive"],
        heading: ["var(--font-roboto-slab)", "Roboto Slab", "serif"],
        body: ["var(--font-poppins)", "Poppins", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],

        // UI fonts for navigation and buttons
        ui: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],

        // Monospace for technical content
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          '"SF Mono"',
          "Consolas",
          '"Liberation Mono"',
          "Menlo",
          "monospace",
        ],
      },

      // ============================================================================
      // CUSTOM FONT SIZES WITH RESPONSIVE CLAMP
      // ============================================================================
      fontSize: {
        // Responsive font sizes using clamp for fluid typography
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],

        // Custom responsive sizes for hero sections
        "hero-sm": ["clamp(2rem, 5vw, 3rem)", { lineHeight: "1.1" }],
        "hero-md": ["clamp(3rem, 8vw, 5rem)", { lineHeight: "1.1" }],
        "hero-lg": ["clamp(4rem, 10vw, 7rem)", { lineHeight: "1.1" }],
        "hero-xl": ["clamp(5rem, 12vw, 9rem)", { lineHeight: "1.1" }],
      },

      // ============================================================================
      // CUSTOM LINE HEIGHTS
      // ============================================================================
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        "extra-loose": "2.5",
      },

      // ============================================================================
      // CUSTOM LETTER SPACING
      // ============================================================================
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
        "extra-wide": "0.075em",
        "super-wide": "0.15em",
      },

      // ============================================================================
      // CUSTOM SPACING (4pt grid system)
      // ============================================================================
      spacing: {
        18: "4.5rem", // 72px
        88: "22rem", // 352px
        128: "32rem", // 512px
        144: "36rem", // 576px
      },

      // ============================================================================
      // CUSTOM BORDER RADIUS
      // ============================================================================
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },

      // ============================================================================
      // CUSTOM SHADOWS
      // ============================================================================
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        medium:
          "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        large:
          "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        glow: "0 0 20px rgba(143, 30, 16, 0.3)",
        "glow-green": "0 0 20px rgba(13, 36, 15, 0.3)",
        "glow-accent": "0 0 20px rgba(237, 226, 168, 0.3)",
      },

      // ============================================================================
      // CUSTOM ANIMATIONS
      // ============================================================================
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "fade-in-down": "fadeInDown 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        "pulse-gentle": "pulseGentle 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGentle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(143, 30, 16, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(143, 30, 16, 0.8)" },
        },
      },

      // ============================================================================
      // CUSTOM GRADIENTS
      // ============================================================================
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #8F1E10 0%, #7f1d1d 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #0D240F 0%, #0a1a0a 100%)",
        "gradient-accent": "linear-gradient(135deg, #EDE2A8 0%, #e6d89a 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #8F1E10 0%, #0D240F 50%, #8F1E10 100%)",
        "gradient-card": "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
      },

      // ============================================================================
      // CUSTOM BACKDROP FILTERS
      // ============================================================================
      backdropBlur: {
        xs: "2px",
        "4xl": "72px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Custom plugin for design system utilities
    function ({ addUtilities, theme }) {
      const newUtilities = {
        // Typography utilities
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".text-pretty": {
          "text-wrap": "pretty",
        },

        // Font family utilities
        ".font-display": {
          "font-family": theme("fontFamily.display").join(", "),
        },
        ".font-heading": {
          "font-family": theme("fontFamily.heading").join(", "),
        },
        ".font-body": {
          "font-family": theme("fontFamily.body").join(", "),
        },
        ".font-ui": {
          "font-family": theme("fontFamily.ui").join(", "),
        },
        ".font-mono": {
          "font-family": theme("fontFamily.mono").join(", "),
        },

        // Color utilities
        ".bg-brand": {
          "background-color": theme("colors.primary.500"),
        },
        ".text-brand": {
          color: theme("colors.primary.500"),
        },
        ".border-brand": {
          "border-color": theme("colors.primary.500"),
        },

        // Component utilities
        ".card-shadow": {
          "box-shadow": theme("boxShadow.soft"),
        },
        ".card-shadow-hover": {
          "box-shadow": theme("boxShadow.medium"),
        },
        ".button-shadow": {
          "box-shadow": theme("boxShadow.soft"),
        },
        ".button-shadow-hover": {
          "box-shadow": theme("boxShadow.medium"),
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
