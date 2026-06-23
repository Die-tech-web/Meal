"use client"

import type { ReactNode } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in"

interface AnimatedSectionProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
}

const animationClasses: Record<AnimationType, string> = {
  "fade-up": "animate-fade-up",
  "fade-in": "animate-fade-in",
  "slide-left": "animate-slide-left",
  "slide-right": "animate-slide-right",
  "scale-in": "animate-scale-in",
}

const delayClasses: Record<number, string> = {
  100: "animation-delay-100",
  200: "animation-delay-200",
  300: "animation-delay-300",
  400: "animation-delay-400",
  500: "animation-delay-500",
  600: "animation-delay-600",
  700: "animation-delay-700",
}

export function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionObserver()

  const animClass = isVisible ? animationClasses[animation] : ""
  const delayClass = delay && isVisible ? delayClasses[delay] || "" : ""

  return (
    <div
      ref={ref}
      className={`${isVisible ? animClass : "opacity-0"} ${delayClass} ${className}`}
      style={{ willChange: isVisible ? "auto" : "opacity, transform" }}
    >
      {children}
    </div>
  )
}
