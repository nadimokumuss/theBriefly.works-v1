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
    <Section background="primary" transitionTo="light">
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
        className="space-y-6"
      >
        {comparisons.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={index} variants={fadeInUpChild}>
              <Card className="shadow-warm hover:shadow-warm-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-12 gap-6 items-center">
                    {/* Icon & Category */}
                    <div className="md:col-span-3 flex items-center gap-3">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-semibold text-lg">{item.category}</h3>
                    </div>

                    {/* Traditional (Red X) */}
                    <div className="md:col-span-4 flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Geleneksel Yöntem
                        </p>
                        <p className="text-sm text-foreground/80">
                          {item.traditional}
                        </p>
                      </div>
                    </div>

                    {/* The Briefly (Green Check) */}
                    <div className="md:col-span-4 flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
                          The Briefly
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {item.briefly}
                        </p>
                      </div>
                    </div>

                    {/* Savings Badge */}
                    <div className="md:col-span-1 text-right">
                      <div className="inline-flex px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                        {item.savings}
                      </div>
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
