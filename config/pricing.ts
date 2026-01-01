/**
 * Pricing Configuration for The Briefly
 * This file contains all pricing tiers and add-on options
 * Modify this file to update prices across the entire platform
 */

export type ServiceType = "video" | "design" | "social";

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  features: string[];
  popular?: boolean;
  services: {
    video?: number;
    design?: number;
    social?: number;
  };
}

export interface AddonOption {
  id: string;
  type: ServiceType;
  name: string;
  description: string;
  unitPrice: number;
  unit: string; // e.g., "per reel", "per design", "per post"
}

// Tiered Package Pricing
export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Küçük işletmeler ve yeni kurulan markalar için ideal başlangıç paketi",
    monthlyPrice: 25000,
    features: [
      "Ayda 4 adet dikey format video",
      "Ayda 10 adet kare format fotoğraf",
      "Ayda 10 adet dikey format fotoğraf",
      "Ayda 1 kere çekim çalışması",
      "Toplamda 5 revizyon hakkı",
    ],
    services: {
      video: 4,
      design: 20,
    },
  },
  {
    id: "pro",
    name: "Pro",
    description: "Büyüyen e-ticaret ve marka hesapları için profesyonel paket",
    monthlyPrice: 35000,
    popular: true,
    features: [
      "Ayda 6 adet dikey format video",
      "Ayda 15 adet kare format fotoğraf",
      "Ayda 15 adet dikey format fotoğraf",
      "Ayda 2 kere çekim çalışması",
      "Aylık sosyal medya paylaşım yönetimi",
      "Toplamda 8 revizyon hakkı",
    ],
    services: {
      video: 6,
      design: 30,
      social: 1,
    },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Kurumsal markalar için tam ölçekli yaratıcı ekip",
    monthlyPrice: 45000,
    features: [
      "Ayda 8-10 adet dikey format video",
      "Ayda 20 adet kare format fotoğraf",
      "Ayda 20 adet dikey format fotoğraf",
      "Ayda 3 kere çekim çalışması",
      "Aylık sosyal medya paylaşım yönetimi",
      "Aylık reklam yönetimi",
      "Toplamda 10 revizyon hakkı",
    ],
    services: {
      video: 10,
      design: 40,
      social: 1,
    },
  },
];

// Add-on Options for Custom Builder
export const addonOptions: AddonOption[] = [
  // Video Add-ons
  {
    id: "reel-basic",
    type: "video",
    name: "Reel/Short Video (30sn)",
    description: "Instagram Reel, TikTok veya YouTube Short formatı",
    unitPrice: 2500,
    unit: "adet",
  },
  {
    id: "reel-extended",
    type: "video",
    name: "Uzun Video (60sn)",
    description: "Detaylı ürün tanıtımı veya hikaye anlatımı",
    unitPrice: 4000,
    unit: "adet",
  },
  {
    id: "video-premium",
    type: "video",
    name: "Premium Video (120sn)",
    description: "Kurumsal tanıtım, marka hikayesi",
    unitPrice: 7500,
    unit: "adet",
  },

  // Design Add-ons
  {
    id: "social-post",
    type: "design",
    name: "Sosyal Medya Görseli",
    description: "Feed postu, story, carousel tasarımı",
    unitPrice: 800,
    unit: "adet",
  },
  {
    id: "banner-design",
    type: "design",
    name: "Web Banner / Reklam Görseli",
    description: "Google Ads, Facebook Ads banner tasarımı",
    unitPrice: 1200,
    unit: "adet",
  },
  {
    id: "infographic",
    type: "design",
    name: "İnfografik",
    description: "Veri görselleştirme ve bilgi tasarımı",
    unitPrice: 2000,
    unit: "adet",
  },

  // Social Media Management Add-ons
  {
    id: "content-strategy",
    type: "social",
    name: "İçerik Stratejisi Danışmanlığı",
    description: "Aylık strateji planlaması ve analiz",
    unitPrice: 5000,
    unit: "ay",
  },
  {
    id: "community-management",
    type: "social",
    name: "Topluluk Yönetimi",
    description: "Yorum yanıtlama ve sosyal medya moderasyonu",
    unitPrice: 7500,
    unit: "ay",
  },
];

// Helper function to calculate custom package price
export function calculateCustomPrice(selectedAddons: Record<string, number>): number {
  let total = 0;

  Object.entries(selectedAddons).forEach(([addonId, quantity]) => {
    const addon = addonOptions.find((a) => a.id === addonId);
    if (addon && quantity > 0) {
      total += addon.unitPrice * quantity;
    }
  });

  return total;
}

// Helper function to format price in Turkish Lira
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 0,
  }).format(price);
}
