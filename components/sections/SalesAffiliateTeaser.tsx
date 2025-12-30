"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { fadeInUp, fadeInUpStagger, fadeInUpChild } from "@/lib/animations";
import Link from "next/link";
import { TrendingUp, Users, Wallet } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Yüksek Komisyon",
    description: "İlk 6 ay %20, sonrası %10 düzenli gelir",
  },
  {
    icon: Users,
    title: "Kendi Networküne Sat",
    description: "Tanıdığın markalara özel hizmet sun",
  },
  {
    icon: TrendingUp,
    title: "Pasif Gelir",
    description: "Müşteri aktif kaldıkça sen kazanırsın",
  },
];

export function SalesAffiliateTeaser() {
  return (
    <Section background="default">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Badge className="bg-accent w-fit">Sales Affiliate Program</Badge>

          <h2 className="text-3xl md:text-4xl font-bold">
            Satış Ortağı Ol,{" "}
            <span className="text-accent">Pasif Gelir Kazan</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Networküne The Briefly&apos;yi tanıt, her satıştan komisyon kazan.
            Freelance işlerin yanında düzenli gelir akışı oluştur.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-warm-lg"
            >
              <Link href="/satis-ortagi">Detayları Gör</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/satis-ortagi#basvur">Hemen Başvur</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right Column - Benefit Cards */}
        <motion.div
          variants={fadeInUpStagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div key={index} variants={fadeInUpChild}>
                <Card className="shadow-warm hover:shadow-warm-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
