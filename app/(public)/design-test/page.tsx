"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function DesignTestPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold">Design System Test Lab</h1>
          <p className="text-muted-foreground text-lg">
            The Briefly - Industrial Tech Design System
          </p>
        </motion.div>

        <Separator />

        {/* Color Palette Section */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Color Palette</h2>
            <p className="text-muted-foreground">
              Mevcut "Industrial Tech" renk paleti. Alternatif öneriler için aşağı kaydır.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="w-full h-24 bg-primary rounded" />
                <div>
                  <p className="font-semibold">Primary</p>
                  <p className="text-xs text-muted-foreground">Deep Industrial Blue-Black</p>
                  <code className="text-xs">hsl(222, 47%, 11%)</code>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="w-full h-24 bg-accent rounded" />
                <div>
                  <p className="font-semibold">Accent</p>
                  <p className="text-xs text-muted-foreground">Electric Blue</p>
                  <code className="text-xs">hsl(217, 91%, 60%)</code>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="w-full h-24 bg-secondary rounded" />
                <div>
                  <p className="font-semibold">Secondary</p>
                  <p className="text-xs text-muted-foreground">Light Tech Gray</p>
                  <code className="text-xs">hsl(210, 40%, 96%)</code>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="w-full h-24 bg-destructive rounded" />
                <div>
                  <p className="font-semibold">Destructive</p>
                  <p className="text-xs text-muted-foreground">Warning Red</p>
                  <code className="text-xs">hsl(0, 84%, 60%)</code>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Alternative Color Schemes */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Alternative Color Schemes</h2>
            <p className="text-muted-foreground">
              Daha "Industrial" bir his için alternatif paletler
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Option 1: Current (Industrial Blue) */}
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Option 1: Industrial Blue
                  <Badge>Mevcut</Badge>
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
                  Tech-forward, modern SaaS vibes
                </p>
              </CardContent>
            </Card>

            {/* Option 2: Steel Gray */}
            <Card>
              <CardHeader>
                <CardTitle>Option 2: Steel Gray</CardTitle>
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
                  Daha "machinery" hissi, ağır sanayi
                </p>
              </CardContent>
            </Card>

            {/* Option 3: Charcoal + Cyan */}
            <Card>
              <CardHeader>
                <CardTitle>Option 3: Charcoal + Cyan</CardTitle>
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
                  Futuristik, "digital assembly" vurgusu
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
          <h2 className="text-2xl font-bold">Industrial Animations</h2>
          <p className="text-muted-foreground">
            "Digital Assembly Line" için mekanik, geometric animasyonlar
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Smooth Slide */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <Card className="h-40 flex items-center justify-center">
                <p className="font-semibold">Smooth Slide In</p>
              </Card>
            </motion.div>

            {/* Mechanical Pop */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card className="h-40 flex items-center justify-center">
                <p className="font-semibold">Mechanical Pop</p>
              </Card>
            </motion.div>

            {/* Assembly Line */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "tween",
                ease: [0.4, 0, 0.2, 1], // cubic-bezier for mechanical feel
                duration: 0.6
              }}
            >
              <Card className="h-40 flex items-center justify-center">
                <p className="font-semibold">Assembly Ease</p>
              </Card>
            </motion.div>
          </div>

          <Card className="p-6 bg-secondary">
            <p className="text-sm text-muted-foreground">
              <strong>Öneri:</strong> "Assembly Line" teması için cubic-bezier easing kullan.
              Smooth ama deliberate (kasıtlı) hareketler. Çok hızlı değil, kontrollü.
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

        {/* Decision Checklist */}
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle>Karar Verilecek Konular</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <p className="font-semibold">1. Renk Paleti</p>
              <p className="text-sm opacity-90">Hangi color scheme ile devam ediyoruz?</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">2. Animasyon Stili</p>
              <p className="text-sm opacity-90">Smooth, Mechanical, veya Assembly easing?</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">3. Grid Pattern Kullanımı</p>
              <p className="text-sm opacity-90">Background'larda grid pattern kullanacak mıyız?</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">4. Button Stilleri</p>
              <p className="text-sm opacity-90">Default variants'tan farklı bir şey mi istiyoruz?</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
