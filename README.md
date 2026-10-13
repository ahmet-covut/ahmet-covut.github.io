# Mobil Geliştirici Portföy Sitesi

Türkçe / İngilizce iki dilli, açık/koyu temalı, tamamen ücretsiz barındırılan kişisel portföy sitesi.
[Astro](https://astro.build) ve [Tailwind CSS](https://tailwindcss.com) ile geliştirildi; GitHub Pages üzerinde yayınlanır.

Site hem **işe alım yapanlar** (CV, deneyim, proje detayları) hem de **freelance müşteriler** (hizmetler, çalışma süreci, SSS, iletişim formu) için bölümler içerir.

---

## 1. Bilgisayarında çalıştırma

Gereksinim: [Node.js](https://nodejs.org) 20 veya üzeri.

```bash
npm install      # ilk seferde bağımlılıkları kurar
npm run dev      # http://localhost:4321 adresinde canlı önizleme
npm run build    # yayına hazır dosyaları dist/ klasörüne üretir
npm run preview  # üretilen siteyi yerelde önizler
```

- Türkçe sayfa: `http://localhost:4321/`
- İngilizce sayfa: `http://localhost:4321/en/`

---

## 2. İçeriği kendine göre doldur

Sitenin **tüm içeriği tek bir dosyada**: [`src/data/profile.ts`](src/data/profile.ts).
Tasarıma dokunmadan sadece bu dosyayı düzenlemen yeterli. Her metin iki dilde yazılır:

```ts
title: { tr: 'Mobil Uygulama Geliştirici', en: 'Mobile App Developer' },
```

| Bölüm | Dosyadaki karşılığı |
| --- | --- |
| Ad, unvan, e-posta, sosyal medya, CV | `personal` |
| Hakkımda metni ve öne çıkan rakamlar | `about` |
| Teknolojiler | `skills` |
| Projeler ve detay (case study) sayfaları | `projects` |
| İş, eğitim, sertifikalar | `experience` |
| Freelance hizmet paketleri ve fiyatlar | `services` |
| Çalışma süreci adımları | `workProcess` |
| Müşteri SSS | `faq` |
| Referanslar | `testimonials` |

Arayüzdeki sabit metinler (menü, buton yazıları vb.) [`src/i18n/ui.ts`](src/i18n/ui.ts) dosyasındadır.

### Görseller ve dosyalar (`public/` klasörü)

| Dosya | Açıklama |
| --- | --- |
| `public/cv-tr.pdf`, `public/cv-en.pdf` | Kendi CV'lerinle değiştir (şu an yer tutucu). |
| `public/images/avatar.jpg` | Profil fotoğrafı. Ekledikten sonra `personal.avatar` alanına `'/images/avatar.jpg'` yaz. |
| `public/images/projects/...` | Uygulama ekran görüntüleri. Proje içinde `screenshots: ['/images/projects/fittrack-1.png']` şeklinde ekle. İlk görsel kartta, ilk üç görsel detay sayfasında telefon çerçevesi içinde gösterilir. Ekran görüntüsü yoksa örnek bir arayüz çizilir. |
| `public/og-image.png` | Site LinkedIn / WhatsApp / X'te paylaşıldığında görünen önizleme görseli (1200x630). Kendi adınla yeniden oluşturman önerilir; [Canva](https://www.canva.com) ücretsiz şablonları işini görür. |
| `public/favicon.svg` | Tarayıcı sekmesi ikonu. |

> Ekran görüntüleri için 1080x2340 civarında dikey PNG/JPG kullan ve [Squoosh](https://squoosh.app) ile sıkıştır (sayfa hızı için önemli).

### Proje eklemek / çıkarmak

`projects` dizisine yeni bir nesne ekle. `slug` alanı adres olur: `slug: 'fittrack'` için detay sayfası `/projects/fittrack` (İngilizce: `/en/projects/fittrack`) adresinde otomatik oluşur.

---

## 3. İletişim formu (ücretsiz)

Form varsayılan olarak, ziyaretçinin kendi e-posta uygulamasını **önceden doldurulmuş** şekilde açar (ek kurulum gerekmez).

Mesajların doğrudan e-postana gelmesini istersen:

1. [formspree.io](https://formspree.io) adresinde ücretsiz hesap aç (ayda 50 mesaj).
2. Yeni bir form oluştur; sana `https://formspree.io/f/xyzabcd` gibi bir adres verilir.
3. `src/data/profile.ts` içinde `formspreeId: 'xyzabcd'` olarak yaz.

Ücretsiz görüşme planlama butonu için [Cal.com](https://cal.com) (ücretsiz) bağlantını `personal.calendarUrl` alanına ekle. Boş bırakırsan buton gizlenir.

---

## 4. GitHub Pages ile ücretsiz yayınlama

1. [GitHub](https://github.com) üzerinde yeni bir depo (repository) oluştur.
   - Depo adını **`kullaniciadi.github.io`** koyarsan site `https://kullaniciadi.github.io` adresinde yayınlanır (önerilen).
   - Başka bir ad (ör. `portfoy`) verirsen adres `https://kullaniciadi.github.io/portfoy` olur. İkisi de otomatik çalışır.
2. Bu klasörü depoya gönder:

   ```bash
   git add .
   git commit -m "Portföy sitesi"
   git branch -M main
   git remote add origin https://github.com/KULLANICIADI/DEPOADI.git
   git push -u origin main
   ```

3. GitHub'da depo sayfasında **Settings → Pages → Build and deployment → Source** alanını **GitHub Actions** olarak seç.
4. Birkaç dakika içinde site yayında olur. Sonraki her `git push` sonrası site kendiliğinden güncellenir (**Actions** sekmesinden takip edebilirsin).

### Özel alan adı (isteğe bağlı, yıllık ~10-15 USD)

`adsoyad.dev` gibi bir alan adı aldıysan:

1. Alan adı sağlayıcında GitHub Pages için DNS kayıtlarını ekle ([rehber](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
2. Depoda **Settings → Pages → Custom domain** alanına alan adını yaz.
3. **Settings → Secrets and variables → Actions → Variables** bölümünde `CUSTOM_DOMAIN` adında bir değişken oluştur ve değerini `adsoyad.dev` yap.

---

## 5. İşe alımda öne çıkmak için kontrol listesi

- [ ] **CV:** Tek sayfa, ATS uyumlu (sade düzen, tablo/grafik yok), Türkçe ve İngilizce PDF. Her maddede ölçülebilir sonuç yaz ("çökme oranını %70 azalttım" gibi).
- [ ] **En az 2-3 detaylı proje (case study):** Problem, rolün, teknik kararlar, zorluklar ve rakamlarla sonuçlar. İşe alımcılar en çok buna bakar.
- [ ] **Mağazada yayında en az bir uygulama:** Mobil geliştirici için en güçlü kanıt. Küçük bir yan proje bile olur.
- [ ] **GitHub profili:** Profil README'si, sabitlenmiş (pinned) 4-6 proje; her projede ekran görüntülü README, mimari açıklaması (MVVM / Clean Architecture), testler ve CI.
- [ ] **LinkedIn:** Başlık, fotoğraf ve deneyimler sitenle tutarlı olsun; "Open to Work" ayarını aç ve sitenin linkini "Featured" bölümüne ekle.
- [ ] **Teknik içerik:** Medium veya dev.to'da öğrendiklerini anlatan yazılar (ör. "Flutter'da offline-first mimari"). Profilde `socials.medium` alanına ekle.
- [ ] **Sertifikalar:** Google Associate Android Developer, Meta iOS/Android sertifikaları gibi.
- [ ] **Hız ve erişilebilirlik:** Chrome DevTools → Lighthouse ile mobilde 90+ puan hedefle.
- [ ] **Siteyi her başvuruda paylaş:** CV'ye, LinkedIn'e, GitHub profiline ve e-posta imzana ekle.

## 6. Freelance müşteriler için kontrol listesi

- [ ] **Net hizmet paketleri:** Ne yaptığını, süresini ve "X TL'den başlayan" fiyatını yaz (`services`).
- [ ] **Şeffaf süreç:** Keşif görüşmesi → teklif → tasarım onayı → haftalık demo → test → mağaza yayını → bakım (`workProcess`).
- [ ] **SSS'de mutlaka cevapla:** Fiyatlandırma modeli, ödeme planı (ör. %30 / %40 / %30), müşterinin hazırlaması gerekenler (Apple Developer 99 USD/yıl, Google Play 25 USD tek seferlik), süre, kaynak kod ve fikri mülkiyetin kime ait olduğu, revizyon hakkı, garanti süresi, iletişim sıklığı, sözleşme/NDA.
- [ ] **Referanslar:** Her projeden sonra müşteriden 2-3 cümlelik yorum ve izin iste.
- [ ] **Sözleşme şablonu:** Kapsam, teslim tarihleri, ödeme planı, revizyon sınırı, fikri mülkiyet ve gizlilik maddelerini içeren bir şablon hazırla.
- [ ] **Fatura:** Türkiye'de freelance gelir için şahıs şirketi ya da serbest meslek makbuzu seçeneklerini bir mali müşavirle değerlendir. Genç girişimci desteği gibi istisnaları araştır.
- [ ] **Ücretsiz keşif görüşmesi:** Cal.com bağlantısı ile müşterinin tek tıkla görüşme planlamasını sağla.
- [ ] **Platformlar:** Upwork, Toptal, Bionluk, Contra gibi platformlarda profil açıp bu siteye bağlantı ver.
