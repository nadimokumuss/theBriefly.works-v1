"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { fadeInUp, fadeInUpStagger, fadeInUpChild } from "@/lib/animations";
import {
  LayoutDashboard,
  MessagesSquare,
  BarChart3,
  FileCheck,
  Zap,
  Users,
} from "lucide-react";

const upcomingFeatures = [
  {
    icon: LayoutDashboard,
    title: "Akıllı Proje Yönetimi",
    description: "Tüm projelerinizi tek bir dashboard'dan takip edin",
  },
  {
    icon: MessagesSquare,
    title: "Gerçek Zamanlı İletişim",
    description: "Slack entegrasyonu ile ekibinizle anında iletişim",
  },
  {
    icon: FileCheck,
    title: "Onay ve Revizyon Sistemi",
    description: "Çalışmaları inceleyin, yorum yapın ve onaylayın",
  },
  {
    icon: BarChart3,
    title: "Analitik ve Raporlama",
    description: "Performans metrikleri ve detaylı raporlar",
  },
  {
    icon: Zap,
    title: "Hızlı Dosya Paylaşımı",
    description: "Yüksek çözünürlüklü dosyaları güvenle indirin",
  },
  {
    icon: Users,
    title: "Ekip Yönetimi",
    description: "Birden fazla kullanıcı ve rol yönetimi",
  },
];

export function PlatformPreview() {
  return (
    <Section background="accent">
      <div className="text-center space-y-4 mb-16">
        <Badge className="bg-accent mb-4">Yakında</Badge>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Sadece Bir Platform Değil,{" "}
          <span className="text-accent">Akıllı Çalışma Sistemi</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Phase 2'de gelecek olan platform özellikleri ile kreatif süreçleriniz
          tamamen dijitalleşecek
        </motion.p>
      </div>

      {/* Platform Mockup Placeholder */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mb-16"
      >
        <Card className="shadow-warm-lg overflow-hidden">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12">
            <div className="aspect-video bg-background rounded-lg shadow-warm-lg border-2 border-accent/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <LayoutDashboard className="w-16 h-16 text-accent mx-auto" />
                <p className="text-lg font-semibold text-foreground">
                  Proje Yönetimi Dashboard'u
                </p>
                <p className="text-sm text-muted-foreground max-w-md">
                  Projelerinizi takip edin, ekibinizle iletişim kurun,
                  dosyalarınızı yönetin - tek bir yerden
                </p>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={fadeInUpStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {upcomingFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div key={index} variants={fadeInUpChild}>
              <Card className="shadow-warm hover:shadow-warm-lg transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <p className="text-muted-foreground">
          <strong className="text-foreground">Phase 1:</strong> Şu an sabit paketler ve manuel süreçlerle başlıyoruz
          <br />
          <strong className="text-foreground">Phase 2:</strong> Platform özellikleri ile tamamen otomatik hale geliyoruz
        </p>
      </motion.div>
    </Section>
  );
}
