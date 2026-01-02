"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Section } from "./Section";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";
import {
  Video,
  ShoppingBag,
  UtensilsCrossed,
  Building2,
  Sparkles,
  Home,
  User,
  Dumbbell,
  ImageIcon,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { formatPrice } from "@/config/pricing";
import { Brify } from "@/components/mascot/Brify";

// Sector options
const sectors = [
  { id: "ecommerce", label: "E-ticaret", icon: ShoppingBag, recommended: { video: "1", photo: "2", shooting: "1" } },
  { id: "restaurant", label: "Restoran", icon: UtensilsCrossed, recommended: { video: "2", photo: "1", shooting: "2" } },
  { id: "corporate", label: "Kurumsal", icon: Building2, recommended: { video: "1", photo: "1", shooting: "1" } },
  { id: "fashion", label: "Moda", icon: Sparkles, recommended: { video: "2", photo: "3", shooting: "2" } },
  { id: "realestate", label: "Gayrimenkul", icon: Home, recommended: { video: "1", photo: "2", shooting: "2" } },
  { id: "personal", label: "Kişisel", icon: User, recommended: { video: "3", photo: "2", shooting: "2" } },
  { id: "service", label: "Hizmet", icon: Dumbbell, recommended: { video: "2", photo: "1", shooting: "1" } },
];

// Dropdown options
const videoOptions = [
  { value: "0", label: "Yok", price: 0 },
  { value: "1", label: "1-5 Video", price: 5000 },
  { value: "2", label: "6-10 Video", price: 10000 },
  { value: "3", label: "11-20 Video", price: 18000 },
  { value: "4", label: "20+ Video", price: 25000 },
];

const photoOptions = [
  { value: "0", label: "Yok", price: 0 },
  { value: "1", label: "1-20 Foto", price: 4000 },
  { value: "2", label: "21-40 Foto", price: 7000 },
  { value: "3", label: "41-60 Foto", price: 10000 },
  { value: "4", label: "60+ Foto", price: 15000 },
];

const shootingOptions = [
  { value: "0", label: "Yok", price: 0 },
  { value: "1", label: "1 Gün", price: 3000 },
  { value: "2", label: "2 Gün", price: 5500 },
  { value: "3", label: "3+ Gün", price: 8000 },
];

// Add-on prices
const EDITING_DISCOUNT = 0.3;
const SM_PRICE = 5000;
const ADS_PRICE = 5000;

export function CustomSquadTeaser() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState("0");
  const [selectedPhoto, setSelectedPhoto] = useState("0");
  const [selectedShooting, setSelectedShooting] = useState("0");
  const [includeEditing, setIncludeEditing] = useState(true);
  const [includeSM, setIncludeSM] = useState(false);
  const [includeAds, setIncludeAds] = useState(false);

  // Apply recommended settings when sector changes
  useEffect(() => {
    if (selectedSector) {
      const sector = sectors.find((s) => s.id === selectedSector);
      if (sector) {
        setSelectedVideo(sector.recommended.video);
        setSelectedPhoto(sector.recommended.photo);
        setSelectedShooting(sector.recommended.shooting);
      }
    }
  }, [selectedSector]);

  // Calculate total price
  const videoPrice = videoOptions.find((o) => o.value === selectedVideo)?.price || 0;
  const photoPrice = photoOptions.find((o) => o.value === selectedPhoto)?.price || 0;
  const shootingPrice = shootingOptions.find((o) => o.value === selectedShooting)?.price || 0;

  const baseContentPrice = videoPrice + photoPrice;
  const contentPrice = includeEditing ? baseContentPrice : baseContentPrice * (1 - EDITING_DISCOUNT);

  const totalPrice =
    contentPrice +
    shootingPrice +
    (includeSM ? SM_PRICE : 0) +
    (includeAds ? ADS_PRICE : 0);

  // Props for Brify mascot
  const videoActive = selectedVideo !== "0";
  const photoActive = selectedPhoto !== "0";

  return (
    <Section background="light" transitionTo="teal">
      <div className="text-center space-y-4 mb-8 md:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#012326]"
        >
          İhtiyacınıza Göre{" "}
          <span className="text-accent font-baumans">Hesaplayın</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-[#205459] max-w-2xl mx-auto"
        >
          Sektörünüzü seçin, ihtiyacınızı belirleyin, anında fiyat görün
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
        {/* Left Side - Brify Mascot */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <Brify
            videoActive={videoActive}
            photoActive={photoActive}
            smActive={includeSM}
            adsActive={includeAds}
            videoLevel={parseInt(selectedVideo)}
            photoLevel={parseInt(selectedPhoto)}
          />
        </motion.div>

        {/* Right Side - Compact Calculator */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <Card className="shadow-warm border-[#346C73]/20 overflow-hidden bg-white">
            <CardContent className="p-0">
              {/* Sector Selection - Compact Grid */}
              <div className="p-4 bg-[#012326]">
                <p className="text-white/70 text-sm mb-3">Sektörünüz</p>
                <div className="flex flex-wrap gap-2">
                  {sectors.map((sector) => {
                    const Icon = sector.icon;
                    return (
                      <button
                        key={sector.id}
                        onClick={() => setSelectedSector(sector.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                          selectedSector === sector.id
                            ? "bg-accent text-white"
                            : "bg-white/10 text-white/70 hover:bg-white/20"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{sector.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dropdowns Row */}
              <div className="p-4 space-y-4 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Video Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#205459] font-medium flex items-center gap-1">
                      <Video className="w-3.5 h-3.5" />
                      Video
                    </label>
                    <Select value={selectedVideo} onValueChange={setSelectedVideo}>
                      <SelectTrigger className="h-9 text-sm bg-white border-[#346C73]/30 text-[#012326]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-[#346C73]/30">
                        {videoOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value} className="text-[#012326]">
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Photo Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#205459] font-medium flex items-center gap-1">
                      <ImageIcon className="w-3.5 h-3.5" />
                      Fotoğraf
                    </label>
                    <Select value={selectedPhoto} onValueChange={setSelectedPhoto}>
                      <SelectTrigger className="h-9 text-sm bg-white border-[#346C73]/30 text-[#012326]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-[#346C73]/30">
                        {photoOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value} className="text-[#012326]">
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Shooting Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#205459] font-medium flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Çekim
                    </label>
                    <Select value={selectedShooting} onValueChange={setSelectedShooting}>
                      <SelectTrigger className="h-9 text-sm bg-white border-[#346C73]/30 text-[#012326]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-[#346C73]/30">
                        {shootingOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value} className="text-[#012326]">
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Inline Checkboxes */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={includeEditing}
                      onCheckedChange={(checked) => setIncludeEditing(checked as boolean)}
                      className="data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                    />
                    <span className="text-sm text-[#012326]">Kurgu/Rötuş</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={includeSM}
                      onCheckedChange={(checked) => setIncludeSM(checked as boolean)}
                      className="data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                    />
                    <span className="text-sm text-[#012326]">SM Yönetimi</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={includeAds}
                      onCheckedChange={(checked) => setIncludeAds(checked as boolean)}
                      className="data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                    />
                    <span className="text-sm text-[#012326]">Reklam</span>
                  </label>
                </div>

                {!includeEditing && (selectedVideo !== "0" || selectedPhoto !== "0") && (
                  <p className="text-xs text-green-600">
                    Kurgu hariç %30 indirimli fiyat
                  </p>
                )}
              </div>

              {/* Price Footer */}
              <div className="p-4 bg-[#F0F0F2] border-t border-accent/10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-[#205459]">Tahmini Aylık</p>
                    <motion.p
                      key={totalPrice}
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      className="text-2xl md:text-3xl font-bold text-accent"
                    >
                      {formatPrice(Math.round(totalPrice))}
                    </motion.p>
                  </div>
                  <Button
                    asChild
                    className="bg-accent hover:bg-accent/90 text-white"
                  >
                    <Link href="/paketler" className="flex items-center gap-2">
                      Teklif Al
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-xs text-[#205459] mt-3">
            Detaylı özelleştirme için{" "}
            <Link href="/paketler#custom-builder" className="text-accent underline">
              tıklayın
            </Link>
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
