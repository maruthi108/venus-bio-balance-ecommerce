import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Leaf, Droplet, Shield, Heart, Star } from "lucide-react"
import productsData from "@/data/products.json"

export default function HomePage() {
  const featuredProducts = productsData.products.filter((p) => p.featured).slice(0, 6)

  const categories = [
    {
      name: "Home Care Concentrates",
      slug: "home-care",
      description: "Eco-friendly cleaning solutions",
      icon: Droplet,
    },
    {
      name: "Dry Food Products",
      slug: "dry-food",
      description: "Natural & organic staples",
      icon: Leaf,
    },
    {
      name: "Fresh Vegetables",
      slug: "vegetables",
      description: "Farm-fresh produce",
      icon: Leaf,
    },
    {
      name: "Fresh Fruits",
      slug: "fruits",
      description: "Juicy & nutritious",
      icon: Heart,
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/mainbg.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-primary/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6" variant="secondary">
                Eco-Friendly & Sustainable
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Pure. Powerful. <span className="text-primary">Eco-Balanced.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover our range of concentrated home care solutions and organic products that are safe for your
                family and kind to the planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base">
                  <Link href="/products">Shop Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base bg-background/50 backdrop-blur-sm">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
              <p className="text-muted-foreground text-lg">Explore our diverse range of eco-friendly products</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link key={category.slug} href={`/products?category=${category.slug}`}>
                  <Card className="hover:shadow-lg transition-all hover:border-primary cursor-pointer h-full">
                    <CardContent className="p-6 text-center">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <category.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
              <p className="text-muted-foreground text-lg">Our most popular eco-friendly solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <Card className="hover:shadow-lg transition-all hover:border-primary cursor-pointer h-full">
                    <CardContent className="p-0">
                      <div className="relative aspect-square bg-secondary">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        {product.badge && (
                          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                            {product.badge}
                          </Badge>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                          <Button size="sm">Add to Cart</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Venus Bio Balance</h2>
              <p className="text-muted-foreground text-lg">Quality products that care for you and the planet</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Eco-Safe</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Biodegradable formulas that don't harm the environment
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Droplet className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">High Concentration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  10x more concentrated means less packaging and waste
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Cost-Effective</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Better value with concentrated formulas that last longer
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Safe for Family</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Non-toxic ingredients safe for children and pets
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-muted-foreground text-lg">Real experiences from real families</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      "These concentrates are amazing! A little goes a long way, and I love that they're eco-friendly.
                      My home has never been cleaner!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-semibold">M{i}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Customer {i}</p>
                        <p className="text-xs text-muted-foreground">Verified Buyer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
