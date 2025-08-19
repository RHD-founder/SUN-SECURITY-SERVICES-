import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface SecurityButtonProps {
    children: React.ReactNode
    href?: string
    onClick?: () => void
    className?: string
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    showLogo?: boolean
}

export default function SecurityButton({
    children,
    href,
    onClick,
    className,
    variant = 'primary',
    size = 'md',
    showLogo = false
}: SecurityButtonProps) {
    const sizeClasses = {
        sm: "py-2 px-4 text-sm",
        md: "py-3 px-6 text-base",
        lg: "py-4 px-8 text-lg"
    }

    const variantClasses = {
        primary: "bg-[#8B0000] text-white border-black",
        secondary: "bg-[#556B2F] text-white border-black",
        outline: "bg-transparent text-[#8B0000] border-black"
    }

    const buttonContent = (
        <>
            <span className="relative z-20">{children}</span>

            {/* Shimmer effect */}
            <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

            {/* Border animations */}
            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-black absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-black absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-black absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-black absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>

            {/* Logo for logo buttons */}
            {showLogo && (
                <div className="absolute top-1/2 right-3 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-30">
                    <Image
                        src="/sun-security-logo.png"
                        alt="SUN SECURITY"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                    />
                </div>
            )}
        </>
    )

    const buttonElement = (
        <button
            onClick={onClick}
            className={cn(
                "relative cursor-pointer text-center font-semibold uppercase rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden",
                sizeClasses[size],
                variantClasses[variant],
                className
            )}
        >
            {buttonContent}
        </button>
    )

    if (href) {
        return (
            <a
                href={href}
                className={cn(
                    "relative cursor-pointer text-center font-semibold uppercase rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden inline-block",
                    sizeClasses[size],
                    variantClasses[variant],
                    className
                )}
            >
                {buttonContent}
            </a>
        )
    }

    return buttonElement
}
