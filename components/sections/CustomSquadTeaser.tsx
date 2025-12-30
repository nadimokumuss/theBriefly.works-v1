"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { fadeInUp, fadeInUpStagger, fadeInUpChild } from "@/lib/animations";
import Link from "next/link";
import { Video, Palette, Share2 } from "lucide-react";

const exampleSquads = [
  {
    title: "Sosyal Medya Odaklı",
    description: "Instagram ve TikTok için optimize",
    items: ["10 Reel", "20 Post", "Story Tasarımları"],
    icon: Share2,
    price: "₺25,000",
  },
  {
    title: "Video Ağırlıklı",
    description: "YouTube ve marka videoları",
    items: ["8 Video (60sn)", "5 Reel", "Thumbnail Tasarım"],
    icon: Video,
    price: "₺35,000",
    popular: true,
  },
  {
    title: "Full Stack Kreatif",
    description: "Tüm ihtiyaçlar bir arada",
    items: ["5 Video", "15 Post", "10 Reel", "Strateji"],
    icon: Palette,
    price: "₺50,000",
  },
];

export function CustomSquadTeaser() {
  return (
    <Section background="grid">
      <div className="text-center space-y-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold"
        >
          İhtiyacınıza Göre{" "}
          <span className="gradient-text-white-to-ocean font-baumans">Ekibinizi Oluşturun</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Hazır paketler size dar mı geliyor? Custom Squad Builder ile tam ihtiyacınız kadar hizmet alın.
        </motion.p>
      </div>

      {/* Example Squads */}
      <motion.div
        variants={fadeInUpStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-6 mb-12"
      >
        {exampleSquads.map((squad, index) => {
          const Icon = squad.icon;
          return (
            <motion.div key={index} variants={fadeInUpChild}>
              <Card
                className={`h-full shadow-warm hover:shadow-warm-lg transition-all duration-300 ${
                  squad.popular ? "border-2 border-accent" : ""
                }`}
              >
                <CardHeader>
                  {squad.popular && (
                    <Badge className="w-fit mb-2 bg-accent">Popüler</Badge>
                  )}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/10 rounded">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{squad.title}</CardTitle>
                  </div>
                  <CardDescription>{squad.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {squad.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-2xl font-bold text-accent">{squad.price}<span className="text-sm text-muted-foreground font-normal">/ay</span></p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center"
      >
        <Button
          asChild
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-warm-lg"
        >
          <Link href="/paketler#custom-builder">
            Custom Squad Oluştur
          </Link>
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Kendi paketinizi oluşturun, anlık fiyat görün
        </p>
      </motion.div>
    </Section>
  );
}
