"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-background grid-pattern">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 text-sm">
              500+ Marka Güveniyor
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Ajans Kalitesi,{" "}
            <span className="text-accent">Platform Hızı</span>
          </h1>

          {/* Sub Headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kreatif işlerinizi sabit fiyatla, hızlı teslimatla ve ajans kalitesiyle yönetin.
            <br />
            <strong className="text-foreground">24-48 saat</strong> teslimat. Sınırsız revizyon. İstediğiniz zaman iptal.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-warm-lg"
            >
              <Link href="/paketler">Paketleri Keşfet</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/nasil-calisir">Nasıl Çalışır?</Link>
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">500+</p>
              <p className="text-sm text-muted-foreground">Tamamlanan Proje</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">50+</p>
              <p className="text-sm text-muted-foreground">Aktif Marka</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">98%</p>
              <p className="text-sm text-muted-foreground">Memnuniyet</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
