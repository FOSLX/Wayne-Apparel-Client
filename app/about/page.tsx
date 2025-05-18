"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Users, Leaf, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/site-header"
import Footer from "@/components/footer"
import CartDrawer from "@/components/cart-drawer"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <CartDrawer />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-off-white-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <FadeIn direction="up" className="max-w-3xl">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h1>
                  <p className="text-muted-foreground md:text-xl">
                    Founded in 2024, Wayne Apparel is dedicated to creating high-quality, sustainable clothing that
                    combines comfort with contemporary style.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2} className="mt-8">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 blur-lg dark:from-primary/5 dark:to-primary/2"></div>
                  <Image
                    src="/images/wayne-logo.png"
                    alt="Wayne Apparel Logo"
                    width={600}
                    height={400}
                    className="mx-auto overflow-hidden rounded-xl object-contain object-center relative p-8"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
          <div className="container px-4 md:px-6">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Mission</h2>
              <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
                We're on a mission to create clothing that not only looks good but feels good to wear and is good for
                the planet.
              </p>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              <StaggerChildren>
                <FadeIn className="flex flex-col items-center text-center p-6 rounded-lg bg-off-white-50 dark:bg-gray-800">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community First</h3>
                  <p className="text-muted-foreground">
                    We believe in building a community around our brand, where customers become part of our extended
                    family.
                  </p>
                </FadeIn>

                <FadeIn className="flex flex-col items-center text-center p-6 rounded-lg bg-off-white-50 dark:bg-gray-800">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We're committed to sustainable practices, from sourcing materials to packaging and shipping.
                  </p>
                </FadeIn>

                <FadeIn className="flex flex-col items-center text-center p-6 rounded-lg bg-off-white-50 dark:bg-gray-800">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quality Craftsmanship</h3>
                  <p className="text-muted-foreground">
                    Every piece we create is crafted with attention to detail and built to last, reducing waste and
                    increasing value.
                  </p>
                </FadeIn>
              </StaggerChildren>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <FadeIn direction="up" className="max-w-3xl">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Values</h2>
                  <p className="text-muted-foreground">
                    At Wayne Apparel, our values guide everything we do. We believe in creating products that stand the
                    test of time, both in quality and design.
                  </p>

                  <ul className="space-y-4 mt-6 mx-auto">
                    <li className="flex flex-col items-center">
                      <CheckCircle2 className="h-6 w-6 text-primary mb-2" />
                      <div className="text-center">
                        <h3 className="font-semibold">Authenticity</h3>
                        <p className="text-muted-foreground">
                          We stay true to our vision and create clothing that represents our unique perspective.
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col items-center">
                      <CheckCircle2 className="h-6 w-6 text-primary mb-2" />
                      <div className="text-center">
                        <h3 className="font-semibold">Innovation</h3>
                        <p className="text-muted-foreground">
                          We constantly push boundaries to bring fresh ideas and designs to our collections.
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col items-center">
                      <CheckCircle2 className="h-6 w-6 text-primary mb-2" />
                      <div className="text-center">
                        <h3 className="font-semibold">Inclusivity</h3>
                        <p className="text-muted-foreground">
                          We create clothing for everyone, regardless of age, size, or background.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2} className="mt-8">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 blur-lg dark:from-primary/5 dark:to-primary/2"></div>
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    width={600}
                    height={600}
                    alt="Our Values"
                    className="mx-auto overflow-hidden rounded-xl object-cover object-center relative"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-off-white-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get In Touch</h2>
              <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
                Have questions or want to learn more about Wayne Apparel? We'd love to hear from you.
              </p>
            </FadeIn>

            <div className="max-w-md mx-auto">
              <FadeIn direction="up" className="space-y-4">
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 text-center">
                  <div className="p-2 rounded-full bg-primary/10">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">wayneapparel.shop@gmail.com</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 text-center">
                  <div className="p-2 rounded-full bg-primary/10">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+92 309 8281292</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 text-center">
                  <div className="p-2 rounded-full bg-primary/10">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">Ghouse Garden Ph 4 jallo mor Lahore</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-8 flex justify-center">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full group">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
