// components/ui/dialog.tsx
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const Overlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn("fixed inset-0 z-[60] bg-black/80", className)}
        {...props}
    />
))
Overlay.displayName = DialogPrimitive.Overlay.displayName

// Center portal children at the viewport level
const DialogPortal = ({ children, ...props }: DialogPrimitive.DialogPortalProps) => (
    <DialogPrimitive.Portal {...props}>
        <div className="fixed inset-0 z-[69] grid place-items-center">
            {children}
        </div>
    </DialogPrimitive.Portal>
)

const contentVariants = cva(
    "fixed z-[70] grid bg-background text-foreground shadow-lg",
    {
        variants: {
            fullscreen: {
                // fullscreen (preferred for lightbox)
                true: "left-0 top-0 w-screen h-screen translate-x-0 translate-y-0 max-w-none border-0 p-0 rounded-none",
                // non‑fullscreen (avoid translate; use grid centering instead)
                false: "inset-0 m-auto w-full max-w-lg p-6 sm:rounded-lg",
            },
        },
        defaultVariants: { fullscreen: false },
    }
)

interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
    fullscreen?: boolean
}

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogClose = DialogPrimitive.Close
const DialogTitle = DialogPrimitive.Title
const DialogDescription = DialogPrimitive.Description

const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    DialogContentProps
>(({ className, fullscreen, children, ...props }, ref) => (
    <DialogPortal>
        <Overlay />
        <DialogPrimitive.Content
            ref={ref}
            className={cn(contentVariants({ fullscreen }), className)}
            {...props}
        >
            {children}
        </DialogPrimitive.Content>
    </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

export { Dialog, DialogTrigger, DialogPortal, DialogClose, DialogContent, DialogTitle, DialogDescription }
