# Homepage Structure Plan - The Briefly

**Goal:** High-conversion landing page that highlights flexibility and "Custom Squad" concept
**Design System:** Soft Industrial (Sage) - Calm & Deliberate animations
**Target:** B2B Clients (SMEs, Startups, E-commerce) + Sales Affiliates

---

## 🎯 Önerilen Sayfa Yapısı

### 1. **Hero Section** (Above the Fold)
**Headline Önerisi:**
```
"Kreatif Ekibinizi Dijital Montaj Hattına Dönüştürün"
Alt başlık: "Video, Tasarım, Sosyal Medya - Öngörülebilir Fiyat, Tahmin Edilebilir Kalite"
```

**Alternativ (Daha Direkt):**
```
"Ajans Kalitesi, Platform Hızı"
Alt başlık: "Pahalı ajanslardan bıktınız mı? Riskli freelancer'lardan yoruldunuz mu?
The Briefly ile kreatif işlerinizi standart paketler veya custom squad ile yönetin."
```

**Elements:**
- [ ] Ana headline (H1)
- [ ] Alt headline (description)
- [ ] 2 CTA Button:
  - Primary: "Paketleri Keşfet" (→ /paketler)
  - Secondary: "Nasıl Çalışır?" (→ /nasil-calisir)
- [ ] Hero Visual:
  - Öneri: Subtle grid pattern background + Clean typography
  - Alternatif: Animated mockup showcase (dashboard preview)
- [ ] Trust Badge: "500+ Marka Güveniyor" (fake data for now)

**Animation:** Calm fadeInUp (800ms) - No rush, premium feel

---

### 2. **Problem-Solution Section**
**Başlık:** "Neden The Briefly?"

**3 Column Cards:**
| Sorun | Çözüm |
|-------|-------|
| ❌ Ajanslar pahalı, yavaş, şeffaf değil | ✅ Sabit fiyat, net teslimat süresi |
| ❌ Freelancer'lar riskli, kalite değişken | ✅ Vetlenmiş ekip, tutarlı kalite |
| ❌ Her iş için farklı kişi, koordinasyon kaos | ✅ Tek platform, tüm kreatif ihtiyaçlar |

**Animation:** Stagger children - Cards appear one by one

---

### 3. **"Custom Squad" Teaser**
**Başlık:** "İhtiyacınıza Göre Ekibinizi Oluşturun"

**Content:**
- Açıklama: "Hazır paketler size dar mı geliyor? Custom Squad Builder ile tam ihtiyacınız kadar hizmet alın."
- **Interactive Preview:**
  - Option A: Mini calculator (2-3 dropdown, instant price preview)
  - Option B: Static cards showing example squads + "Hesapla" CTA
- CTA: "Custom Squad Oluştur" (→ /paketler#custom-builder)

**Animation:** Grid pattern background, subtle hover effects

---

### 4. **Pricing Tiers Preview** (3 Cards)
**Başlık:** "Önceden Belirlenmiş Paketler"

**3 Tiered Cards:**
- Starter: ₺15,000/ay
- Pro: ₺35,000/ay (Popular badge)
- Enterprise: ₺75,000/ay

**Each Card Shows:**
- Fiyat
- 3-4 Ana özellik (bullet points)
- CTA: "Detayları Gör" (→ /paketler)

**Animation:** Hover scale + Border highlight on popular package

---

### 5. **How It Works** (3 Steps)
**Başlık:** "Nasıl Çalışır?"

**3 Step Timeline:**
1. **Seçin** - Paket seçin veya custom squad oluşturun
2. **Briefing** - İhtiyaçlarınızı paylaşın, ekibiniz işe koyulsun
3. **Teslim** - Belirlenen sürede, kaliteli işleriniz hazır

**Visual:** Simple numbered steps with icons

**CTA:** "Detaylı Süreci Gör" (→ /nasil-calisir)

---

### 6. **Social Proof** (Optional - Phase 1.5)
**Başlık:** "Markalar Neden Bizi Seçiyor?"

**Elements:**
- 3 Testimonial cards (fake data for now)
- Logo showcase (placeholder logos)
- Stats: "500+ Proje Tamamlandı, 50+ Aktif Marka" (fake)

**Note:** Bu section'ı Phase 1'de skip edip sonra ekleyebiliriz

---

### 7. **Sales Affiliate Teaser**
**Başlık:** "Satış Ortağımız Olun, Komisyon Kazanın"

**Content:**
- Açıklama: "The Briefly'yi tanıtın, her satıştan %X komisyon kazanın"
- CTA: "Satış Ortağı Programını Keşfet" (→ /satis-ortakligi)
- Visual: Income calculator preview or commission chart

**Style:** Accent background (sage green), stands out from rest

---

### 8. **Final CTA Section**
**Başlık:** "Hemen Başlayın"

**Content:**
- Headline: "Kreatif İşlerinizi Bugün Dijital Montaj Hattına Taşıyın"
- 2 CTA Buttons:
  - Primary: "Paketleri Gör"
  - Secondary: "Demo Talep Et" (→ /iletisim)

**Background:** Subtle grid pattern, warm colors

---

## 🎨 Design Decisions

### Layout
- **Max Width:** 1400px container
- **Spacing:** 80-120px between sections
- **Grid:** 3-column for features, 2-column for comparison

### Colors
- **Hero CTA:** Accent (Sage) background
- **Section Backgrounds:** Alternating - White/Warm off-white
- **Cards:** Warm shadow, subtle border

### Typography
- **H1 (Hero):** 4xl-6xl, bold
- **H2 (Section):** 3xl-4xl, semibold
- **Body:** text-lg for readability

### Animations
- **All entrance:** Calm & Deliberate (800ms fadeInUp)
- **Scroll trigger:** Animate when section enters viewport
- **Hover:** Subtle scale (1.02) on interactive cards

---

## ❓ Karar Verilecek Konular

### 1. Hero Headline
- [ ] Option A: "Kreatif Ekibinizi Dijital Montaj Hattına Dönüştürün"
- [ ] Option B: "Ajans Kalitesi, Platform Hızı"
- [ ] Custom: [Senin önerilerin?]

### 2. Custom Squad Section
- [ ] Interactive mini calculator (harder, more engaging)
- [ ] Static preview + CTA to full calculator (easier, faster to build)

### 3. Social Proof Section
- [ ] Phase 1'e dahil et (fake data ile)
- [ ] Phase 1.5'e ertele (gerçek data bekle)

### 4. Sections Sırası
Yukarıdaki sıra uygun mu yoksa değişiklik yapalım mı?
1. Hero
2. Problem-Solution
3. Custom Squad Teaser
4. Pricing Preview
5. How It Works
6. (Optional) Social Proof
7. Sales Affiliate Teaser
8. Final CTA

---

## 📝 İmplementation Notes

- **Reusable Components:** Section container, CTA button, Feature card
- **Responsive:** Mobile-first, 2-column on tablet, 3-column on desktop
- **SEO:** Proper H1-H6 hierarchy, meta tags
- **Performance:** Lazy load images, optimize animations

---

## Sonraki Adımlar

1. ✅ Get your approval on structure
2. Build reusable section components
3. Build Hero section
4. Build remaining sections one by one
5. Test responsive layout
6. Optimize animations

---

**Bana Feedback Ver:**
- Headline hangi versiyonu beğendin?
- Custom Squad section interactive mi static mi?
- Social Proof şimdi mi sonra mı?
- Section sırasında değişiklik var mı?
- Başka eklemek istediğin section?
