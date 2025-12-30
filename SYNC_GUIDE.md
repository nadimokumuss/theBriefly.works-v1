# 🔄 İki Bilgisayar Arası Senkronizasyon Rehberi

Bu rehber, **Ev** ve **Ofis** bilgisayarları arasında sorunsuz çalışmanızı sağlar.

---

## 📋 Altın Kurallar

### 1️⃣ İşe Başlarken (Her Zaman!)
```bash
npm run sync-start
```
**Ne yapar?**
- GitHub'tan son değişiklikleri çeker (pull)
- Conflict varsa uyarır
- Güvenli çalışma ortamı sağlar

### 2️⃣ İş Bitince (Unutma!)
```bash
npm run sync-end
```
**Ne yapar?**
- Tüm değişiklikleri commit eder
- GitHub'a push eder
- Diğer bilgisayara hazır hale getirir

---

## 🎯 Örnek İş Akışı

### Ofiste Çalışırken
```bash
# 1. Sabah ofise geldiniz
npm run sync-start    # Evdeki değişiklikleri al

# 2. Çalışın...
npm run dev           # Geliştirme yap

# 3. İş bitince (eve gitmeden önce!)
npm run sync-end      # GitHub'a gönder
```

### Evde Çalışırken
```bash
# 1. Eve geldiniz
npm run sync-start    # Ofisteki değişiklikleri al

# 2. Çalışın...
npm run dev           # Geliştirme yap

# 3. İş bitince (uyumadan önce!)
npm run sync-end      # GitHub'a gönder
```

---

## ⚠️ Önemli Notlar

### Commit Mesajı
`npm run sync-end` çalıştırdığınızda commit mesajı sorar:
- **Enter'a basarsanız:** Otomatik mesaj kullanır (örn: "Update: 2025-12-30 15:30")
- **Mesaj yazarsanız:** Kendi mesajınızı kullanır

### Conflict Durumu
Eğer her iki bilgisayarda da değişiklik yaptıysanız:
```bash
❌ CONFLICT! Local ve remote farklı commitlere sahip.
Manuel müdahale gerekiyor.
```
**Çözüm:** Bana haber verin, beraber halledelim.

---

## 🚨 Unutmayın!

**HER İŞE BAŞLARKEN:**
```bash
npm run sync-start
```

**HER İŞ BİTİNCE:**
```bash
npm run sync-end
```

Bu iki komutu alışkanlık haline getirin, sorun yaşamazsınız! ✅

---

## 📞 Sorun mu var?

Eğer scriptler çalışmazsa:
```bash
# Script izinlerini kontrol edin
ls -la scripts/

# Gerekirse tekrar izin verin
chmod +x scripts/sync-start.sh
chmod +x scripts/sync-end.sh
```

---

**Son Güncelleme:** 2025-12-30
# Test - GitHub Desktop authentication working
