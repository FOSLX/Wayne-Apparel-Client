"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const categories = {
    // Categories can be added here if needed in the future
  }

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  return (
    <nav
      className={cn("flex items-center space-x-6 lg:space-x-8", className)}
      {...props}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative" onMouseEnter={() => handleMouseEnter("home")}>
        <Link
          href="/"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            hoveredItem === "home" ? "text-primary" : "text-foreground"
          }`}
        >
          Home
        </Link>
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
          initial={{ width: 0, left: "50%" }}
          animate={{
            width: hoveredItem === "home" ? "100%" : 0,
            left: hoveredItem === "home" ? "0%" : "50%",
          }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <div className="relative" onMouseEnter={() => handleMouseEnter("shop")}>
        <Link
          href="/shop"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            hoveredItem === "shop" ? "text-primary" : "text-foreground"
          }`}
        >
          Shop
        </Link>
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
          initial={{ width: 0, left: "50%" }}
          animate={{
            width: hoveredItem === "shop" ? "100%" : 0,
            left: hoveredItem === "shop" ? "0%" : "50%",
          }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <div className="relative" onMouseEnter={() => handleMouseEnter("about")}>
        <Link
          href="/about"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            hoveredItem === "about" ? "text-primary" : "text-foreground"
          }`}
        >
          About
        </Link>
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
          initial={{ width: 0, left: "50%" }}
          animate={{
            width: hoveredItem === "about" ? "100%" : 0,
            left: hoveredItem === "about" ? "0%" : "50%",
          }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <div className="relative" onMouseEnter={() => handleMouseEnter("contact")}>
        <Link
          href="/contact"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            hoveredItem === "contact" ? "text-primary" : "text-foreground"
          }`}
        >
          Contact
        </Link>
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
          initial={{ width: 0, left: "50%" }}
          animate={{
            width: hoveredItem === "contact" ? "100%" : 0,
            left: hoveredItem === "contact" ? "0%" : "50%",
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </nav>
  )
}
