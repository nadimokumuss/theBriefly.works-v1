"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export function FinalCTA() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden gradient-ocean-depths">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh-bg opacity-60" />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
          alt="Team collaboration"
          fill
          className="object-cover mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-6 max-w-5xl text-center space-y-8 py-20"
      >
        {/* Icon */}
        <div className="flex justify-center">
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto text-white">
            Kreatif İşlerinizi{" "}
            <span className="gradient-text-white-to-ocean font-baumans">Dijital Montaj Hattına™</span>
            <br />Taşımaya <span className="gradient-text-white-to-ocean font-baumans">Hazır mısınız?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Ajans kalitesi, freelancer esnekliği, platform hızı.
            <br />
            <strong className="gradient-text-white-to-ocean font-baumans">Bugün başlayın</strong>, farkı hemen görün.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            asChild
            size="lg"
            className="gradient-accent-glow hover:shadow-glow-accent text-white shadow-depth group text-lg px-8 transition-all duration-300"
          >
            <Link href="/paketler" className="flex items-center gap-2">
              Paketleri Keşfet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 transition-all duration-300">
            <Link href="/paketler#custom-builder">Custom Squad Oluştur</Link>
          </Button>
        </div>

        {/* Trust Badge */}
        <div className="pt-12 flex flex-wrap justify-center gap-6 text-white/80">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="text-sm font-medium">5 dakikada başla</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💳</span>
            <span className="text-sm font-medium">Kredi kartı gerekmez</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span className="text-sm font-medium">İstediğin zaman iptal</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
