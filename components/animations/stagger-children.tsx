"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  delayIncrement?: number
  staggerTime?: number
}

export default function StaggerChildren({
  children,
  className = "",
  delayIncrement = 0.1,
  staggerTime = 0.1,
}: StaggerChildrenProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerTime,
        delayChildren: delayIncrement,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.1 }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
