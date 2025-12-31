"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";
import { fadeInUpStagger, fadeInUpChild } from "@/lib/animations";
import { XCircle, CheckCircle2, TrendingUp, Shield, Zap } from "lucide-react";
import Image from "next/image";

const problems = [
  {
    problem: "Ajanslar pahalı, yavaş, şeffaf değil",
    solution: "Sabit fiyat, net teslimat süresi",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    metric: "₺420k tasarruf/yıl",
  },
  {
    problem: "Freelancer'lar riskli, kalite değişken",
    solution: "Vetlenmiş ekip, tutarlı kalite",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
    metric: "98% memnuniyet",
  },
  {
    problem: "Her iş için farklı kişi, koordinasyon kaos",
    solution: "Tek platform, tüm kreatif ihtiyaçlar",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    metric: "10x daha hızlı",
  },
];

export function ProblemSolution() {
  return (
    <Section background="light" transitionTo="primary">
      <div className="text-center space-y-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-[#012326]"
        >
          Neden <span className="text-accent font-baumans">The Briefly</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-[#205459] max-w-2xl mx-auto"
        >
          Geleneksel ajans ve freelancer sorunlarına modern çözümler
        </motion.p>
      </div>

      <motion.div
        variants={fadeInUpStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-8"
      >
        {problems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={index} variants={fadeInUpChild}>
              <Card className="h-full shadow-depth hover:shadow-glow-accent hover-lift transition-all duration-300 overflow-hidden group bg-card border-accent/20">
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.solution}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="overlay-dark" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 p-3 bg-accent rounded-xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Metric Badge */}
                  <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <p className="text-sm font-bold text-accent">{item.metric}</p>
                  </div>
                </div>

                <CardContent className="p-6 space-y-6">
                  {/* Problem */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Sorun
                        </p>
                        <p className="text-sm text-foreground/70 line-through">{item.problem}</p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  {/* Solution */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-accent uppercase tracking-wide">
                          Çözüm
                        </p>
                        <p className="text-lg font-bold text-foreground">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
