"use client";

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Industry photos for the scrolling gallery
const industryPhotos = {
  column1: [
    { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80", alt: "Kuaför salonu" },
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80", alt: "Sağlık kliniği" },
    { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80", alt: "Restoran iç mekan" },
    { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80", alt: "Gece kulübü" },
    { src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80", alt: "Güzellik salonu" },
    { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80", alt: "Kafe" },
    { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80", alt: "Yoga stüdyosu" },
    { src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&q=80", alt: "Pizza restoranı" },
  ],
  column2: [
    { src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=400&q=80", alt: "Berber dükkanı" },
    { src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&q=80", alt: "Restoran mutfak" },
    { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80", alt: "Spa merkezi" },
    { src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80", alt: "Diş kliniği" },
    { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=80", alt: "Bar" },
    { src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=80", alt: "Kuaför" },
    { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80", alt: "Fine dining" },
    { src: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=400&q=80", alt: "Güzellik merkezi" },
  ],
  column3: [
    { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80", alt: "Fitness salonu" },
    { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80", alt: "Kahve dükkanı" },
    { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80", alt: "Veteriner kliniği" },
    { src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80", alt: "Otel lobi" },
    { src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80", alt: "Nail salon" },
    { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&q=80", alt: "Pastane" },
    { src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&q=80", alt: "Eczane" },
    { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80", alt: "Otel odası" },
  ],
};

// Scrolling Column Component
interface ScrollingColumnProps {
  photos: { src: string; alt: string }[];
  baseSpeed: number;
  initialDirection: 1 | -1;
}

function ScrollingColumn({ photos, baseSpeed, initialDirection }: ScrollingColumnProps) {
  const photoHeight = 140; // Height of each photo + gap
  const totalHeight = photos.length * photoHeight;

  // Start from middle of the duplicated list to have photos above and below
  const y = useMotionValue(-totalHeight * 2);
  const columnRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const velocityRef = useRef(baseSpeed * initialDirection);
  const directionRef = useRef(initialDirection);
  const lastDragYRef = useRef(0);
  const lastDragTimeRef = useRef(0);
  const animationRef = useRef<number>();

  // Duplicate photos many times for seamless infinite loop (10x for safety)
  const duplicatedPhotos = [...photos, ...photos, ...photos, ...photos, ...photos, ...photos, ...photos, ...photos, ...photos, ...photos];

  // Auto-scroll animation with momentum - using refs to avoid re-renders
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 16;
      lastTime = currentTime;

      if (!isDraggingRef.current) {
        // Apply friction
        const friction = 0.995;
        velocityRef.current *= friction;

        // Return to base speed when slowed down
        const targetSpeed = baseSpeed * directionRef.current;
        if (Math.abs(velocityRef.current) < Math.abs(targetSpeed) * 1.5) {
          velocityRef.current += (targetSpeed - velocityRef.current) * 0.02;
        }

        // Update position
        let newY = y.get() + velocityRef.current * deltaTime * 0.5;

        // Loop seamlessly - keep within bounds of duplicated photos
        const maxOffset = totalHeight * 4;
        if (newY > -totalHeight) {
          newY -= totalHeight;
        } else if (newY < -maxOffset) {
          newY += totalHeight;
        }

        y.set(newY);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [baseSpeed, totalHeight, y]);

  // Randomly change direction occasionally
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDraggingRef.current && Math.abs(velocityRef.current) < baseSpeed * 3 && Math.random() > 0.7) {
        directionRef.current = (directionRef.current * -1) as 1 | -1;
      }
    }, 5000 + Math.random() * 5000);

    return () => clearInterval(interval);
  }, [baseSpeed]);

  // Mouse/Touch handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    lastDragYRef.current = e.clientY;
    lastDragTimeRef.current = Date.now();
    velocityRef.current = 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDraggingRef.current) {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastDragTimeRef.current;
      const deltaY = e.clientY - lastDragYRef.current;

      // Calculate velocity for momentum
      if (deltaTime > 0 && deltaTime < 100) {
        velocityRef.current = (deltaY / deltaTime) * 32;
      }

      // Update position directly
      y.set(y.get() + deltaY);

      // Update direction based on drag
      if (Math.abs(deltaY) > 2) {
        directionRef.current = deltaY > 0 ? 1 : -1;
      }

      lastDragYRef.current = e.clientY;
      lastDragTimeRef.current = currentTime;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={columnRef}
      className="relative h-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      style={{ touchAction: 'none' }}
    >
      <motion.div
        className="flex flex-col gap-3"
        style={{ y }}
      >
        {duplicatedPhotos.map((photo, index) => (
          <div
            key={`${photo.alt}-${index}`}
            className="relative w-full h-32 rounded-xl overflow-hidden shrink-0"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Wave Transition Component for Hero
function WaveTransition() {
  const color = "#F0F0F2"; // Light color - next section's background
  return (
    <div className="absolute inset-x-0 bottom-0 h-20 overflow-hidden pointer-events-none z-30">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background wave - slower */}
        <motion.path
          d="M0,50 C360,100 720,0 1080,50 C1260,75 1350,25 1440,50 L1440,100 L0,100 Z"
          fill={color}
          opacity={0.4}
          animate={{
            d: [
              "M0,50 C360,100 720,0 1080,50 C1260,75 1350,25 1440,50 L1440,100 L0,100 Z",
              "M0,60 C360,20 720,80 1080,40 C1260,25 1350,75 1440,60 L1440,100 L0,100 Z",
              "M0,50 C360,100 720,0 1080,50 C1260,75 1350,25 1440,50 L1440,100 L0,100 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Middle wave */}
        <motion.path
          d="M0,60 C240,30 480,90 720,60 C960,30 1200,90 1440,60 L1440,100 L0,100 Z"
          fill={color}
          opacity={0.6}
          animate={{
            d: [
              "M0,60 C240,30 480,90 720,60 C960,30 1200,90 1440,60 L1440,100 L0,100 Z",
              "M0,50 C240,80 480,20 720,50 C960,80 1200,20 1440,50 L1440,100 L0,100 Z",
              "M0,60 C240,30 480,90 720,60 C960,30 1200,90 1440,60 L1440,100 L0,100 Z",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Front wave - faster */}
        <motion.path
          d="M0,70 C180,50 360,90 540,70 C720,50 900,90 1080,70 C1260,50 1350,90 1440,70 L1440,100 L0,100 Z"
          fill={color}
          animate={{
            d: [
              "M0,70 C180,50 360,90 540,70 C720,50 900,90 1080,70 C1260,50 1350,90 1440,70 L1440,100 L0,100 Z",
              "M0,65 C180,85 360,45 540,65 C720,85 900,45 1080,65 C1260,85 1350,45 1440,65 L1440,100 L0,100 Z",
              "M0,70 C180,50 360,90 540,70 C720,50 900,90 1080,70 C1260,50 1350,90 1440,70 L1440,100 L0,100 Z",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

// Fighting Benefits Component - Boxes compete for first place
const benefitsData = [
  { id: 1, text: "Gerçek Zamanlı Hizmet Takibi", emoji: "📊" },
  { id: 2, text: "Anlık Revize Sistemi", emoji: "🔄" },
  { id: 3, text: "Önce İş, Sonra Ödeme", emoji: "🛡️" },
];

function FightingBenefits() {
  const [benefits, setBenefits] = useState(benefitsData);
  const [attacking, setAttacking] = useState<number | null>(null);
  const [hit, setHit] = useState<number | null>(null);
  const [winner, setWinner] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Rastgele bir kutu seçip "saldırı" başlat (1 veya 2. index, yani 2. veya 3. sıradaki)
      const attackerIndex = Math.floor(Math.random() * 2) + 1;
      const attacker = benefits[attackerIndex];
      const targetIndex = attackerIndex - 1; // Bir üstündeki kutu
      const target = benefits[targetIndex];

      // 1. Aşama: Saldırgan yukarı doğru hareket ediyor
      setAttacking(attacker.id);

      // 2. Aşama: Vuruş (300ms sonra)
      setTimeout(() => {
        setHit(target.id);
      }, 300);

      // 3. Aşama: Sonuç (800ms sonra)
      setTimeout(() => {
        // %50 şansla kazanır ve birinci sıraya geçer
        if (Math.random() > 0.5) {
          setWinner(attacker.id);
          setBenefits(prev => {
            const newBenefits = [...prev];
            const attackerIdx = newBenefits.findIndex(b => b.id === attacker.id);
            const [removed] = newBenefits.splice(attackerIdx, 1);
            newBenefits.unshift(removed);
            return newBenefits;
          });

          setTimeout(() => {
            setWinner(null);
          }, 600);
        }

        setAttacking(null);
        setHit(null);
      }, 800);

    }, 3500); // Her 3.5 saniyede bir kavga

    return () => clearInterval(interval);
  }, [benefits]);

  return (
    <div className="flex flex-col items-start gap-3 text-sm relative">
      <AnimatePresence mode="popLayout">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              // Vurulan kutu: hafifçe sağa kayar
              x: hit === benefit.id ? [0, 8, -2, 0] : 0,
              // Saldıran: hafifçe yukarı dokunur
              y: attacking === benefit.id
                ? [0, 2, -8, 0]
                : hit === benefit.id
                  ? [0, -4, 0]
                  : 0,
              scale: attacking === benefit.id
                ? [1, 1.03, 1]
                : hit === benefit.id
                  ? [1, 0.97, 1]
                  : winner === benefit.id
                    ? 1.03
                    : 1,
              rotate: hit === benefit.id
                ? [0, 2, -1, 0]
                : attacking === benefit.id
                  ? [0, -1, 0]
                  : 0,
            }}
            transition={{
              layout: { type: "spring", stiffness: 400, damping: 25 },
              x: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
              y: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
              scale: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
              rotate: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full w-fit cursor-default transition-colors duration-300 ${
              index === 0
                ? "bg-accent/30 border border-accent/50"
                : "bg-accent/10"
            } ${
              attacking === benefit.id ? "shadow-xl shadow-accent/50 z-10" : ""
            } ${
              hit === benefit.id ? "shadow-lg shadow-red-500/40" : ""
            } ${
              winner === benefit.id ? "ring-2 ring-accent ring-offset-2 ring-offset-background" : ""
            }`}
          >
            <motion.span
              className="text-base"
              animate={{
                rotate: attacking === benefit.id
                  ? [0, -5, 3, 0]
                  : hit === benefit.id
                    ? [0, 5, -2, 0]
                    : 0,
                scale: attacking === benefit.id ? [1, 1.1, 1] : hit === benefit.id ? [1, 0.95, 1] : 1,
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {benefit.emoji}
            </motion.span>
            <span className="font-semibold">{benefit.text}</span>
            {index === 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="ml-1 text-xs bg-accent text-white px-2 py-0.5 rounded-full"
              >
                #1
              </motion.span>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export function Hero() {
  return (
    <section className="min-h-[90vh] gradient-ocean-depths relative overflow-hidden">
      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 gradient-mesh-bg opacity-50" />

      {/* Right Column - Industry Scrolling Gallery - FULL HEIGHT */}
      <div className="absolute top-0 right-0 bottom-0 w-1/2 hidden lg:block z-20">
        {/* Gallery Grid - interactive */}
        <div className="absolute inset-0 grid grid-cols-3 gap-3 p-3">
          <ScrollingColumn photos={industryPhotos.column1} baseSpeed={0.8} initialDirection={-1} />
          <ScrollingColumn photos={industryPhotos.column2} baseSpeed={0.5} initialDirection={1} />
          <ScrollingColumn photos={industryPhotos.column3} baseSpeed={1.2} initialDirection={-1} />
        </div>
        {/* Top gradient fade - koyu ocean */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#012326] via-[#012326]/70 to-transparent z-30 pointer-events-none" />
        {/* Bottom gradient fade - beyaz (sonraki section'a geçiş) */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F0F0F2] via-[#F0F0F2]/50 to-transparent z-30 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 min-h-[90vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full py-16">
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

            {/* Key Benefits - Fighting for First Place */}
            <FightingBenefits />

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
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-8 pb-16"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">500+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Tamamlanan Proje</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">50+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Aktif Marka</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">98%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Memnuniyet</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column placeholder for grid alignment */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Wave Transition to next section */}
      <WaveTransition />
    </section>
  );
}
