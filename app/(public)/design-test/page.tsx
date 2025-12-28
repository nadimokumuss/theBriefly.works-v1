"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { fadeInUp, fadeInUpStagger, fadeInUpChild, hoverScale } from "@/lib/animations";

export default function DesignTestPage() {
  const [mounted, setMounted] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Trigger replay for animations on hover
  const handleReplay = () => {
    setReplayKey(prev => prev + 1);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background p-8 flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold">Design System Test Lab</h1>
          <p className="text-muted-foreground text-lg">
            The Briefly - Soft Industrial Design System ✨
          </p>
          <Badge className="bg-accent">Finalized!</Badge>
        </motion.div>

        <Separator />

        {/* Color Palette Section */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">✅ Final Color Palette: Soft Industrial (Sage)</h2>
            <p className="text-muted-foreground">
              Özgün, soft, göz yormayan - Artisanal workshop meets modern platform
            </p>
          </div>

          <motion.div
            variants={fadeInUpStagger}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <motion.div variants={fadeInUpChild}>
              <Card className="shadow-warm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-full h-24 bg-primary rounded shadow-warm" />
                  <div>
                    <p className="font-semibold">Primary</p>
                    <p className="text-xs text-muted-foreground">Warm Slate</p>
                    <code className="text-xs bg-secondary px-1 rounded">hsl(30, 8%, 28%)</code>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUpChild}>
              <Card className="shadow-warm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-full h-24 bg-accent rounded shadow-warm" />
                  <div>
                    <p className="font-semibold">Accent</p>
                    <p className="text-xs text-muted-foreground">Muted Sage</p>
                    <code className="text-xs bg-secondary px-1 rounded">hsl(150, 22%, 50%)</code>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUpChild}>
              <Card className="shadow-warm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-full h-24 bg-secondary rounded shadow-warm" />
                  <div>
                    <p className="font-semibold">Secondary</p>
                    <p className="text-xs text-muted-foreground">Light Warm Gray</p>
                    <code className="text-xs bg-secondary px-1 rounded">hsl(30, 12%, 92%)</code>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUpChild}>
              <Card className="shadow-warm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-full h-24 bg-background rounded border-2" />
                  <div>
                    <p className="font-semibold">Background</p>
                    <p className="text-xs text-muted-foreground">Warm Off-White</p>
                    <code className="text-xs bg-secondary px-1 rounded">hsl(30, 10%, 96%)</code>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <Separator />

        {/* Alternative Color Schemes */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Tested Color Schemes</h2>
            <p className="text-muted-foreground">
              Option 4 (Sage) seçildi - Diğerleri test edildi, reddedildi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Option 1: Rejected */}
            <Card className="opacity-60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Option 1: Industrial Blue
                  <Badge variant="outline" className="text-xs">Reddedildi</Badge>
                </CardTitle>
                <CardDescription>
                  Deep blue-black + Electric blue accent
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-full h-12 rounded" style={{ backgroundColor: "hsl(222, 47%, 11%)" }} />
                  <div className="w-full h-12 rounded" style={{ backgroundColor: "hsl(217, 91%, 60%)" }} />
                </div>
                <p className="text-sm text-muted-foreground">
                  ❌ Çok keskin, agresif, klişe
                </p>
              </CardContent>
            </Card>

            {/* Option 2: Rejected */}
            <Card className="opacity-60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Option 2: Steel Gray
                  <Badge variant="outline" className="text-xs">Reddedildi</Badge>
                </CardTitle>
                <CardDescription>
                  Metalik griler + Turuncu aksan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-full h-12 rounded" style={{ backgroundColor: "hsl(210, 10%, 23%)" }} />
                  <div className="w-full h-12 rounded" style={{ backgroundColor: "hsl(25, 95%, 53%)" }} />
                </div>
                <p className="text-sm text-muted-foreground">
                  ❌ Turuncu çok sert, ağır sanayi hissi
                </p>
              </CardContent>
            </Card>

            {/* Option 3: Rejected */}
            <Card className="opacity-60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Option 3: Charcoal + Cyan
                  <Badge variant="outline" className="text-xs">Reddedildi</Badge>
                </CardTitle>
                <CardDescription>
                  Koyu antrasit + Neon cyan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-full h-12 rounded" style={{ backgroundColor: "hsl(200, 7%, 16%)" }} />
                  <div className="w-full h-12 rounded" style={{ backgroundColor: "hsl(180, 100%, 50%)" }} />
                </div>
                <p className="text-sm text-muted-foreground">
                  ❌ Neon cyan göz yoruyor, çok futuristik
                </p>
              </CardContent>
            </Card>

            {/* Option 4: SELECTED */}
            <Card className="border-4 border-accent shadow-warm-lg bg-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Option 4: Soft Industrial (Sage)
                  <Badge className="bg-accent">✓ SEÇİLDİ</Badge>
                </CardTitle>
                <CardDescription>
                  Warm Slate + Muted Sage (pastel yeşil-gri)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-full h-12 rounded border-2 border-primary" style={{ backgroundColor: "hsl(30, 8%, 28%)" }} />
                  <div className="w-full h-12 rounded border-2 border-accent" style={{ backgroundColor: "hsl(150, 22%, 50%)" }} />
                  <div className="w-full h-12 rounded border-2" style={{ backgroundColor: "hsl(30, 10%, 96%)" }} />
                </div>
                <p className="text-sm font-medium">
                  ✨ Sakin, özgün, göz yormayan. Artisanal workshop + modern platform
                </p>
              </CardContent>
            </Card>

            {/* Option 5: Alternative */}
            <Card className="opacity-60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Option 5: Soft Industrial (Blue)
                  <Badge variant="outline" className="text-xs">Alternatifti</Badge>
                </CardTitle>
                <CardDescription>
                  Warm Slate + Dusty Blue (pastel mavi-gri)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-full h-12 rounded" style={{ backgroundColor: "hsl(30, 8%, 28%)" }} />
                  <div className="w-full h-12 rounded" style={{ backgroundColor: "hsl(210, 18%, 55%)" }} />
                  <div className="w-full h-12 rounded" style={{ backgroundColor: "hsl(30, 10%, 96%)" }} />
                </div>
                <p className="text-sm text-muted-foreground">
                  Daha evrensel, yine soft. Classic ama sıcak
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Button Variants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Button Variants</h2>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button>Default Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
        </section>

        <Separator />

        {/* Typography */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Typography Scale</h2>

          <div className="space-y-4">
            <h1 className="text-6xl font-bold">Heading 1 - 6xl</h1>
            <h2 className="text-4xl font-bold">Heading 2 - 4xl</h2>
            <h3 className="text-3xl font-semibold">Heading 3 - 3xl</h3>
            <h4 className="text-2xl font-semibold">Heading 4 - 2xl</h4>
            <p className="text-lg">Body Large - text-lg</p>
            <p className="text-base">Body Default - text-base</p>
            <p className="text-sm text-muted-foreground">Body Small Muted - text-sm</p>
            <code className="text-xs bg-secondary px-2 py-1 rounded">Code/Labels - text-xs</code>
          </div>
        </section>

        <Separator />

        {/* Grid Pattern Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Grid Patterns & Backgrounds</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="grid-pattern h-48" />
            <Card className="assembly-line-gradient h-48" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-primary text-primary-foreground h-48 flex items-center justify-center">
              <p className="font-bold text-2xl">Dark Theme Preview</p>
            </Card>
            <Card className="border-2 h-48 flex items-center justify-center">
              <p className="font-bold text-2xl">Light Theme Preview</p>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Animation Tests */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">✅ Final Animation: Calm & Deliberate</h2>
          <p className="text-muted-foreground">
            800ms ease-out quad - Smooth, profesyonel, sıcak. Premium feel, no rush.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Using fadeInUp from lib/animations */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              key={`calm-${replayKey}`}
              onMouseEnter={handleReplay}
              className="cursor-pointer"
            >
              <Card className="h-48 flex items-center justify-center border-2 border-accent shadow-warm-lg">
                <div className="text-center space-y-2">
                  <p className="font-bold text-lg">Calm & Deliberate</p>
                  <Badge className="bg-accent">Active</Badge>
                  <p className="text-xs text-muted-foreground px-4">
                    fadeInUp - 800ms ease-out
                  </p>
                  <p className="text-xs text-accent font-medium">
                    Hover to replay!
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Hover Scale Example */}
            <motion.div
              variants={hoverScale}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Card className="h-48 flex items-center justify-center cursor-pointer shadow-warm">
                <div className="text-center space-y-2">
                  <p className="font-semibold">Hover Scale</p>
                  <p className="text-xs text-muted-foreground px-4">
                    Hover me! 200ms scale(1.02)
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Stagger Children Example */}
            <motion.div
              variants={fadeInUpStagger}
              initial="initial"
              animate="animate"
              key={`stagger-${replayKey}`}
              onMouseEnter={handleReplay}
              className="cursor-pointer"
            >
              <Card className="p-6 space-y-3 h-48 shadow-warm">
                <p className="font-semibold text-center">Stagger Children</p>
                <p className="text-xs text-muted-foreground text-center mb-2">
                  Hover to replay!
                </p>
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUpChild}
                    className="h-6 bg-accent/20 rounded"
                  />
                ))}
              </Card>
            </motion.div>
          </div>

          <Card className="p-6 bg-accent/10 border-accent/30">
            <p className="text-sm">
              <strong>✨ Implementation:</strong> All animations use <code className="bg-background px-1.5 py-0.5 rounded text-xs">lib/animations.ts</code>
              {" "}variants. fadeInUp, hoverScale, fadeInUpStagger - reusable, consistent, professional.
            </p>
          </Card>
        </section>

        <Separator />

        {/* Component Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Component Examples</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Example Card</CardTitle>
                <CardDescription>This is how cards will look across the platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Card content goes here. Clean, systematic, grid-based.</p>
                <div className="flex gap-2">
                  <Badge>Badge 1</Badge>
                  <Badge variant="secondary">Badge 2</Badge>
                  <Badge variant="outline">Badge 3</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Featured Card
                  <Badge className="bg-accent">Popular</Badge>
                </CardTitle>
                <CardDescription>Highlighted with accent border</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This style could be used for the "Pro" package or important CTAs.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Decision Summary */}
        <Card className="bg-accent/10 border-accent shadow-warm-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              ✅ Tüm Kararlar Alındı
              <Badge className="bg-accent">Finalized</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <p className="font-semibold">1. Renk Paleti</p>
              <p className="text-sm text-muted-foreground">✅ Soft Industrial (Sage) - Option 4</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">2. Animasyon Stili</p>
              <p className="text-sm text-muted-foreground">✅ Calm & Deliberate - 800ms ease-out quad</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">3. Grid Pattern Kullanımı</p>
              <p className="text-sm text-muted-foreground">✅ Evet - Hero sections + feature backgrounds (subtle)</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">4. Component Stilleri</p>
              <p className="text-sm text-muted-foreground">✅ Shadcn defaults + Warm shadows</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
