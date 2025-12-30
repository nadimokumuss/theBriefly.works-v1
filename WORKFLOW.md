# Otomatik Workflow - Claude ile Çalışma Protokolü

> Bu dosya Claude'un her session'da nasıl çalışacağını tanımlar.

---

## 🎯 İki Komut, Tam Otomasi

### 1️⃣ İşe Başlarken: `sync-start`

**Siz söylersiniz:**
```
"sync-start"
```

**Claude yapar:**
1. ✅ `npm run sync-start` komutunu çalıştırır (GitHub'tan pull)
2. ✅ PROGRESS.md okur → Son durum nedir?
3. ✅ CLAUDE.md okur → Teknik kurallar nedir?
4. ✅ PRD.md okur → Ürün gereksinimleri nedir?
5. ✅ Git log inceler → Son değişiklikler nedir?
6. ✅ Size özet sunar:
   ```
   "Projeyi taradım!
   - Son durum: Ana sayfa revizyonları bekleniyor
   - Teslimat süreleri güncellendi (24-48 saat)
   - 10 section'lı homepage yapısı tamamlanmış
   Nereden devam edelim?"
   ```

---

### 2️⃣ İş Bitince: `sync-end`

**Siz söylersiniz:**
```
"sync-end"
```

**Claude yapar:**
1. ✅ Session'da ne yaptık analiz eder
2. ✅ PROGRESS.md günceller:
   - Tamamlananlar → Ne bitirdik?
   - Yapılacaklar → Sıradaki ne?
   - Önemli kararlar → Ne değişti?
3. ✅ PRD.md günceller (gerekirse - büyük değişiklikler varsa)
4. ✅ CLAUDE.md günceller (gerekirse - yeni teknik kurallar varsa)
5. ✅ `npm run sync-end` çalıştırır (commit + push)
6. ✅ Size özet sunar:
   ```
   "Tamamlandı!
   - PROGRESS.md güncellendi
   - Değişiklikler GitHub'a gönderildi
   - Sonraki adım: Pricing sayfası
   Diğer bilgisayarda 'sync-start' diyerek devam edebilirsiniz!"
   ```

---

## 🔄 Örnek İş Akışı

### Ofiste (Sabah)
**Siz:**
```
"sync-start"
```

**Claude:**
```
"Projeyi taradım! Ana sayfa revizyonları bekleniyor. Başlayalım mı?"
```

**Siz:**
```
"Evet, şu revizyonları yap: ..."
```

[Çalışma...]

**Siz (akşam):**
```
"sync-end"
```

**Claude:**
```
"Tamamlandı! Ana sayfa revizyonları uygulandı. PROGRESS.md güncellendi, GitHub'a gönderildi."
```

---

### Evde (Akşam)
**Siz:**
```
"sync-start"
```

**Claude:**
```
"Projeyi taradım! Ofiste ana sayfa revizyonları tamamlanmış. Şimdi pricing sayfasına başlayabiliriz."
```

---

## 📋 Claude'un Sorumlulukları

### Her sync-start'ta:
- [ ] Git pull yap
- [ ] PROGRESS.md oku (SON DURUM)
- [ ] CLAUDE.md oku (TEKNİK KURALLAR)
- [ ] PRD.md oku (ÜRÜN GEREKSİNİMLERİ)
- [ ] Git log incele (DEĞİŞİKLİKLER)
- [ ] Özet sun (HAZIRlım!)

### Her sync-end'de:
- [ ] Session'ı analiz et (NE YAPTIK?)
- [ ] PROGRESS.md güncelle (DURUM)
- [ ] PRD/CLAUDE.md güncelle (gerekirse)
- [ ] Git commit + push yap
- [ ] Özet sun (TAMAMLANDI!)

---

## ⚡ Hızlı Komutlar

```
"sync-start"    → İşe başla (otomatik context load)
"sync-end"      → İş bitir (otomatik update + push)
"git status"    → Mevcut değişiklikleri göster
"tarama yap"    → Projeyi tekrar tara (gerekirse)
```

---

## 🎯 Artık Yapmanız Gerekenler

### İşe Başlarken (Her Bilgisayar)
```
"sync-start"
```

### İş Bitince (Her Bilgisayar)
```
"sync-end"
```

**BU KADAR!** 🚀

Claude otomatik olarak:
- ✅ Projeyi hatırlayacak
- ✅ Kaldığınız yerden devam edecek
- ✅ Dosyaları güncelleyecek
- ✅ GitHub'a gönderecek

---

**Son Güncelleme:** 2025-12-30
**Durum:** AKTİF - Bu workflow artık aktif!
