"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface LazyImageProps {
    src: string
    alt: string
    fill?: boolean
    priority?: boolean
    className?: string
    sizes?: string
    quality?: number
    fetchPriority?: "high" | "low" | "auto"
}

export default function LazyImage({
    src,
    alt,
    fill = false,
    priority = false,
    className = "",
    sizes = "100vw",
    quality = 90,
    fetchPriority = "auto"
}: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [hasError, setHasError] = useState(false)

    // Preload image
    useEffect(() => {
        if (priority) {
            const img = new window.Image()
            img.onload = () => setIsLoaded(true)
            img.onerror = () => setHasError(true)
            img.src = src
        }
    }, [src, priority])

    if (hasError) {
        return (
            <div className={`${className} bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center`}>
                <div className="text-white/60 text-center">
                    <div className="text-4xl mb-2">📷</div>
                    <div className="text-sm">Image unavailable</div>
                </div>
            </div>
        )
    }

    return (
        <>
            {!isLoaded && !priority && (
                <div className={`${className} bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse`} />
            )}
            <Image
                src={src}
                alt={alt}
                fill={fill}
                priority={priority}
                className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                sizes={fill ? sizes : undefined}
                quality={quality}
                fetchPriority={fetchPriority}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
            />
        </>
    )
}
