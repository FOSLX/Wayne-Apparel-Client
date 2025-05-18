"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import Footer from "@/components/footer"
import SiteHeader from "@/components/site-header"
import FadeIn from "@/components/animations/fade-in"
import ScrollObserver from "@/components/animations/scroll-observer"
import CartDrawer from "@/components/cart-drawer"

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const banners = ["/images/winter-collection-banner.png", "/images/winter-outfits-banner.png"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev === 0 ? 1 : 0))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollObserver />
      <SiteHeader />
      <CartDrawer />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-off-white-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <FadeIn direction="left" className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Elevate Your Style with Wayne Apparel
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover our new collection of premium clothing designed for comfort and style.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/shop">
                    <Button size="lg" className="gap-1 rounded-full group">
                      Shop Now
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/upcoming-collection">
                    <Button size="lg" variant="outline" className="rounded-full dark:bg-gray-800 dark:border-gray-700">
                      Upcoming Collection
                    </Button>
                  </Link>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2} className="hidden lg:block">
                <div className="relative space-y-3">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 blur-lg dark:from-primary/10 dark:to-primary/5"></div>
                    <div className="relative w-full h-[250px] overflow-hidden rounded-xl">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentBanner}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={banners[currentBanner] || "/placeholder.svg"}
                            alt={currentBanner === 0 ? "Winter Collection Fashion Sale" : "Winter Outfits"}
                            fill
                            className="object-cover object-center"
                            priority
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 blur-lg dark:from-primary/10 dark:to-primary/5"></div>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="mx-auto h-[364px] overflow-hidden rounded-xl object-cover object-center w-full relative"
                        style={{ aspectRatio: "9/16" }}
                      >
                        <source src="/videos/fashion-portrait.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 blur-lg dark:from-primary/10 dark:to-primary/5"></div>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="mx-auto h-[364px] overflow-hidden rounded-xl object-cover object-center w-full relative"
                        style={{ aspectRatio: "9/16" }}
                      >
                        <source src="/videos/fashion-portrait-2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
          <div className="container px-4 md:px-6">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Products</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Check out our most popular items this season
                </p>
              </div>
            </FadeIn>
            <FeaturedProducts />
            <FadeIn delay={0.4} className="flex justify-center mt-10">
              <Link href="/shop">
                <Button size="lg" className="rounded-full">
                  View All Products
                </Button>
              </Link>
            </FadeIn>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-off-white-100 dark:bg-gray-900 subtle-pattern">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <FadeIn direction="left" className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Wayne Apparel</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Founded in 2024, Wayne Apparel is dedicated to creating high-quality, sustainable clothing that
                    combines comfort with contemporary style.
                  </p>
                </div>
                <div>
                  <Link href="/about">
                    <Button variant="outline" className="rounded-full dark:bg-gray-800 dark:border-gray-700">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2} className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 blur-lg dark:from-primary/5 dark:to-primary/2"></div>
                  <Image
                    src="/images/wayne-logo.png"
                    width={600}
                    height={400}
                    alt="Wayne Apparel Logo"
                    className="mx-auto overflow-hidden rounded-xl object-contain object-center relative p-8"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
