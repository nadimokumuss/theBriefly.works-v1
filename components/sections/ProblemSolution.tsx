"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";
import { fadeInUpStagger, fadeInUpChild } from "@/lib/animations";
import { XCircle, CheckCircle2 } from "lucide-react";

const problems = [
  {
    problem: "Ajanslar pahalı, yavaş, şeffaf değil",
    solution: "Sabit fiyat, net teslimat süresi",
  },
  {
    problem: "Freelancer'lar riskli, kalite değişken",
    solution: "Vetlenmiş ekip, tutarlı kalite",
  },
  {
    problem: "Her iş için farklı kişi, koordinasyon kaos",
    solution: "Tek platform, tüm kreatif ihtiyaçlar",
  },
];

export function ProblemSolution() {
  return (
    <Section background="secondary">
      <div className="text-center space-y-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Neden <span className="text-accent">The Briefly</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
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
        {problems.map((item, index) => (
          <motion.div key={index} variants={fadeInUpChild}>
            <Card className="h-full shadow-warm hover:shadow-warm-lg transition-all duration-300">
              <CardContent className="p-6 space-y-6">
                {/* Problem */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                        Sorun
                      </p>
                      <p className="text-base text-foreground">{item.problem}</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border" />

                {/* Solution */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-accent uppercase tracking-wide mb-2">
                        Çözüm
                      </p>
                      <p className="text-base font-medium text-foreground">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
