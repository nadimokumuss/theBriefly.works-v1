"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { fadeInUpStagger, fadeInUpChild } from "@/lib/animations";
import { pricingTiers, formatPrice } from "@/config/pricing";
import Link from "next/link";
import { Check } from "lucide-react";

export function PricingPreview() {
  return (
    <Section background="teal" transitionTo="light">
      <div className="text-center space-y-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Önceden Belirlenmiş <span className="gradient-text-white-to-ocean font-baumans">Paketler</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          İhtiyacınıza uygun paketi seçin, hemen başlayın
        </motion.p>
      </div>

      <motion.div
        variants={fadeInUpStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-8"
      >
        {pricingTiers.map((tier, index) => (
          <motion.div key={tier.id} variants={fadeInUpChild}>
            <Card
              className={`h-full shadow-depth hover:shadow-glow-accent hover-lift transition-all duration-300 bg-card ${
                tier.popular ? "border-2 border-accent scale-105 gradient-accent-glow" : "border-accent/20"
              }`}
            >
              <CardHeader>
                {tier.popular && (
                  <Badge className="w-fit mb-2 bg-accent">En Popüler</Badge>
                )}
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="pt-4">
                  <p className="text-4xl font-bold">
                    {formatPrice(tier.monthlyPrice)}
                    <span className="text-sm text-muted-foreground font-normal">/ay</span>
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {tier.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant={tier.popular ? "default" : "outline"}
                  className={`w-full ${
                    tier.popular ? "bg-accent hover:bg-accent/90" : ""
                  }`}
                >
                  <Link href="/paketler">Detayları Gör</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-12"
      >
        <p className="text-sm text-white/80">
          Tüm paketlerde KDV dahildir. Yıllık ödeme ile %15 indirim.
        </p>
      </motion.div>
    </Section>
  );
}
