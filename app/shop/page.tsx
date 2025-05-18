"use client"

import { useState } from "react"
import { Filter, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"
import SiteHeader from "@/components/site-header"
import CartDrawer from "@/components/cart-drawer"
import FadeIn from "@/components/animations/fade-in"

export default function ShopPage() {
  const [categoryFilters, setCategoryFilters] = useState({
    shirts: false,
    hoodies: false,
    sweaters: false,
  })

  const [genderFilters, setGenderFilters] = useState({
    men: false,
    women: false,
  })

  const [priceFilters, setPriceFilters] = useState({
    under50: false,
    between50And100: false,
    between100And200: false,
    above200: false,
  })

  const [sortOption, setSortOption] = useState("newest")
  const [searchQuery, setSearchQuery] = useState("")

  // Handle filter changes
  const handleCategoryChange = (category: keyof typeof categoryFilters) => {
    setCategoryFilters({
      ...categoryFilters,
      [category]: !categoryFilters[category],
    })
  }

  const handleGenderChange = (gender: keyof typeof genderFilters) => {
    setGenderFilters({
      ...genderFilters,
      [gender]: !genderFilters[gender],
    })
  }

  const handlePriceChange = (price: keyof typeof priceFilters) => {
    setPriceFilters({
      ...priceFilters,
      [price]: !priceFilters[price],
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <CartDrawer />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-6 md:py-8 lg:py-12">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Shop All Products</h1>
                <p className="text-muted-foreground">Browse our collection of premium clothing</p>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Search products..."
                  className="w-full md:w-[200px] lg:w-[300px] dark:bg-gray-800 dark:border-gray-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full dark:bg-gray-800 dark:border-gray-700"
                    >
                      <SlidersHorizontal className="h-4 w-4" />
                      <span className="sr-only">Sort</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="dark:bg-gray-900 dark:border-gray-700">
                    <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                    <DropdownMenuSeparator className="dark:bg-gray-800" />
                    <DropdownMenuItem onClick={() => setSortOption("newest")}>
                      Newest
                      {sortOption === "newest" && <span className="ml-2">✓</span>}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortOption("price-low-high")}>
                      Price: Low to High
                      {sortOption === "price-low-high" && <span className="ml-2">✓</span>}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortOption("price-high-low")}>
                      Price: High to Low
                      {sortOption === "price-high-low" && <span className="ml-2">✓</span>}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortOption("popularity")}>
                      Popularity
                      {sortOption === "popularity" && <span className="ml-2">✓</span>}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-10">
            <FadeIn direction="left" className="hidden md:block space-y-6">
              <div>
                <h3 className="font-semibold mb-4 flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </h3>
                <Separator className="my-4 dark:bg-gray-800" />
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Categories</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="shirts"
                          className="h-4 w-4 dark:bg-gray-800 dark:border-gray-700"
                          checked={categoryFilters.shirts}
                          onChange={() => handleCategoryChange("shirts")}
                        />
                        <label htmlFor="shirts">Shirts</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="hoodies"
                          className="h-4 w-4 dark:bg-gray-800 dark:border-gray-700"
                          checked={categoryFilters.hoodies}
                          onChange={() => handleCategoryChange("hoodies")}
                        />
                        <label htmlFor="hoodies">Hoodies</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="sweaters"
                          className="h-4 w-4 dark:bg-gray-800 dark:border-gray-700"
                          checked={categoryFilters.sweaters}
                          onChange={() => handleCategoryChange("sweaters")}
                        />
                        <label htmlFor="sweaters">Sweaters</label>
                      </div>
                    </div>
                  </div>
                  <Separator className="dark:bg-gray-800" />
                  <div>
                    <h4 className="font-medium mb-2">Gender</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="men"
                          className="h-4 w-4 dark:bg-gray-800 dark:border-gray-700"
                          checked={genderFilters.men}
                          onChange={() => handleGenderChange("men")}
                        />
                        <label htmlFor="men">Men</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="women"
                          className="h-4 w-4 dark:bg-gray-800 dark:border-gray-700"
                          checked={genderFilters.women}
                          onChange={() => handleGenderChange("women")}
                        />
                        <label htmlFor="women">Women</label>
                      </div>
                    </div>
                  </div>
                  <Separator className="dark:bg-gray-800" />
                  <div>
                    <h4 className="font-medium mb-2">Price Range</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="price-1"
                          className="h-4 w-4 dark:bg-gray-800 dark:border-gray-700"
                          checked={priceFilters.under50}
                          onChange={() => handlePriceChange("under50")}
                        />
                        <label htmlFor="price-1">Under PKR 2,000</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="price-2"
                          className="h-4 w-4 dark:bg-gray-800 dark:border-gray-700"
                          checked={priceFilters.between50And100}
                          onChange={() => handlePriceChange("between50And100")}
                        />
                        <label htmlFor="price-2">PKR 2,000 - PKR 3,000</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="price-3"
                          className="h-4 w-4 dark:bg-gray-800 dark:border-gray-700"
                          checked={priceFilters.between100And200}
                          onChange={() => handlePriceChange("between100And200")}
                        />
                        <label htmlFor="price-3">PKR 3,000 - PKR 4,000</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="price-4"
                          className="h-4 w-4 dark:bg-gray-800 dark:border-gray-700"
                          checked={priceFilters.above200}
                          onChange={() => handlePriceChange("above200")}
                        />
                        <label htmlFor="price-4">PKR 4,000+</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2} className="md:col-span-3">
              <ProductGrid
                categoryFilters={categoryFilters}
                genderFilters={genderFilters}
                priceFilters={priceFilters}
                sortOption={sortOption}
                searchQuery={searchQuery}
              />
            </FadeIn>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
