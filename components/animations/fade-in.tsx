"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  duration?: number
  threshold?: number
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.5,
  threshold = 0.1,
}: FadeInProps) {
  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "down":
        return {
          hidden: { y: -20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "left":
        return {
          hidden: { x: -20, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "right":
        return {
          hidden: { x: 20, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "none":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
      default:
        return {
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold }}
      transition={{ duration, delay }}
      variants={getDirectionVariants()}
      className={className}
    >
      {children}
    </motion.div>
  )
}
