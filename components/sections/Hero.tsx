"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Interactive 3D Portfolio Card Component
interface PortfolioCardProps {
  image: string;
  alt: string;
  delay: number;
  className?: string;
}

function PortfolioCard({ image, alt, delay, className = "" }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      className={`relative overflow-hidden rounded-xl group cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center gradient-ocean-depths relative overflow-hidden">
      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 gradient-mesh-bg opacity-50" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="space-y-8"
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="block text-white">Ajans Kalitesi,</span>
              <span className="block gradient-text-white-to-ocean font-baumans">Platform Hızı™</span>
            </h1>

            {/* Sub Headline - Enhanced */}
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium">
              Kreatif işlerinizi <span className="text-accent font-bold">sabit fiyatla</span>, hızlı teslimatla ve ajans kalitesiyle yönetin.
            </p>

            {/* Key Benefits - NEW */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <span className="font-semibold">24-48 saat teslimat</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <span className="font-semibold">Sınırsız revizyon</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <span className="font-semibold">İstediğiniz zaman iptal</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <Button
                asChild
                size="lg"
                className="gradient-cta text-white shadow-glow-accent hover:shadow-warm-xl transition-all duration-300"
              >
                <Link href="/paketler">Paketleri Keşfet</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-accent text-white hover:bg-accent/20">
                <Link href="/nasil-calisir">Nasıl Çalışır?</Link>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div>
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-sm text-muted-foreground">Tamamlanan Proje</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">50+</p>
                <p className="text-sm text-muted-foreground">Aktif Marka</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">98%</p>
                <p className="text-sm text-muted-foreground">Memnuniyet</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive 3D Portfolio Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Masonry Grid of Interactive Cards */}
            <div className="grid grid-cols-3 gap-4 auto-rows-[120px]">
              {/* Card 1 - Tall */}
              <PortfolioCard
                image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
                alt="Soyut geometrik tasarım - marka kimliği projesi"
                delay={0.1}
                className="row-span-2"
              />

              {/* Card 2 - Wide */}
              <PortfolioCard
                image="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&q=80"
                alt="Renkli sosyal medya içerik tasarımı"
                delay={0.15}
                className="col-span-2"
              />

              {/* Card 3 - Square */}
              <PortfolioCard
                image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80"
                alt="Kreatif ekip toplantısı - strateji çalışması"
                delay={0.2}
                className=""
              />

              {/* Card 4 - Tall */}
              <PortfolioCard
                image="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80"
                alt="Profesyonel video prodüksiyon ekibi"
                delay={0.25}
                className="row-span-2"
              />

              {/* Card 5 - Square */}
              <PortfolioCard
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
                alt="Marka stratejisi sunum çalışması"
                delay={0.3}
                className=""
              />

              {/* Card 6 - Square */}
              <PortfolioCard
                image="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80"
                alt="Kreatif brainstorming oturumu"
                delay={0.35}
                className=""
              />

              {/* Card 7 - Wide */}
              <PortfolioCard
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
                alt="Dijital pazarlama analitik dashboard"
                delay={0.4}
                className="col-span-2"
              />

              {/* Card 8 - Square */}
              <PortfolioCard
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
                alt="Yaratıcı ekip işbirliği çalışması"
                delay={0.45}
                className=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
