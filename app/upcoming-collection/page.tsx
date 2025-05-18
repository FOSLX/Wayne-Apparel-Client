"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import SiteHeader from "@/components/site-header"
import Footer from "@/components/footer"
import CartDrawer from "@/components/cart-drawer"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"

export default function UpcomingCollectionPage() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <CartDrawer />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-black text-white py-16 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <FadeIn direction="up">
              <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
                <Badge className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 text-sm rounded-full">
                  Coming Soon
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">OJ Edition</h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-[700px]">
                  Our most anticipated collection yet. Featuring unique designs from the Tortoise and Hare Collection
                  and Pink Panther Collection.
                </p>
                <div className="flex items-center gap-2 text-green-400">
                  <Calendar className="h-5 w-5" />
                  <span>Launching Summer 2024</span>
                </div>
              </div>
            </FadeIn>

            <div className="mt-12 md:mt-16">
              <FadeIn delay={0.2}>
                <div className="flex justify-center">
                  <Image
                    src="/images/oj-edition-logo.png"
                    alt="OJ Edition Logo"
                    width={300}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Collection Tabs */}
        <section className="w-full py-12 md:py-16 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Explore the Collections</h2>

              <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                <div className="flex justify-center mb-8">
                  <TabsList className="grid w-full max-w-md grid-cols-3">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="tortoise-hare">Tortoise & Hare</TabsTrigger>
                    <TabsTrigger value="pink-panther">Pink Panther</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CollectionCard
                      title="Tortoise and Hare Collection"
                      description="Inspired by the classic fable, this collection features playful designs with our signature turtle and hare characters."
                      image="/images/black-tortoise-hare-hoodie.png"
                      secondaryImage="/images/wall-e-eve-characters.png"
                      bgColor="bg-black"
                      link="#"
                      onClick={() => {
                        console.log("Switching to tortoise-hare tab")
                        setActiveTab("tortoise-hare")
                      }}
                    />
                    <CollectionCard
                      title="Pink Panther Collection"
                      description="Featuring the iconic Pink Panther in stylish, contemporary designs with a touch of attitude."
                      image="/images/black-pink-panther-hoodie.png"
                      secondaryImage="/images/pink-panther-character.png"
                      bgColor="bg-black"
                      link="#"
                      onClick={() => {
                        console.log("Switching to pink-panther tab")
                        setActiveTab("pink-panther")
                      }}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="tortoise-hare">
                  <StaggerChildren className="space-y-12">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Tortoise and Hare Collection</h3>
                      <p className="text-muted-foreground mb-8 max-w-3xl">
                        Our Tortoise and Hare Collection draws inspiration from the timeless fable, reimagined with a
                        modern streetwear aesthetic. Each piece features our signature characters in unique,
                        eye-catching designs.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProductPreview
                          title="Black Tortoise & Hare Hoodie"
                          image="/images/black-tortoise-hare-hoodie.png"
                          price="3,700"
                          bgColor="bg-black"
                        />
                        <ProductPreview
                          title="Blue Tortoise & Hare Hoodie"
                          image="/images/blue-hoodie-design.png"
                          price="3,700"
                          bgColor="bg-[#a8d8f0]"
                        />
                        <ProductPreview
                          title="Japanese Sword Edition"
                          image="/images/japanese-sword.png"
                          price="3,900"
                          bgColor="bg-white"
                          isSpecialEdition
                        />
                      </div>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
                      <h4 className="text-xl font-semibold mb-4">Collection Details</h4>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Premium cotton blend hoodies</li>
                        <li>DTF (Direct to Film) and embroidery printing techniques</li>
                        <li>Available in sizes S through XXL</li>
                        <li>Limited edition designs</li>
                        <li>Unisex fit</li>
                      </ul>
                    </div>
                  </StaggerChildren>
                </TabsContent>

                <TabsContent value="pink-panther">
                  <StaggerChildren className="space-y-12">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Pink Panther Collection</h3>
                      <p className="text-muted-foreground mb-8 max-w-3xl">
                        Our Pink Panther Collection brings the iconic character to life with a contemporary twist.
                        Featuring bold designs and the unmistakable Pink Panther style, these pieces are perfect for
                        making a statement.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProductPreview
                          title="Black Pink Panther Hoodie"
                          image="/images/black-pink-panther-hoodie.png"
                          price="3,700"
                          bgColor="bg-black"
                        />
                        <ProductPreview
                          title="Pink Brooklyn Hoodie"
                          image="/images/pink-brooklyn-hoodie.png"
                          price="3,500"
                          bgColor="bg-[#ffc0cb]"
                        />
                        <ProductPreview
                          title="Pink Panther Bubble Tea"
                          image="/images/pink-panther-character.png"
                          price="3,900"
                          bgColor="bg-white"
                          isSpecialEdition
                        />
                      </div>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
                      <h4 className="text-xl font-semibold mb-4">Collection Details</h4>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Premium cotton blend hoodies</li>
                        <li>DTF (Direct to Film) and embroidery printing techniques</li>
                        <li>Available in sizes S through XXL</li>
                        <li>Officially licensed Pink Panther designs</li>
                        <li>Unisex fit</li>
                      </ul>
                    </div>
                  </StaggerChildren>
                </TabsContent>
              </Tabs>
            </FadeIn>
          </div>
        </section>

        {/* Notification Section */}
        <section className="w-full py-12 md:py-16 bg-green-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Get Notified When We Launch</h2>
                  <p className="text-muted-foreground">
                    Be the first to know when the OJ Edition collection drops. Sign up for early access.
                  </p>
                </div>
                <Button size="lg" className="rounded-full">
                  Join the Waitlist
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

interface CollectionCardProps {
  title: string
  description: string
  image: string
  secondaryImage: string
  bgColor: string
  link: string
  onClick: () => void
}

function CollectionCard({ title, description, image, secondaryImage, bgColor, link, onClick }: CollectionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative overflow-hidden rounded-xl border shadow-md hover-lift"
    >
      <div className={`absolute inset-0 ${bgColor} z-0`}></div>
      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>

        <div className="mt-6 flex justify-between items-end">
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white/10"
            onClick={onClick}
            type="button"
          >
            View Collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <div className="relative h-32 w-32">
            <Image
              src={secondaryImage || "/placeholder.svg"}
              alt={title}
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-full h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={400}
          className="object-contain object-bottom opacity-50 group-hover:opacity-70 transition-opacity"
        />
      </div>
    </motion.div>
  )
}

interface ProductPreviewProps {
  title: string
  image: string
  price: string
  bgColor: string
  isSpecialEdition?: boolean
}

function ProductPreview({ title, image, price, bgColor, isSpecialEdition = false }: ProductPreviewProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group overflow-hidden rounded-xl border shadow-sm hover-lift"
    >
      <div className={`aspect-square overflow-hidden ${bgColor}`}>
        <div className="relative h-full w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain p-4" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-muted-foreground">PKR {price}</p>
          </div>
          {isSpecialEdition && <Badge className="bg-amber-500 hover:bg-amber-600 text-white">Limited Edition</Badge>}
        </div>
        <div className="mt-4">
          <Button variant="outline" className="w-full">
            Coming Soon
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
