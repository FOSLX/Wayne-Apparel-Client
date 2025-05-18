"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingBag, Menu, X, ChevronDown, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import MainNav from "@/components/main-nav"
import { useCart } from "@/components/cart-provider"
import ThemeToggle from "@/components/theme-toggle"

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { cart, openCart } = useCart()

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b backdrop-blur-sm " +
            (
              typeof window !== "undefined" && document.documentElement.classList.contains("dark")
                ? "dark:bg-black/95 dark:border-gray-800"
                : "gradient-header"
            )
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="container flex h-16 md:h-20 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ShoppingBag className="h-6 w-6" />
          </motion.div>
          <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            Wayne Apparel
          </motion.span>
        </Link>

        <div className="hidden md:block">
          <MainNav className="mx-6" />
        </div>

        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="rounded-full relative" onClick={openCart}>
              <ShoppingBag className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
            <Link href="/login">
              <Button
                variant="outline"
                className="rounded-full px-4 bg-off-white-50 hover:bg-off-white-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                Login
              </Button>
            </Link>
          </motion.div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-b bg-off-white-50 dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="container py-4">
              <div className="flex items-center">
                <Input
                  placeholder="Search for products..."
                  className="flex-1 bg-white dark:bg-gray-900 border-2 focus-visible:ring-0 focus-visible:border-primary dark:border-gray-700"
                  autoFocus
                />
                <Button className="ml-2 rounded-full">Search</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-white dark:bg-gray-900 dark:border-gray-800"
          >
            <div className="container py-4 space-y-4">
              <Link
                href="/"
                className="block py-2 text-lg font-medium border-b pb-2 dark:border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="block py-2 text-lg font-medium border-b pb-2 dark:border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <div className="py-2 border-b pb-2 dark:border-gray-800">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Categories</span>
                  <ChevronDown className="h-5 w-5" />
                </div>
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/categories/men" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Men
                  </Link>
                  <Link href="/categories/women" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Women
                  </Link>
                  <Link href="/categories/shirts" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Shirts
                  </Link>
                  <Link href="/categories/hoodies" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Hoodies
                  </Link>
                  <Link href="/categories/sweaters" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Sweaters
                  </Link>
                </div>
              </div>
              <Link
                href="/about"
                className="block py-2 text-lg font-medium border-b pb-2 dark:border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-lg font-medium border-b pb-2 dark:border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 flex gap-2">
                <Link href="/login" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full dark:bg-gray-800 dark:border-gray-700">
                    Login
                  </Button>
                </Link>
                <Link href="/signup" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
