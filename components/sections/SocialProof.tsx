"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";
import { fadeInUpStagger, fadeInUpChild } from "@/lib/animations";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ayşe Yılmaz",
    role: "Pazarlama Müdürü, TechStart",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    content: "The Briefly ile çalışmaya başladıktan sonra sosyal medya performansımız %200 arttı. Ajans maliyetlerinden yıllık ₺480.000 tasarruf ettik. Ajans kalitesi, platform hızı - ikisinin en iyisi!",
    rating: 5,
    metric: "%200 performans artışı",
  },
  {
    name: "Mehmet Kaya",
    role: "Kurucu, E-commerce Pro",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    content: "Aylar boyunca farklı freelancer'larla uğraştık. The Briefly'de tutarlı kalite ve öngörülebilir fiyatları bulduk. Tüm teslimatlar zamanında ve mükemmel. Kesinlikle tavsiye ediyorum.",
    rating: 5,
    metric: "%100 zamanında teslimat",
  },
  {
    name: "Zeynep Demir",
    role: "CEO, Creative Agency",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    content: "Custom Squad Builder sayesinde tam ihtiyacımız kadar hizmet alıyoruz. Ne eksik ne fazla. İçerik üretimimiz 4 katına çıktı, bütçemizi çok daha verimli kullanıyoruz.",
    rating: 5,
    metric: "4x içerik artışı",
  },
];

export function SocialProof() {
  return (
    <Section background="primary" transitionTo="light">
      <div className="text-center space-y-4 mb-10 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
        >
          Markalar Neden <span className="gradient-text-white-to-ocean font-baumans">Bizi Seçiyor</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Müşterilerimizin deneyimleri
        </motion.p>
      </div>

      <motion.div
        variants={fadeInUpStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} variants={fadeInUpChild}>
            <Card className="h-full shadow-warm hover:shadow-warm-lg transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-base italic text-foreground">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Metric Badge */}
                {"metric" in testimonial && (
                  <div className="inline-flex px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    {testimonial.metric}
                  </div>
                )}

                {/* Author */}
                <div className="pt-4 border-t flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
