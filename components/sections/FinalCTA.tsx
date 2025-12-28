"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <Section background="grid">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center space-y-8 py-12"
      >
        {/* Icon */}
        <div className="flex justify-center">
          <div className="p-4 bg-accent/10 rounded-full">
            <Sparkles className="w-12 h-12 text-accent" />
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
            Kreatif İşlerinizi{" "}
            <span className="text-accent">Dijital Montaj Hattına</span> Taşımaya
            Hazır mısınız?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ajans kalitesi, freelancer esnekliği, platform hızı. Bugün başlayın,
            farkı hemen görün.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-warm-lg group"
          >
            <Link href="/paketler" className="flex items-center gap-2">
              Paketleri Keşfet
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/custom-squad">Custom Squad Oluştur</Link>
          </Button>
        </div>

        {/* Trust Badge */}
        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            ⚡ 5 dakikada hesap aç • 💳 Kredi kartı gerekmez • 🎯 İstediğin zaman iptal et
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
