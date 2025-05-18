"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Check, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SiteHeader from "@/components/site-header"
import Footer from "@/components/footer"
import { useCart } from "@/components/cart-provider"
import CartDrawer from "@/components/cart-drawer"

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const [formStep, setFormStep] = useState(1)

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.08 // 8% tax rate
  const shipping = 500 // PKR 500 shipping
  const total = subtotal + tax + shipping

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formStep === 1) {
      setFormStep(2)
      window.scrollTo(0, 0)
    } else {
      // Process payment and order
      alert("Order placed successfully!")
      clearCart()
      // Redirect to confirmation page
      window.location.href = "/"
    }
  }

  if (cart.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <CartDrawer />
        <main className="flex-1 container px-4 md:px-6 py-12">
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>
          <div className="flex flex-col items-center justify-center py-12">
            <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">You need to add items to your cart before checking out.</p>
            <Link href="/shop">
              <Button>Shop Now</Button>
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
      <CartDrawer />
      <main className="flex-1 container px-4 md:px-6 py-12">
        <div className="flex items-center mb-8">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <div className="ml-auto flex items-center">
            <div className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-3 w-3" />
              </div>
              <span className={formStep > 1 ? "text-primary" : ""}>Shipping</span>
            </div>
            <Separator className="mx-2 h-4 rotate-[90deg] dark:bg-gray-700" />
            <div className="flex items-center space-x-2">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full ${formStep === 2 ? "bg-primary text-primary-foreground" : "border dark:border-gray-700"}`}
              >
                {formStep === 2 ? <Check className="h-3 w-3" /> : <span className="text-xs">2</span>}
              </div>
              <span className={formStep === 2 ? "text-primary" : ""}>Payment</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {formStep === 1 ? (
                <div className="space-y-8">
                  <div className="rounded-lg border p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" required className="dark:bg-gray-900 dark:border-gray-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" required className="dark:bg-gray-900 dark:border-gray-700" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required className="dark:bg-gray-900 dark:border-gray-700" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" required className="dark:bg-gray-900 dark:border-gray-700" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" required className="dark:bg-gray-900 dark:border-gray-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                        <Input id="apartment" className="dark:bg-gray-900 dark:border-gray-700" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" required className="dark:bg-gray-900 dark:border-gray-700" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">Province</Label>
                          <Select>
                            <SelectTrigger id="state" className="dark:bg-gray-900 dark:border-gray-700">
                              <SelectValue placeholder="Select province" />
                            </SelectTrigger>
                            <SelectContent className="dark:bg-gray-900 dark:border-gray-700">
                              <SelectItem value="punjab">Punjab</SelectItem>
                              <SelectItem value="sindh">Sindh</SelectItem>
                              <SelectItem value="kpk">Khyber Pakhtunkhwa</SelectItem>
                              <SelectItem value="balochistan">Balochistan</SelectItem>
                              <SelectItem value="islamabad">Islamabad</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">Postal Code</Label>
                          <Input id="zip" required className="dark:bg-gray-900 dark:border-gray-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h2 className="text-lg font-semibold mb-4">Shipping Method</h2>
                    <RadioGroup defaultValue="standard">
                      <div className="flex items-center justify-between border rounded-lg p-4 mb-2 dark:border-gray-700">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="standard" id="standard" className="dark:border-gray-600" />
                          <Label htmlFor="standard">Standard Shipping (3-5 business days)</Label>
                        </div>
                        <span>PKR 500</span>
                      </div>
                      <div className="flex items-center justify-between border rounded-lg p-4 mb-2 dark:border-gray-700">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="express" id="express" className="dark:border-gray-600" />
                          <Label htmlFor="express">Express Shipping (1-2 business days)</Label>
                        </div>
                        <span>PKR 1,200</span>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="rounded-lg border p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
                    <RadioGroup defaultValue="credit-card">
                      <div className="flex items-center justify-between border rounded-lg p-4 mb-2 dark:border-gray-700">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="credit-card" id="credit-card" className="dark:border-gray-600" />
                          <Label htmlFor="credit-card" className="flex items-center">
                            <CreditCard className="mr-2 h-4 w-4" />
                            Credit Card
                          </Label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border rounded-lg p-4 mb-2 dark:border-gray-700">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cash" id="cash" className="dark:border-gray-600" />
                          <Label htmlFor="cash">Cash on Delivery</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="rounded-lg border p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h2 className="text-lg font-semibold mb-4">Card Details</h2>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-name">Name on Card</Label>
                        <Input id="card-name" required className="dark:bg-gray-900 dark:border-gray-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input
                          id="card-number"
                          required
                          placeholder="1234 5678 9012 3456"
                          className="dark:bg-gray-900 dark:border-gray-700"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input
                            id="expiry"
                            required
                            placeholder="MM/YY"
                            className="dark:bg-gray-900 dark:border-gray-700"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input
                            id="cvc"
                            required
                            placeholder="123"
                            className="dark:bg-gray-900 dark:border-gray-700"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-8 flex justify-between">
                {formStep === 1 ? (
                  <Link href="/cart">
                    <Button variant="outline" type="button" className="dark:bg-gray-800 dark:border-gray-700">
                      Back to Cart
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="dark:bg-gray-800 dark:border-gray-700"
                  >
                    Back to Shipping
                  </Button>
                )}
                <Button type="submit">{formStep === 1 ? "Continue to Payment" : "Place Order"}</Button>
              </div>
            </form>
          </div>
          <div>
            <div className="rounded-lg border p-6 sticky top-6 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="flex justify-between">
                    <div className="flex items-center">
                      <span className="bg-muted rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 dark:bg-gray-700">
                        {item.quantity}
                      </span>
                      <span>{item.name}</span>
                    </div>
                    <span>PKR {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                <Separator className="dark:bg-gray-700" />
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>PKR {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>PKR {shipping.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>PKR {tax.toLocaleString()}</span>
                </div>
                <Separator className="dark:bg-gray-700" />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>PKR {total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
