"use client";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    price: "$29",
    priceId: "price_basic_test", // Replace with actual Stripe Price ID
    features: ["Access to gym floor", "Locker room access", "1 Guest pass/month"],
  },
  {
    name: "Premium",
    price: "$49",
    priceId: "price_premium_test", // Replace with actual Stripe Price ID
    features: ["All Basic features", "Group classes", "Sauna access", "Unlimited guest passes"],
    popular: true,
  },
  {
    name: "Elite",
    price: "$99",
    priceId: "price_elite_test", // Replace with actual Stripe Price ID
    features: ["All Premium features", "Personal training (2x/mo)", "Nutrition plan", "Private locker"],
  },
];

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleSubscribe = async (priceId: string) => {
    try {
      setLoading(priceId);
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          window.location.href = "/sign-in";
          return;
        }
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
      <p className="text-white/60 mb-12">Flexible membership options for every fitness goal.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {plans.map((plan) => (
          <GlassCard key={plan.name} className={`relative flex flex-col ${plan.popular ? 'border-purple-500/50 bg-purple-500/5' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
                MOST POPULAR
              </div>
            )}
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <div className="text-4xl font-bold mt-4 mb-6">{plan.price}<span className="text-lg font-normal text-white/50">/mo</span></div>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm text-white/80">
                  <Check className="h-4 w-4 mr-2 text-green-400" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant={plan.popular ? "glass" : "secondary"}
              className="w-full"
              onClick={() => handleSubscribe(plan.priceId)}
              disabled={loading === plan.priceId}
            >
              {loading === plan.priceId ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe Now"}
            </Button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
