"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StaggerChildren from "@/components/animations/stagger-children"

// This would normally be fetched from an API
const featuredProducts = [
  {
    id: "1",
    name: "Premium White Cotton Hoodie",
    price: 3300,
    image: "/images/white-hoodie-1.png",
    category: "Hoodies",
    isNew: true,
  },
  {
    id: "2",
    name: "Premium Pink Cotton Hoodie",
    price: 3300,
    image: "/images/pink-hoodie-1.png",
    category: "Hoodies",
    isNew: true,
  },
  {
    id: "3",
    name: "Premium Brooklyn Printed Hoodie",
    price: 3500,
    image: "/images/brooklyn-hoodie-1.png",
    category: "Hoodies",
    isNew: true,
  },
  {
    id: "4",
    name: "Old School Hoodies (Wayne Club)",
    price: 3600,
    image: "/images/wayne-club-hoodie-1.png",
    category: "Hoodies",
    isNew: true,
  },
  {
    id: "5",
    name: "Red Hair Shanks Pirate Legend Hoodie",
    price: 3700,
    image: "/images/shanks-hoodie-1.png",
    category: "Anime Collection",
    isNew: true,
  },
  {
    id: "6",
    name: "Straw Hat Luffy Wanted Poster Hoodie",
    price: 3700,
    image: "/images/luffy-hoodie-1.png",
    category: "Anime Collection",
    isNew: true,
  },
  {
    id: "7",
    name: "Sherlock Holmes 221B Baker Street Hoodie",
    price: 3700,
    image: "/images/sherlock-hoodie-1.png",
    category: "Detective Collection",
    isNew: true,
  },
]

export default function FeaturedProducts() {
  return (
    <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {featuredProducts.map((product) => (
        <motion.div
          key={product.id}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="hover-lift"
        >
          <Card className="overflow-hidden bg-white border-off-white-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="relative">
              <Link href={`/product/${product.id}`}>
                <div className="overflow-hidden">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={400}
                      className="w-full h-[300px] object-cover"
                    />
                  </motion.div>
                </div>
              </Link>
              {product.isNew && <Badge className="absolute top-2 right-2 bg-primary hover:bg-primary">New</Badge>}
            </div>
            <CardContent className="p-4 bg-off-white-50 dark:bg-gray-900">
              <Link href={`/product/${product.id}`}>
                <h3 className="font-semibold text-lg hover:underline">{product.name}</h3>
              </Link>
              <p className="text-sm text-muted-foreground dark:text-gray-400">{product.category}</p>
              <p className="font-semibold mt-2">PKR {product.price.toLocaleString()}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 bg-off-white-50 dark:bg-gray-900">
              <Link href={`/product/${product.id}`} className="w-full">
                <Button className="w-full group" variant="outline">
                  <motion.div initial={{ x: 0 }} whileHover={{ x: -4 }} transition={{ duration: 0.2 }} className="mr-2">
                    <ShoppingCart className="h-4 w-4" />
                  </motion.div>
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    View Product
                  </motion.span>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </StaggerChildren>
  )
}
