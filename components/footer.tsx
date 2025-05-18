"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FadeIn from "@/components/animations/fade-in"

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"))
  }, [])

  return (
    <footer
      className={`border-t ${
        isDarkMode
          ? "bg-black border-gray-800 text-white"
          : "gradient-footer"
      }`}
    >
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <FadeIn direction="up" delay={0.1}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-primary text-primary-foreground p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.9451 9H18V3H6V9H3.05493C3.03158 9.00005 3.00826 9.00072 2.98499 9.002C2.74194 9.01 2.50965 9.11 2.33 9.29C2.13 9.48 2.01 9.74 2 10.02V10.03L2.895 19.07C2.97 19.66 3.47 20.1 4.06 20.1H19.94C20.53 20.1 21.03 19.66 21.105 19.07L22 10.03C22 10.02 22 10.01 22 10C21.99 9.74 21.87 9.48 21.67 9.29C21.4671 9.0978 21.2106 8.99957 20.9451 9ZM8 5H16V9H8V5ZM14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </motion.div>
                <span>Wayne Apparel</span>
              </div>
              <p className="text-muted-foreground dark:text-gray-300">
                Premium clothing for everyday comfort and style. Crafted with quality materials for the modern
                individual.
              </p>
              <div className="flex space-x-2">
                <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white hover:bg-off-white-100 border-off-white-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <a
                    href="https://www.instagram.com/wayneapparelshop?igsh=eW1xNXB6MDY0ZXgw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-white hover:bg-off-white-100 border-off-white-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </a>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white hover:bg-off-white-100 border-off-white-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                    <span className="sr-only">TikTok</span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2 border-off-white-200 dark:border-gray-700">
                Shop
              </h3>
              <ul className="space-y-3">
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link
                    href="/categories/men"
                    className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-white flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Men's Clothing
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link
                    href="/categories/women"
                    className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-white flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Women's Clothing
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link
                    href="/categories/shirts"
                    className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-white flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Shirts
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link
                    href="/categories/hoodies"
                    className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-white flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Hoodies
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link
                    href="/categories/sweaters"
                    className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-white flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Sweaters
                  </Link>
                </motion.li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2 border-off-white-200 dark:border-gray-700">
                Company
              </h3>
              <ul className="space-y-3">
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link
                    href="/about"
                    className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-white flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    About Us
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link
                    href="/contact"
                    className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-white flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contact
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link
                    href="/careers"
                    className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-white flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Careers
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link
                    href="/terms"
                    className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-white flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Terms & Conditions
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-white flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Privacy Policy
                  </Link>
                </motion.li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2 border-off-white-200 dark:border-gray-700">
                Contact & Newsletter
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-muted-foreground dark:text-gray-300">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Ghouse Garden Ph 4 jallo mor Lahore</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground dark:text-gray-300">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>+92 309 8281292</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground dark:text-gray-300">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>wayneapparel.shop@gmail.com</span>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-sm text-muted-foreground dark:text-gray-300 mb-2">
                  Subscribe to our newsletter for updates and exclusive offers.
                </p>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Email address"
                    type="email"
                    className="bg-white border-off-white-300 focus-visible:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <Button className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">Subscribe</Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 pt-8 border-t border-off-white-200 dark:border-gray-700 flex flex-col md:flex-row justify-center items-center text-sm text-muted-foreground dark:text-gray-400">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Wayne Apparel. All rights reserved.
            </p>
            <p className="text-center md:text-right">
              Made by{" "}
              <a
                href="https://www.foslx.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                foslx
              </a>{" "}
              with love ♥
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
