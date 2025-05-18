"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, updateQuantity, removeFromCart } = useCart()

  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isCartOpen])

  // Close cart on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeCart()
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [closeCart])

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.08 // 8% tax rate
  const total = subtotal + tax

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={closeCart}
          />

          {/* Cart Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white dark:bg-gray-900 shadow-xl z-50 flex flex-col"
          >
            <div className="p-4 border-b dark:border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <span className="text-sm text-muted-foreground dark:text-gray-400">
                  ({cart.reduce((total, item) => total + item.quantity, 0)} items)
                </span>
              </div>
              <Button variant="ghost" size="icon" onClick={closeCart} className="rounded-full">
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-off-white-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                    <ShoppingBag className="h-8 w-8 text-muted-foreground dark:text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                  <p className="text-muted-foreground dark:text-gray-400 mb-6">
                    Looks like you haven't added anything to your cart yet.
                  </p>
                  <Button onClick={closeCart}>Continue Shopping</Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence initial={false}>
                    {cart.map((item) => (
                      <motion.div
                        key={`${item.id}-${item.size}-${item.color}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      >
                        <div className="flex gap-4 py-4">
                          <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 bg-off-white-50 dark:bg-gray-800">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="font-semibold">PKR {(item.price * item.quantity).toLocaleString()}</p>
                            </div>
                            <div className="text-sm text-muted-foreground dark:text-gray-400 mt-1">
                              <span>Size: {item.size}</span>
                              <span className="mx-2">|</span>
                              <span>Color: {item.color}</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center border rounded-full dark:border-gray-700">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-full"
                                  onClick={() =>
                                    updateQuantity(item.id, item.size, item.color, Math.max(1, item.quantity - 1))
                                  }
                                >
                                  <Minus className="h-3 w-3" />
                                  <span className="sr-only">Decrease quantity</span>
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-full"
                                  onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                  <span className="sr-only">Increase quantity</span>
                                </Button>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full text-muted-foreground hover:text-destructive dark:text-gray-400 dark:hover:text-red-400"
                                onClick={() => removeFromCart(item.id, item.size, item.color)}
                              >
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Remove</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Separator className="dark:bg-gray-800" />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-4 border-t bg-off-white-50 dark:bg-gray-800 dark:border-gray-700">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground dark:text-gray-400">Subtotal</span>
                    <span>PKR {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground dark:text-gray-400">Tax (8%)</span>
                    <span>PKR {tax.toLocaleString()}</span>
                  </div>
                  <Separator className="dark:bg-gray-700" />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>PKR {total.toLocaleString()}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Link href="/checkout" onClick={closeCart}>
                    <Button className="w-full rounded-full group">
                      Checkout
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full rounded-full dark:bg-gray-800 dark:border-gray-700"
                    onClick={closeCart}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
