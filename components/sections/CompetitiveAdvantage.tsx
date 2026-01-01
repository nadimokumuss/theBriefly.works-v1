"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";
import { fadeInUpStagger, fadeInUpChild } from "@/lib/animations";
import {
  TrendingDown,
  Clock,
  Shield,
  Zap,
  CheckCircle2,
  XCircle
} from "lucide-react";

const comparisons = [
  {
    category: "Maliyet",
    traditional: "Aylık ₺50.000 - ₺200.000",
    briefly: "Sabit aylık ₺15.000 - ₺75.000",
    savings: "Yıllık ₺420.000'e kadar tasarruf",
    icon: TrendingDown,
  },
  {
    category: "Süreç Takibi",
    traditional: "Belirsiz, iletişim kopuklukları",
    briefly: "Gerçek zamanlı hizmet takibi",
    savings: "Tam şeffaflık",
    icon: Clock,
  },
  {
    category: "Kalite Garantisi",
    traditional: "Değişken, risk yüksek",
    briefly: "Vetlenmiş ekip, tutarlı kalite",
    savings: "Sıfır kalite riski",
    icon: Shield,
  },
  {
    category: "Ödeme Güvencesi",
    traditional: "Peşin ödeme, risk yüksek",
    briefly: "Önce iş, sonra ödeme onayı",
    savings: "Sıfır risk",
    icon: Zap,
  },
];

export function CompetitiveAdvantage() {
  return (
    <Section background="teal" transitionTo="light">
      <div className="text-center space-y-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Geleneksel Ajans ve Freelancer&apos;lara Karşı{" "}
          <span className="gradient-text-white-to-ocean font-baumans">Rekabetçi Avantajımız</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          The Briefly ile yılda ortalama ₺420.000 tasarruf edin
        </motion.p>
      </div>

      <motion.div
        variants={fadeInUpStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-4"
      >
        {comparisons.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={index} variants={fadeInUpChild}>
              <Card className="h-full shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-5">
                  {/* Header: Icon + Category + Savings Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="font-semibold">{item.category}</h3>
                    </div>
                    <div className="px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      {item.savings}
                    </div>
                  </div>

                  {/* Comparison: Traditional vs Briefly */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-destructive shrink-0" />
                      <span className="text-foreground/70">{item.traditional}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span className="font-medium text-foreground">{item.briefly}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ROI Calculator Teaser */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <Card className="shadow-warm-lg bg-accent/5 border-accent/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ajansa Kıyasla Ne Kadar Tasarruf Edersiniz?
            </h3>
            <p className="text-muted-foreground mb-6">
              Ortalama bir ajans yılda ₺600.000 - ₺2.400.000 maliyet oluşturur.
              <br />
              The Briefly ile aynı hizmetler için yılda sadece ₺180.000 - ₺900.000 ödersiniz.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div>
                <p className="text-4xl font-bold text-destructive/70 mb-2">
                  ₺1.200.000
                </p>
                <p className="text-sm text-muted-foreground">
                  Ajans Yıllık Maliyet
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">₺420.000</p>
                <p className="text-sm text-muted-foreground">
                  The Briefly Yıllık Maliyet
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">₺780.000</p>
                <p className="text-sm font-semibold text-accent">
                  Yıllık Tasarrufunuz
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
}
