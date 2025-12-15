import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, Shield, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Venus Bio Balance</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're on a mission to make sustainable living accessible to everyone through eco-friendly products that
                don't compromise on quality or effectiveness.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-16">
            <section>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Venus Bio Balance was born from a simple belief: cleaning your home shouldn't mean harming the planet.
                We started with a vision to create concentrated, eco-friendly cleaning solutions that are powerful,
                safe, and sustainable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we've expanded our mission to include organic food products, bringing you fresh vegetables,
                fruits, and natural staples that support both your health and the environment.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <Leaf className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Sustainability</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We're committed to reducing environmental impact through concentrated formulas, minimal packaging,
                      and biodegradable ingredients.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Safety First</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      All our products are non-toxic, hypoallergenic, and safe for your family, pets, and the
                      environment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Quality</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We never compromise on effectiveness. Our products deliver professional-grade results you can
                      trust.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Community</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We support local farmers and organic cultivation, building a sustainable ecosystem together.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="bg-secondary/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Concentrates?</h2>
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Less Plastic Waste</h3>
                    <p className="text-sm text-muted-foreground">
                      One concentrate bottle replaces 10+ regular product bottles
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Cost Effective</h3>
                    <p className="text-sm text-muted-foreground">Save money while getting better results</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Space Saving</h3>
                    <p className="text-sm text-muted-foreground">Small bottles mean more storage space for you</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Reduced Carbon Footprint</h3>
                    <p className="text-sm text-muted-foreground">Lighter shipping weight means lower emissions</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
