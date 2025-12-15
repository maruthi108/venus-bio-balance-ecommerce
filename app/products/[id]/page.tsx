"use client"

import { useRouter, useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Check } from "lucide-react"
import productsData from "@/data/products.json"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"

export default function ProductDetailPage() {
  const params = useParams()
  const id = params?.id as string | undefined
  const router = useRouter()
  const { addToCart } = useCart()
  const { toast } = useToast()

  const product = productsData.products.find((p) => p.id === id)

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button asChild>
              <Link href="/products">Back to Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const relatedProducts = productsData.products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" onClick={() => router.back()} className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Product Image */}
            <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{product.badge}</Badge>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
              <div className="text-4xl font-bold text-primary mb-6">₹{product.price}</div>

              <div className="flex gap-4 mb-8">
                <Button size="lg" onClick={handleAddToCart} className="flex-1">
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" asChild className="flex-1 bg-transparent">
                  <Link href="/cart">Go to Cart</Link>
                </Button>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Benefits</h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Usage */}
              <div>
                <h2 className="text-xl font-semibold mb-4">How to Use</h2>
                <p className="text-muted-foreground leading-relaxed bg-secondary p-4 rounded-lg">{product.usage}</p>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                    <Card className="hover:shadow-lg transition-all hover:border-primary cursor-pointer h-full">
                      <CardContent className="p-0">
                        <div className="relative aspect-square bg-secondary">
                          <img
                            src={relatedProduct.image || "/placeholder.svg"}
                            alt={relatedProduct.name}
                            className="w-full h-full object-cover"
                          />
                          {relatedProduct.badge && (
                            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                              {relatedProduct.badge}
                            </Badge>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-base mb-2 line-clamp-1">{relatedProduct.name}</h3>
                          <div className="text-xl font-bold text-primary">₹{relatedProduct.price}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
