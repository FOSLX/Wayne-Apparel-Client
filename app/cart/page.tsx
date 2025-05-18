"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import SiteHeader from "@/components/site-header"
import Footer from "@/components/footer"
import { useCart } from "@/components/cart-provider"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart()

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.08 // 8% tax rate
  const total = subtotal + tax

  if (cart.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 container px-4 md:px-6 py-12">
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
          <div className="flex flex-col items-center justify-center py-12">
            <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link href="/shop">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container px-4 md:px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg border">
              <div className="p-6">
                <div className="hidden md:grid grid-cols-6 gap-4 mb-4 text-sm font-medium">
                  <div className="col-span-3">Product</div>
                  <div className="text-center">Price</div>
                  <div className="text-center">Quantity</div>
                  <div className="text-right">Total</div>
                </div>
                <Separator className="mb-4 md:hidden" />
                {cart.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`}>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-4">
                      <div className="md:col-span-3 flex items-center gap-4">
                        <div className="w-20 h-20 rounded-md overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <div className="text-sm text-muted-foreground mt-1">
                            <span>Size: {item.size}</span>
                            <span className="mx-2">|</span>
                            <span>Color: {item.color}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 text-muted-foreground md:hidden mt-2"
                            onClick={() => removeFromCart(item.id, item.size, item.color)}
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                      <div className="md:text-center flex items-center md:block">
                        <span className="md:hidden font-medium mr-2">Price:</span>PKR {item.price.toLocaleString()}
                      </div>
                      <div className="flex items-center md:justify-center">
                        <span className="md:hidden font-medium mr-2">Quantity:</span>
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.id, item.size, item.color, Math.max(1, item.quantity - 1))
                            }
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <span className="mx-2 w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </div>
                      </div>
                      <div className="md:text-right flex items-center justify-between md:block">
                        <span className="md:hidden font-medium">Total:</span>
                        <div className="flex items-center gap-2">
                          <span>PKR {(item.price * item.quantity).toLocaleString()}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hidden md:inline-flex"
                            onClick={() => removeFromCart(item.id, item.size, item.color)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <Link href="/shop">
                <Button variant="outline">Continue Shopping</Button>
              </Link>
            </div>
          </div>
          <div>
            <div className="rounded-lg border p-6 sticky top-6 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>PKR {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8%)</span>
                  <span>PKR {tax.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>PKR {total.toLocaleString()}</span>
                </div>
              </div>
              <Link href="/checkout">
                <Button className="w-full mt-6">Proceed to Checkout</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
