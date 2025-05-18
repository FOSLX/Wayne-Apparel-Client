"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { useMemo } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StaggerChildren from "@/components/animations/stagger-children"

// This would normally be fetched from an API
const products = [
  {
    id: "1",
    name: "Premium White Cotton Hoodie",
    price: 3300,
    image: "/images/white-hoodie-1.png",
    category: "Hoodies",
    isNew: true,
    gender: "Unisex",
    popularity: 95,
  },
  {
    id: "2",
    name: "Premium Pink Cotton Hoodie",
    price: 3300,
    image: "/images/pink-hoodie-1.png",
    category: "Hoodies",
    isNew: true,
    gender: "Unisex",
    popularity: 96,
  },
  {
    id: "3",
    name: "Premium Brooklyn Printed Hoodie",
    price: 3500,
    image: "/images/brooklyn-hoodie-1.png",
    category: "Hoodies",
    isNew: true,
    gender: "Unisex",
    popularity: 97,
  },
  {
    id: "4",
    name: "Old School Hoodies (Wayne Club)",
    price: 3600,
    image: "/images/wayne-club-hoodie-1.png",
    category: "Hoodies",
    isNew: true,
    gender: "Unisex",
    popularity: 98,
  },
  {
    id: "5",
    name: "Red Hair Shanks Pirate Legend Hoodie",
    price: 3700,
    image: "/images/shanks-hoodie-1.png",
    category: "Anime Collection",
    isNew: true,
    gender: "Unisex",
    popularity: 99,
  },
  {
    id: "6",
    name: "Straw Hat Luffy Wanted Poster Hoodie",
    price: 3700,
    image: "/images/luffy-hoodie-1.png",
    category: "Anime Collection",
    isNew: true,
    gender: "Unisex",
    popularity: 99,
  },
  {
    id: "7",
    name: "Sherlock Holmes 221B Baker Street Hoodie",
    price: 3700,
    image: "/images/sherlock-hoodie-1.png",
    category: "Detective Collection",
    isNew: true,
    gender: "Unisex",
    popularity: 98,
  },
]

interface ProductGridProps {
  categoryFilters: {
    shirts: boolean
    hoodies: boolean
    sweaters: boolean
  }
  genderFilters: {
    men: boolean
    women: boolean
  }
  priceFilters: {
    under50: boolean
    between50And100: boolean
    between100And200: boolean
    above200: boolean
  }
  sortOption: string
  searchQuery: string
}

export default function ProductGrid({
  categoryFilters,
  genderFilters,
  priceFilters,
  sortOption,
  searchQuery,
}: ProductGridProps) {
  // Adjust price filters for PKR
  const adjustedPriceFilters = {
    under2000: priceFilters.under50,
    between2000And3000: priceFilters.between50And100,
    between3000And4000: priceFilters.between100And200,
    above4000: priceFilters.above200,
  }

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (product) => product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query),
      )
    }

    // Apply category filters
    const categorySelected = categoryFilters.shirts || categoryFilters.hoodies || categoryFilters.sweaters
    if (categorySelected) {
      result = result.filter((product) => {
        if (categoryFilters.shirts && product.category === "Shirts") return true
        if (categoryFilters.hoodies && (product.category === "Hoodies" || product.category.includes("Collection")))
          return true
        if (categoryFilters.sweaters && product.category === "Sweaters") return true
        return false
      })
    }

    // Apply gender filters
    const genderSelected = genderFilters.men || genderFilters.women
    if (genderSelected) {
      result = result.filter((product) => {
        if (genderFilters.men && (product.gender === "Men" || product.gender === "Unisex")) return true
        if (genderFilters.women && (product.gender === "Women" || product.gender === "Unisex")) return true
        return false
      })
    }

    // Apply price filters (adjusted for PKR)
    const priceSelected =
      adjustedPriceFilters.under2000 ||
      adjustedPriceFilters.between2000And3000 ||
      adjustedPriceFilters.between3000And4000 ||
      adjustedPriceFilters.above4000
    if (priceSelected) {
      result = result.filter((product) => {
        if (adjustedPriceFilters.under2000 && product.price < 2000) return true
        if (adjustedPriceFilters.between2000And3000 && product.price >= 2000 && product.price < 3000) return true
        if (adjustedPriceFilters.between3000And4000 && product.price >= 3000 && product.price < 4000) return true
        if (adjustedPriceFilters.above4000 && product.price >= 4000) return true
        return false
      })
    }

    // Apply sorting
    switch (sortOption) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high-low":
        result.sort((a, b) => b.price - a.price)
        break
      case "popularity":
        result.sort((a, b) => b.popularity - a.popularity)
        break
      case "newest":
      default:
        // Assuming newer products have isNew = true
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1))
        break
    }

    return result
  }, [categoryFilters, genderFilters, sortOption, searchQuery])

  // Show message if no products match filters
  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h3 className="text-xl font-medium mb-2">No products found</h3>
        <p className="text-muted-foreground dark:text-gray-400 mb-6">
          Try adjusting your filters or search query to find what you're looking for.
        </p>
      </div>
    )
  }

  return (
    <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
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
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-muted-foreground dark:text-gray-400">{product.category}</p>
                <p className="text-sm text-muted-foreground dark:text-gray-400">{product.gender}</p>
              </div>
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
