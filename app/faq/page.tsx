import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      category: "Concentrates",
      questions: [
        {
          q: "How do I use the concentrates?",
          a: "Each product has specific dilution instructions on the label. Generally, you mix a small amount of concentrate with water in a reusable spray bottle or bucket. For example, our all-purpose cleaner uses 1 part concentrate to 20 parts water.",
        },
        {
          q: "Are concentrates really more eco-friendly?",
          a: "Yes! Concentrates reduce plastic waste, shipping emissions, and water usage. One bottle of concentrate can replace 10+ regular cleaning product bottles, significantly reducing your environmental impact.",
        },
        {
          q: "How long do concentrates last?",
          a: "When stored properly in a cool, dry place, our concentrates have a shelf life of 2-3 years unopened. Once opened and diluted, we recommend using the solution within 3-6 months for best results.",
        },
      ],
    },
    {
      category: "Shipping & Returns",
      questions: [
        {
          q: "What are your shipping charges?",
          a: "We offer free shipping on all orders above ₹500. For orders below ₹500, a nominal shipping fee of ₹50 applies.",
        },
        {
          q: "How long does delivery take?",
          a: "Most orders are delivered within 3-5 business days for major cities and 5-7 business days for other locations. Fresh produce and vegetables are typically delivered within 1-2 days to ensure maximum freshness.",
        },
        {
          q: "What is your return policy?",
          a: "We accept returns within 7 days of delivery for unopened products. Fresh produce returns are accepted within 24 hours if there are quality issues. Please contact our customer service for return authorization.",
        },
      ],
    },
    {
      category: "Safety & Usage",
      questions: [
        {
          q: "Are your products safe for children and pets?",
          a: "Yes, all our products are made with non-toxic, biodegradable ingredients that are safe for children and pets when used as directed. However, we recommend keeping all cleaning products out of reach of children.",
        },
        {
          q: "Can I use your products on all surfaces?",
          a: "Most of our cleaners are multi-surface safe, but we recommend checking individual product labels. Some natural stone surfaces may require specific products to avoid etching.",
        },
        {
          q: "Do your products have strong chemical smells?",
          a: "No! Our products use natural fragrances and essential oils. They have pleasant, subtle scents without harsh chemical odors.",
        },
      ],
    },
    {
      category: "Orders & Payment",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit/debit cards, UPI payments, net banking, and cash on delivery for orders above ₹200.",
        },
        {
          q: "Can I modify or cancel my order?",
          a: "Orders can be modified or cancelled within 2 hours of placement. After that, the order enters processing and cannot be changed. Please contact customer service immediately if you need to make changes.",
        },
        {
          q: "Do you offer bulk discounts?",
          a: "Yes! We offer attractive discounts on bulk orders. Please contact us at info@venusbiobalance.com for bulk pricing inquiries.",
        },
      ],
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Find answers to common questions about our products, shipping, and policies.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, qIdx) => (
                    <AccordionItem key={qIdx} value={`${idx}-${qIdx}`}>
                      <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
