import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Venus Bio Balance website, you accept and agree to be bound by these Terms
                and Conditions. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Products and Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We strive to provide accurate product descriptions and images. However:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Product colors may vary slightly due to screen settings</li>
                <li>Fresh produce may vary in size and appearance</li>
                <li>We reserve the right to limit quantities</li>
                <li>Prices are subject to change without notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Orders and Payment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">When placing an order:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You must provide accurate and complete information</li>
                <li>Payment must be made in full before shipment</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Prices include applicable taxes unless stated otherwise</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Shipping and Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                We aim to deliver products within the estimated timeframe. However, delivery times are not guaranteed.
                We are not responsible for delays caused by shipping carriers or circumstances beyond our control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Returns and Refunds</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Returns are accepted under the following conditions:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Products must be unopened and in original packaging</li>
                <li>Returns must be initiated within 7 days of delivery</li>
                <li>Fresh produce returns within 24 hours for quality issues</li>
                <li>Refunds processed within 7-10 business days</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Venus Bio Balance shall not be liable for any indirect, incidental, special, or consequential damages
                arising from the use of our products or services. Our total liability shall not exceed the amount paid
                for the product in question.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, contact us at infovenusbiobalance@gmail.com or call +91 7396814346.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
