"use client"
import { useRef } from "react"
import { motion, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

export default function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-[20px] bg-white/75 border border-[rgba(14,20,40,.07)] p-8",
        "shadow-[0_1px_2px_rgba(14,20,40,.04),0_8px_32px_rgba(14,20,40,.06)]",
        "hover:shadow-[0_2px_4px_rgba(14,20,40,.04),0_20px_60px_rgba(14,20,40,.1)]",
        "hover:border-[rgba(14,20,40,.12)] transition-all duration-300 group",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(37,99,235,.08), transparent 70%)`,
        }}
      />
      {children}
    </div>
  )
}
