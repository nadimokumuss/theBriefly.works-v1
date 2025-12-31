"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";
import { fadeInUpStagger, fadeInUpChild } from "@/lib/animations";
import { MousePointerClick, MessagesSquare, Rocket } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Seçin",
    description: "Paket seçin veya custom squad oluşturun. İhtiyacınıza göre ekibinizi belirleyin.",
    icon: MousePointerClick,
  },
  {
    number: "02",
    title: "Briefing",
    description: "İhtiyaçlarınızı paylaşın, ekibiniz işe koyulsun. Her detay kayıt altında.",
    icon: MessagesSquare,
  },
  {
    number: "03",
    title: "Teslim",
    description: "Belirlenen sürede, kaliteli işleriniz hazır. Revizyon? Sorun değil.",
    icon: Rocket,
  },
];

export function HowItWorks() {
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
          Nasıl <span className="text-accent font-baumans">Çalışır</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-[#205459] max-w-2xl mx-auto"
        >
          3 adımda kreatif işlerinizi dijital montaj hattına taşıyın
        </motion.p>
      </div>

      <motion.div
        variants={fadeInUpStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-8 relative"
      >
        {/* Connection Line */}
        <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-[#6A9BA6] z-0" />

        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div key={index} variants={fadeInUpChild} className="relative z-10">
              <Card className="h-full shadow-warm hover:shadow-warm-lg transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  {/* Icon */}
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>

                  {/* Number */}
                  <div className="text-6xl font-bold text-accent/20">{step.number}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold">{step.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-12"
      >
        <Link
          href="/nasil-calisir"
          className="text-accent hover:underline font-medium"
        >
          Detaylı Süreci Görüntüle →
        </Link>
      </motion.div>
    </Section>
  );
}
