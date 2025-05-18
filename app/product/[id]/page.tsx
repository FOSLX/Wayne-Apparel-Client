"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Minus, Plus, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SiteHeader from "@/components/site-header"
import Footer from "@/components/footer"
import RelatedProducts from "@/components/related-products"
import { useCart } from "@/components/cart-provider"
import CartDrawer from "@/components/cart-drawer"
import FadeIn from "@/components/animations/fade-in"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { addToCart } = useCart()

  // Products data - this would normally be fetched from an API based on the ID
  const products = {
    "1": {
      id: "1",
      name: "Premium White Cotton Hoodie",
      price: 3300,
      description:
        "A premium white cotton hoodie designed for comfort and style. Perfect for casual wear or lounging at home.",
      longDescription:
        "Crafted from 100% organic cotton, this hoodie features a comfortable fit with a lined hood, front kangaroo pocket, and ribbed cuffs and hem. The fabric is pre-shrunk and machine washable, ensuring long-lasting quality and easy care. Available in multiple sizes.",
      images: ["/images/white-hoodie-1.png", "/images/white-hoodie-2.png"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White"],
      category: "Hoodies",
      gender: "Unisex",
    },
    "2": {
      id: "2",
      name: "Premium Pink Cotton Hoodie",
      price: 3300,
      description:
        "A premium pink cotton hoodie designed for comfort and style. Perfect for casual wear or lounging at home.",
      longDescription:
        "Crafted from 100% organic cotton, this hoodie features a comfortable fit with a lined hood, front kangaroo pocket, and ribbed cuffs and hem. The fabric is pre-shrunk and machine washable, ensuring long-lasting quality and easy care. Available in multiple sizes.",
      images: ["/images/pink-hoodie-1.png", "/images/pink-hoodie-2.png", "/images/pink-hoodie-3.png"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Pink"],
      category: "Hoodies",
      gender: "Unisex",
    },
    "3": {
      id: "3",
      name: "Premium Brooklyn Printed Hoodie",
      price: 3500,
      description:
        "A stylish Brooklyn printed hoodie available in multiple colors. Features a classic 1898 Brooklyn New York design.",
      longDescription:
        "This premium Brooklyn printed hoodie is perfect for those who appreciate urban style with a vintage touch. The 1898 Brooklyn New York print pays homage to the borough's rich history. Made from high-quality cotton blend material for maximum comfort and durability. Features a spacious kangaroo pocket and adjustable drawstring hood.",
      images: ["/images/brooklyn-hoodie-1.png", "/images/brooklyn-hoodie-2.png", "/images/brooklyn-hoodie-3.png"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Light Blue", "White"],
      category: "Hoodies",
      gender: "Unisex",
    },
    "4": {
      id: "4",
      name: "Old School Hoodies (Wayne Club)",
      price: 3600,
      description:
        "Classic Wayne Club hoodies with vintage styling. Features the Wayne Club logo on the back for a distinctive look.",
      longDescription:
        "Our Old School Wayne Club hoodies combine classic styling with modern comfort. Each hoodie features the distinctive Wayne Club logo on the back, giving it a premium, branded look. Made from heavyweight cotton blend fabric that's both warm and durable. Perfect for casual outings or as a statement piece in your wardrobe collection.",
      images: ["/images/wayne-club-hoodie-1.png", "/images/wayne-club-hoodie-2.png", "/images/wayne-club-hoodie-3.png"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Pink"],
      category: "Hoodies",
      gender: "Unisex",
    },
    "5": {
      id: "5",
      name: "Red Hair Shanks Pirate Legend Hoodie",
      price: 3700,
      description:
        "Exclusive One Piece anime hoodie featuring the legendary pirate Red Hair Shanks. A must-have for anime enthusiasts.",
      longDescription:
        "Celebrate the legendary Yonko from One Piece with this premium Red Hair Shanks hoodie. The striking design features Shanks' intense gaze on the front and a detailed character illustration on the back with his title and legacy. Made from high-quality cotton blend material that's soft, durable, and perfect for everyday wear. This collector's item is a must-have for any true One Piece fan.",
      images: ["/images/shanks-hoodie-1.png", "/images/shanks-hoodie-2.png", "/images/shanks-hoodie-3.png"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black"],
      category: "Anime Collection",
      gender: "Unisex",
    },
    "6": {
      id: "6",
      name: "Straw Hat Luffy Wanted Poster Hoodie",
      price: 3700,
      description:
        "Iconic One Piece hoodie featuring Monkey D. Luffy with his signature grin and wanted poster design on the back.",
      longDescription:
        "Join the Straw Hat crew with this premium Luffy hoodie from our One Piece collection. The front features Luffy's iconic grin with Japanese text, while the back showcases his famous wanted poster design. Crafted from high-quality cotton blend material that's comfortable for all-day wear. The detailed print uses durable ink that won't fade with washing. Perfect for anime fans and collectors who want to show their love for the future Pirate King.",
      images: ["/images/luffy-hoodie-1.png", "/images/luffy-hoodie-2.png", "/images/luffy-hoodie-3.png"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black"],
      category: "Anime Collection",
      gender: "Unisex",
    },
    "7": {
      id: "7",
      name: "Sherlock Holmes 221B Baker Street Hoodie",
      price: 3700,
      description:
        "Elegant Sherlock Holmes themed hoodie from the 221B Edition. Features the iconic address and detective silhouette.",
      longDescription:
        "Channel your inner detective with this sophisticated Sherlock Holmes hoodie from our exclusive 221B Edition. The minimalist front design features the iconic Baker Street address, while the back showcases an artistic rendering of the world's greatest detective with his famous quote: 'I'm not a psychopath, I'm a high-functioning sociopath. Do your research.' Crafted from premium cotton blend in a calming light blue color that stands out from typical black hoodies. Perfect for mystery enthusiasts and fans of classic literature.",
      images: ["/images/sherlock-hoodie-1.png", "/images/sherlock-hoodie-2.png", "/images/sherlock-hoodie-3.png"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Light Blue"],
      category: "Detective Collection",
      gender: "Unisex",
    },
  }

  // Get the product based on the ID
  const product = products[params.id as keyof typeof products] || {
    id: params.id,
    name: "Product Not Found",
    price: 0,
    description: "This product could not be found.",
    longDescription: "This product could not be found.",
    images: ["/placeholder.svg?height=600&width=600"],
    sizes: [],
    colors: [],
    category: "",
    gender: "",
  }

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [product.images.length])

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color")
      return
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      size: selectedSize,
      color: selectedColor,
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <CartDrawer />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-6 md:py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <FadeIn direction="left">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700">
                  <div className="relative aspect-square w-full">
                    {product.images.map((image, index) => (
                      <Image
                        key={index}
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className={`object-cover transition-opacity duration-1000 ${
                          index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                        priority={index === 0}
                      />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className={`overflow-hidden rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700 hover-lift cursor-pointer ${
                        index === currentImageIndex ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        width={200}
                        height={200}
                        className="aspect-square w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold">{product.name}</h1>
                  <p className="text-2xl font-semibold mt-2">PKR {product.price.toLocaleString()}</p>
                </div>
                <p className="text-muted-foreground">{product.description}</p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="size" className="block text-sm font-medium mb-1">
                      Size
                    </label>
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger id="size" className="w-full dark:bg-gray-800 dark:border-gray-700">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-900 dark:border-gray-700">
                        {product.sizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="color" className="block text-sm font-medium mb-1">
                      Color
                    </label>
                    <Select value={selectedColor} onValueChange={setSelectedColor}>
                      <SelectTrigger id="color" className="w-full dark:bg-gray-800 dark:border-gray-700">
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-900 dark:border-gray-700">
                        {product.colors.map((color) => (
                          <SelectItem key={color} value={color}>
                            {color}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium mb-1">
                      Quantity
                    </label>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full dark:bg-gray-800 dark:border-gray-700"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <Minus className="h-4 w-4" />
                        <span className="sr-only">Decrease quantity</span>
                      </Button>
                      <span className="mx-4 w-8 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full dark:bg-gray-800 dark:border-gray-700"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Increase quantity</span>
                      </Button>
                    </div>
                  </div>
                </div>
                <Button className="w-full rounded-full group" size="lg" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Add to Cart
                </Button>
                <Separator className="dark:bg-gray-800" />
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 dark:bg-gray-800">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="shipping">Shipping</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="pt-4">
                    <p>{product.longDescription}</p>
                  </TabsContent>
                  <TabsContent value="details" className="pt-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>High-quality cotton blend</li>
                      <li>Pre-shrunk fabric</li>
                      <li>Machine washable</li>
                      <li>Lined hood with drawstring</li>
                      <li>Front kangaroo pocket</li>
                      <li>Ribbed cuffs and hem</li>
                      {product.category.includes("Anime") && (
                        <>
                          <li>Official licensed merchandise</li>
                          <li>Vibrant, fade-resistant print</li>
                        </>
                      )}
                      {product.category.includes("Detective") && (
                        <>
                          <li>Limited edition design</li>
                          <li>Premium stitching details</li>
                        </>
                      )}
                    </ul>
                  </TabsContent>
                  <TabsContent value="shipping" className="pt-4">
                    <p>
                      Free standard shipping on all orders over PKR 10,000. Expedited and international shipping options
                      available at checkout.
                    </p>
                    <p className="mt-2">Orders typically ship within 1-2 business days.</p>
                  </TabsContent>
                </Tabs>
              </div>
            </FadeIn>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <RelatedProducts currentProductId={params.id} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
