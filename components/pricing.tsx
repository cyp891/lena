"use client"

import { Check } from "lucide-react"

const plans = [
  {
    name: "Drop-In",
    price: "€15",
    description: "Perfect for exploring",
    features: ["1 hour", "Private chat access"],
  },
  {
    name: "Monthly Pass",
    price: "€59",
    description: "Most popular",
    features: [
      "6 hour",
      "Private chat access"
    ],
    popular: true,
  },
  {
    name: "Quarterly",
    price: "€149",
    description: "Best value",
    features: [
      "15 hour",
      "Private chat access"
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Simple Pricing</h2>
          <p className="text-lg text-muted-foreground">Choose the plan that works for you</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border-2 transition ${
                plan.popular
                  ? "border-primary bg-secondary scale-105 shadow-lg"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">/hour</span>
              </div>
              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-2 border-primary text-primary hover:bg-primary/10"
                }`}
              >
                Get Started
              </button>
              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
