/**
 * SİTENİN TÜM İÇERİĞİ BU DOSYADADIR.
 *
 * Her metin { tr: '...', en: '...' } şeklinde iki dilde yazılır.
 * Görseller `public/` klasörüne konur ve "/images/..." şeklinde yazılır.
 */

export type Lang = 'tr' | 'en';
export type L<T = string> = Record<Lang, T>;

export interface Metric {
  /** Dile göre farklı yazım gerekiyorsa { tr: '%99,2', en: '99.2%' } şeklinde yazılabilir */
  value: string | L;
  label: L;
}

export interface Project {
  slug: string;
  name: string;
  summary: L;
  category: L;
  platforms: ('iOS' | 'Android' | 'ChromeOS' | 'Web')[];
  tech: string[];
  /** Uygulama ikonu (ör. "/images/projects/app/icon.png") */
  icon?: string;
  /** Telefon mockup'ında gösterilecek ekran görüntüleri (ör. "/images/projects/app-1.png"). Boşsa örnek arayüz çizilir. */
  screenshots: string[];
  /** Ekran görüntüleri yataysa 'landscape' */
  orientation?: 'portrait' | 'landscape';
  /** Mockup ve kart vurgu rengi */
  color: string;
  /** Uygulamanın mağazaya ilk çıktığı yıl. Boş bırakılırsa gösterilmez. */
  year?: string;
  links: {
    appStore?: string;
    googlePlay?: string;
    github?: string;
    website?: string;
  };
  metrics: Metric[];
  /** Bu projede bizzat yaptıkların (proje detay sayfasında listelenir) */
  contribution: L<string[]>;
}

export interface ExperienceItem {
  type: 'work' | 'education' | 'certificate';
  title: L;
  org: L;
  period: L;
  description: L;
  highlights?: L<string[]>;
  tech?: string[];
}

export interface PricingTier {
  name: L;
  /** Paketin kimin için olduğunu anlatan tek satır */
  audience: L;
  price: L;
  duration: L;
  features: L<string[]>;
}

export interface ServiceCategory {
  id: 'mobile' | 'web' | 'game';
  icon: 'smartphone' | 'globe' | 'gamepad';
  title: L;
  description: L;
  tiers: PricingTier[];
}

export interface Service {
  icon: 'plus' | 'store' | 'wrench';
  title: L;
  description: L;
  priceFrom: L;
  duration: L;
  features: L<string[]>;
}

export interface QuoteQuestion {
  /** Form alanının adı; 'budget' iletişim formundaki bütçe alanına aktarılır */
  id: string;
  label: L;
  /** Özette kullanılan kısa başlık */
  summary: L;
  multiple?: boolean;
  required?: boolean;
  options: L<string[]>;
}

export interface ProcessStep {
  title: L;
  description: L;
}

export interface FaqItem {
  q: L;
  a: L;
}

export interface Testimonial {
  quote: L;
  name: string;
  role: L;
}

// ---------------------------------------------------------------------------
// KİŞİSEL BİLGİLER
// ---------------------------------------------------------------------------

export const personal = {
  name: 'Ahmet Çövüt',
  initials: 'AÇ',
  title: {
    tr: 'Unity ve Çapraz Platform Mobil Geliştirici',
    en: 'Unity & Cross-Platform Mobile Developer',
  } as L,
  stackLine: 'Unity · C# · iOS · Android · ChromeOS',
  tagline: {
    tr: '6 yıl boyunca Unity ile çocuklara yönelik mobil uygulamalar geliştirdim. Üzerinde çalıştığım uygulamalar App Store ve Google Play\'de toplam 15 milyondan fazla indirildi.',
    en: 'I spent 6 years building mobile apps for kids with Unity. The apps I worked on have been downloaded more than 15 million times on the App Store and Google Play.',
  } as L,
  location: {
    tr: 'İstanbul, Türkiye',
    en: 'Istanbul, Türkiye',
  } as L,
  email: 'ahmetcovut90@gmail.com',
  /** true ise hero'da "Yeni bir pozisyona açığım" satırı görünür */
  availableForWork: false,
  /** Profil fotoğrafı (kare, en az 400×400 piksel). Boşsa ya da yüklenemezse baş harfler gösterilir. */
  avatar: '/images/avatar.jpg',
  /** public/ klasöründeki CV dosyaları. Türkçe CV hazırlarsan tr alanını değiştir. */
  cv: {
    tr: '/Ahmet_Covut_CV.pdf',
    en: '/Ahmet_Covut_CV.pdf',
  } as L,
  socials: {
    github: 'https://github.com/ahmet-covut',
    linkedin: 'https://www.linkedin.com/in/ahmet-%C3%A7%C3%B6v%C3%BCt-9765a1b2/',
    twitter: '',
    medium: '',
  },
  /** Ücretsiz Cal.com veya Calendly bağlantısı. Boşsa buton gizlenir. */
  calendarUrl: '',
  /** formspree.io'dan aldığın form kimliği (ör. "xyzabcd"). Boşsa form, ziyaretçinin e-posta uygulamasını doldurulmuş şekilde açar. */
  formspreeId: '',
};

// ---------------------------------------------------------------------------
// HAKKIMDA
// ---------------------------------------------------------------------------

export const about = {
  paragraphs: {
    tr: [
      'Yazılım geliştiricisiyim. İstanbul Şehir Üniversitesi Bilgisayar Mühendisliği mezunuyum; 2019–2025 yılları arasında Mayadem\'de ağırlıklı olarak C# ve Unity ile iOS, Android ve ChromeOS için milyonlarca kullanıcıya ulaşan uygulamalar geliştirdim.',
      'Bir ürünün geliştirmeden yayına ve yayından sonrasına kadar her aşamasında sorumluluk almayı seviyorum. REST API ve üçüncü taraf servis entegrasyonları, sürüm yönetimi, hata ve çökme analizi ile performans optimizasyonu en çok deneyim kazandığım alanlar. Hassas kullanıcı kitlelerine yönelik ürünlerde çalışmak, gizliliği ve platform kurallarına (COPPA gibi) uyumu işin en başından düşünmeyi alışkanlık haline getirdi.',
      'Agile/Scrum ile çalışan, farklı disiplinlerden oluşan ekiplerde yer aldım ve stajyer geliştiricilere mentorluk yaptım. Yeni teknolojiler öğrenmekten keyif alıyorum; şu sıralar Swift, Flutter, React Native ve yapay zekâ entegrasyonları üzerine çalışıyorum. İyi mühendislik pratiklerine önem veren bir ekipte tam zamanlı bir yazılım geliştirici pozisyonu arıyorum.',
    ],
    en: [
      'I am a software developer with a degree in Computer Engineering from Istanbul Şehir University. From 2019 to 2025 I worked at Mayadem, mainly building apps with C# and Unity for iOS, Android and ChromeOS that reached millions of users.',
      'I like taking ownership of a product at every stage, from development to release and beyond. REST API and third-party service integrations, release management, bug and crash analysis, and performance optimization are the areas where I have the most experience. Working on products for a sensitive audience made it a habit to think about privacy and platform compliance (such as COPPA) from the very start.',
      'I have worked in cross-functional Agile/Scrum teams and mentored intern developers. I enjoy learning new technologies and am currently working with Swift, Flutter, React Native and AI integrations. I am looking for a full-time software developer role on a team that values good engineering practices.',
    ],
  } as L<string[]>,
  highlights: [
    { value: '6+', label: { tr: 'Yıl deneyim', en: 'Years of experience' } },
    { value: '15M+', label: { tr: 'Toplam indirme', en: 'Total downloads' } },
    { value: '39+', label: { tr: 'Üzerinde çalıştığım uygulama', en: 'Apps worked on' } },
    { value: { tr: '%99,2', en: '99.2%' }, label: { tr: 'Çökmesiz oturum', en: 'Crash-free sessions' } },
  ] as Metric[],
  languages: {
    tr: 'Türkçe (ana dil) · İngilizce (B2)',
    en: 'Turkish (native) · English (B2, upper-intermediate)',
  } as L,
};

// ---------------------------------------------------------------------------
// TEKNOLOJİLER
// ---------------------------------------------------------------------------

/**
 * learning: true olan grup, ayrı ve tam genişlikte "öğreniyorum" kartı olarak gösterilir.
 * Teknoloji adları tek metin olarak yazılır; Türkçe karşılığı olanlar { tr, en } şeklinde yazılabilir.
 */
export const skills: { title: L; items: (string | L)[]; learning?: boolean }[] = [
  {
    title: { tr: 'Dil ve Motor', en: 'Language & Engine' },
    items: ['C#', 'Unity'],
  },
  {
    title: { tr: 'Platformlar', en: 'Platforms' },
    items: ['iOS', 'Android', 'ChromeOS', 'Windows', 'macOS'],
  },
  {
    title: { tr: 'Yayın ve Test', en: 'Release & Testing' },
    items: [
      'App Store Connect',
      'Google Play Console',
      'TestFlight',
      'Firebase App Distribution',
      { tr: 'Uygulama İmzalama', en: 'App Signing' },
      { tr: 'Dahili / Kapalı Test', en: 'Internal / Closed Testing' },
      { tr: 'Mağaza İnceleme Kuralları', en: 'Review Guidelines' },
    ],
  },
  {
    title: { tr: 'Analitik, Bildirim ve Ödeme', en: 'Analytics, Messaging & Payments' },
    items: ['Firebase Analytics', 'AppsFlyer', 'Firebase Cloud Messaging', 'Netmera', 'Unity IAP'],
  },
  {
    title: { tr: 'Kimlik Doğrulama', en: 'Authentication' },
    items: ['Firebase Authentication', 'Google Sign-In', 'Apple Sign-In', 'Facebook Login', 'ClassLink', 'Clever'],
  },
  {
    title: { tr: 'API ve Veri', en: 'APIs & Data' },
    items: ['REST API', 'JSON', 'Swagger'],
  },
  {
    title: { tr: 'Geliştirme Araçları', en: 'Developer Tools' },
    items: ['Xcode', 'Android Studio', 'Git (Bitbucket)', 'SourceTree', 'Jira'],
  },
  {
    title: { tr: 'Yöntemler', en: 'Practices' },
    items: ['OOP', 'Clean Code', 'Agile/Scrum', 'CI/CD'],
  },
  {
    title: { tr: 'Yapay Zekâ Destekli Geliştirme', en: 'AI-Assisted Development' },
    items: ['GitHub Copilot', 'Cursor'],
  },
  {
    title: { tr: 'Şu An Öğrendiklerim', en: 'Currently Learning' },
    learning: true,
    items: ['Swift (Native iOS)', 'Flutter (Dart)', 'React Native', 'Electron', 'Supabase', { tr: 'Yapay Zekâ Entegrasyonları', en: 'AI Integrations' }],
  },
];

// ---------------------------------------------------------------------------
// PROJELER
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  {
    slug: 'trt-kids-kitaplik',
    name: 'TRT Çocuk Kitaplık',
    category: { tr: 'Dijital Çocuk Kütüphanesi', en: 'Digital Kids\' Library' },
    summary: {
      tr: '3-7 yaş için reklamsız bir dijital kütüphane. Pedagog onaylı resimli kitaplar sesli okunuyor ve animasyonlarla canlanıyor; ebeveynler de çocuğun okuma ilerlemesini ayrı bir panelden takip edebiliyor.',
      en: 'An ad-free digital library for ages 3-7. Pedagogue-approved picture books are read aloud and brought to life with animations, and parents can follow their child\'s reading progress from a separate dashboard.',
    },
    platforms: ['iOS', 'Android'],
    tech: ['Unity', 'C#', 'Firebase Analytics', 'AppsFlyer'],
    icon: '/images/projects/trt-kids-kitaplik/icon.png',
    screenshots: [
      '/images/projects/trt-kids-kitaplik/shot-1.webp',
      '/images/projects/trt-kids-kitaplik/shot-2.webp',
      '/images/projects/trt-kids-kitaplik/shot-3.webp',
    ],
    orientation: 'landscape',
    color: '#e11d48',
    year: '2021',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.trtcocuk.kitaplik',
      appStore: 'https://apps.apple.com/tr/app/trt-%C3%A7ocuk-kitapl%C4%B1k-oku-dinle/id1549968402',
    },
    metrics: [
      { value: '10M+', label: { tr: 'İndirme', en: 'Downloads' } },
      { value: { tr: '4,3 ★', en: '4.3 ★' }, label: { tr: 'App Store (7.000+ oy)', en: 'App Store (7,000+ ratings)' } },
      { value: '3-7', label: { tr: 'Yaş grubu', en: 'Age group' } },
    ],
    contribution: {
      tr: [
        'Etkileşimli kitap özelliklerinin geliştirilmesi ve bakımı.',
        'Firebase Analytics ve AppsFlyer entegrasyonları.',
        'Uygulama performansının ve bellek kullanımının iyileştirilmesi.',
        'Android ve iOS\'a özgü platform sorunlarının çözümü.',
      ],
      en: [
        'Developed and maintained the interactive book features.',
        'Integrated Firebase Analytics and AppsFlyer.',
        'Improved the app\'s performance and memory usage.',
        'Fixed platform-specific issues between Android and iOS.',
      ],
    },
  },
  {
    slug: 'trt-kids-game-world',
    name: 'TRT Çocuk Oyun Dünyası',
    category: { tr: 'Eğitici Oyunlar', en: 'Educational Games' },
    summary: {
      tr: '3-8 yaş için reklamsız bir mini oyun dünyası. Çocuklar kendi kasabalarını kuruyor; bulmaca, spor, sanat ve müzik oyunları oynuyor. Ebeveynler ekran süresini ve etkinlikleri panelden kontrol edebiliyor.',
      en: 'An ad-free world of mini-games for ages 3-8. Kids build their own town and play puzzle, sports, art and music games, while parents control screen time and activities from a dashboard.',
    },
    platforms: ['iOS', 'Android'],
    tech: ['Unity', 'C#'],
    icon: '/images/projects/trt-kids-game-world/icon.png',
    screenshots: [
      '/images/projects/trt-kids-game-world/shot-1.webp',
      '/images/projects/trt-kids-game-world/shot-2.webp',
      '/images/projects/trt-kids-game-world/shot-3.webp',
    ],
    orientation: 'landscape',
    color: '#f59e0b',
    year: '2021',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.trtcocuk.gameworldapp',
      appStore: 'https://apps.apple.com/tr/app/trt-kids-game-world/id1588238833',
    },
    metrics: [
      { value: '4M+', label: { tr: 'İndirme', en: 'Downloads' } },
      { value: { tr: '4,4 ★', en: '4.4 ★' }, label: { tr: 'App Store (15.000+ oy)', en: 'App Store (15,000+ ratings)' } },
      { value: '3-8', label: { tr: 'Yaş grubu', en: 'Age group' } },
    ],
    contribution: {
      tr: [
        'Eğitici mini oyunların geliştirilmesi.',
        'Oyun performansının ve içerik (asset) yükleme sürelerinin iyileştirilmesi.',
        'Analitik olaylarının (event) uygulamaya eklenmesi.',
        'Arayüz etkileşimlerinin iyileştirilmesi.',
        'Android ve iOS sürümlerinin bakımı.',
      ],
      en: [
        'Developed educational mini-games.',
        'Improved gameplay performance and asset loading.',
        'Implemented analytics events.',
        'Improved UI interactions.',
        'Maintained the Android and iOS releases.',
      ],
    },
  },
  {
    slug: 'trt-kids-anaokulum',
    name: 'TRT Çocuk Anaokulum',
    category: { tr: 'Okul Öncesi Eğitim', en: 'Preschool Education' },
    summary: {
      tr: '4 yaş ve üzeri çocuklar için okula hazırlık uygulaması. Dil, matematik, duyu, sanat, müzik ve fiziksel oyun alanlarındaki etkinliklerle çocuğa gerçek bir anaokulu ortamı sunuyor.',
      en: 'A school-readiness app for kids aged 4 and up. Activities in language, math, sensory play, art, music and physical play give children a real kindergarten setting.',
    },
    platforms: ['iOS', 'Android'],
    tech: ['Unity', 'C#'],
    icon: '/images/projects/trt-kids-anaokulum/icon.png',
    screenshots: [
      '/images/projects/trt-kids-anaokulum/shot-1.webp',
      '/images/projects/trt-kids-anaokulum/shot-2.webp',
      '/images/projects/trt-kids-anaokulum/shot-3.webp',
    ],
    orientation: 'landscape',
    color: '#10b981',
    year: '2020',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.trtcocuk.anaokulum',
      appStore: 'https://apps.apple.com/tr/app/trt-%C3%A7ocuk-anaokulum/id1499329165',
    },
    metrics: [
      { value: '1M+', label: { tr: 'İndirme', en: 'Downloads' } },
      { value: '4+', label: { tr: 'Yaş grubu', en: 'Age group' } },
      { value: '6', label: { tr: 'Öğrenme alanı', en: 'Learning areas' } },
    ],
    contribution: {
      tr: [
        'Etkileşimli eğitim etkinliklerinin geliştirilmesi.',
        'Analitik ve olay (event) takibinin eklenmesi.',
        'Uygulama performansının iyileştirilmesi.',
        'Yeniden kullanılabilir arayüz sistemlerinin geliştirilmesi.',
        'Canlı ortamda çıkan sorunların çözümü.',
      ],
      en: [
        'Developed interactive educational activities.',
        'Implemented analytics and event tracking.',
        'Improved the app\'s performance.',
        'Improved the reusable UI systems.',
        'Fixed issues reported in production.',
      ],
    },
  },
  {
    slug: 'magicpags',
    name: 'Magicpags',
    category: { tr: 'Çocuklar İçin Okuma Uygulaması', en: 'Reading App for Kids' },
    summary: {
      tr: 'Mayadem\'in kendi ürünü olan, 3-9 yaş için reklamsız ve öğretmen onaylı bir okuma kütüphanesi. Uluslararası yayında; çoklu cihaz senkronizasyonu, çocuk profilleri ve ebeveyn paneli var.',
      en: 'Mayadem\'s own ad-free, teacher-approved reading library for kids aged 3-9. It is published internationally and has multi-device sync, child profiles and a parent dashboard.',
    },
    platforms: ['iOS', 'Android', 'ChromeOS'],
    tech: ['Unity', 'C#', 'Unity IAP', 'Firebase Analytics', 'Firebase Cloud Messaging', 'AppsFlyer', 'SSO'],
    icon: '/images/projects/magicpags/icon.png',
    screenshots: [
      '/images/projects/magicpags/shot-1.webp',
      '/images/projects/magicpags/shot-2.webp',
      '/images/projects/magicpags/shot-3.webp',
    ],
    orientation: 'portrait',
    color: '#8b5cf6',
    year: '2025',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.mayadem.magicpags',
      appStore: 'https://apps.apple.com/tr/app/reading-app-for-kids-magicpags/id6470273042',
    },
    metrics: [
      { value: '3', label: { tr: 'Platform', en: 'Platforms' } },
      { value: '5', label: { tr: 'Giriş yöntemi', en: 'Sign-in options' } },
      { value: '3-9', label: { tr: 'Yaş grubu', en: 'Age group' } },
    ],
    contribution: {
      tr: [
        'ChromeOS desteğinin geliştirilmesine liderlik.',
        'Unity IAP ile abonelik sisteminin entegrasyonu.',
        'Google, Apple, Facebook, ClassLink ve Clever ile tek oturum açma (SSO) entegrasyonu.',
        'Firebase Analytics, AppsFlyer ve Firebase Cloud Messaging entegrasyonları.',
        'Performans iyileştirmeleri; Android, iOS ve ChromeOS\'a özgü sorunların çözümü.',
      ],
      en: [
        'Led ChromeOS support.',
        'Integrated subscriptions with Unity IAP.',
        'Added sign-in (SSO) with Google, Apple, Facebook, ClassLink and Clever.',
        'Integrated Firebase Analytics, AppsFlyer and Firebase Cloud Messaging.',
        'Improved performance and fixed platform-specific issues on Android, iOS and ChromeOS.',
      ],
    },
  },
];

/** Bakımını yaptığın diğer uygulamalar. Proje bölümünün altında kısa liste olarak gösterilir. */
export const otherApps: string[] = [
  'TRT Çocuk Akıllı Tavşan', 'TRT Animasyon Stüdyosu', 'TRT Bilgi Adası', 'TRT Bulmaca Kulesi', 'TRT Canım Kardeşim',
  'TRT ÇizBul', 'TRT Ege ile Gaga', 'TRT Ege ile Gaga Bulmaca', 'TRT Ege ile Gaga Tangram', 'TRT Elif\'in Düşleri',
  'TRT Hayri Uzayda', 'TRT Hayvanları Keşfediyoruz', 'TRT İbi', 'TRT İbi Macera', 'TRT Kare', 'TRT Kare Havalimanında',
  'TRT Keloğlan', 'TRT Kolay Gelsin', 'TRT Köstebekgiller', 'TRT Kuzucuk', 'TRT Maysa ve Bulut', 'TRT Maysa ve Bulut Oba',
  'TRT Mutlu Oyuncak Dükkanı', 'TRT Çocuk Müzik Atölyesi', 'TRT Orman Doktoru', 'TRT Piksel Boyama',
  'TRT Rafadan Tayfa Mahalle', 'TRT Rafadan Tayfa Tornet', 'TRT Rüzgar Gülü', 'TRT Su Altı Kaşifi',
  'TRT Çocuk Sürpriz Kutusu', 'TRT Tel Ali', 'TRT Yapboz', 'TRT Yarışçı', 'TRT Zorlu Yarış',
];

// ---------------------------------------------------------------------------
// DENEYİM, EĞİTİM, SERTİFİKALAR
// ---------------------------------------------------------------------------

export const experience: ExperienceItem[] = [
  {
    type: 'work',
    title: { tr: 'Yazılım Geliştirici (Unity / iOS / Android)', en: 'Software Developer (Unity / iOS / Android)' },
    org: { tr: 'Mayadem — Dijital Eğitim ve Eğlence, İstanbul', en: 'Mayadem — Digital Education & Entertainment, Istanbul' },
    period: { tr: '2019 – 2025', en: '2019 – 2025' },
    description: {
      tr: 'TRT Çocuk uygulama serisi ve Magicpags üzerinde geliştirme. Toplamda 15 milyonun üzerinde indirilen 4 uygulamanın yayına alınması ve canlıda sürdürülmesi, ayrıca 35\'ten fazla uygulamanın bakımı.',
      en: 'Worked on the TRT Kids app series and Magicpags. Shipped and maintained 4 live apps with over 15 million combined downloads, and maintained 35+ additional apps.',
    },
    highlights: {
      tr: [
        'App Store Connect ve Google Play Console üzerinde sürümleme, kademeli dağıtım, mağaza inceleme retlerinin çözümü ve acil hotfix yayınları dahil uçtan uca yayın yönetimi.',
        'Yeni sürümlerin yayın öncesinde TestFlight dahili ve harici beta testleri ile Google Play test kanallarında doğrulanması.',
        'Canlı ortamda ve mağaza incelemesinde ortaya çıkan çökmelerin analizi ve giderilmesi; çökmesiz oturum oranının %98\'den %99,2\'ye yükseltilmesi (çökme oranında %60 azalma).',
        'iOS, Android ve ChromeOS\'ta render performansı ve bellek kullanımı optimizasyonu, platforma özgü sorunların çözümü.',
        'REST API, Firebase (Analytics, Authentication), AppsFlyer ve Google / Apple / Facebook ile giriş entegrasyonlarının geliştirilmesi.',
        'Çocuklara yönelik uygulamalarda COPPA ve mağaza politikalarına uyumun sağlanması; Agile/Scrum ekibinde stajyer geliştiricilere mentorluk.',
        'Etkileşimli kitap özellikleri, eğitici mini oyunlar ve okul öncesi eğitim etkinliklerinin geliştirilmesi.',
        'Magicpags için ChromeOS desteğinin geliştirilmesine liderlik.',
        'Unity IAP ile abonelik ve uygulama içi satın alma sistemlerinin entegrasyonu.',
        'ClassLink ve Clever gibi eğitim platformlarıyla tek oturum açma (SSO) entegrasyonları.',
        'Firebase Cloud Messaging ve Netmera ile bildirim entegrasyonları.',
        'Analitik olay (event) takibinin uygulamalara eklenmesi.',
        'Oyun performansının ve içerik (asset) yükleme sürelerinin iyileştirilmesi.',
        'Yeniden kullanılabilir arayüz sistemlerinin geliştirilmesi ve arayüz etkileşimlerinin iyileştirilmesi.',
        'Swagger ile belgelenmiş REST API\'lerin entegrasyonu ve JSON veri işleme.',
        'Test sürümlerinin Firebase App Distribution ile ekip içinde dağıtımı; uygulama imzalama ve sertifika yönetimi.',
        'Git (Bitbucket) ile sürüm kontrolü, Jira ile görev takibi ve CI/CD süreçleri.',
      ],
      en: [
        'Owned the full release cycle in App Store Connect and Google Play Console, including versioning, staged rollouts, resolving store review rejections and shipping urgent hotfixes.',
        'Validated new builds before release through TestFlight internal and external betas and Google Play testing tracks.',
        'Diagnosed and fixed crashes found in production and store review, raising crash-free sessions from 98% to 99.2% and cutting the crash rate by 60%.',
        'Optimized rendering performance and memory usage, and resolved platform-specific issues across iOS, Android and ChromeOS.',
        'Built integrations with REST APIs, Firebase (Analytics, Authentication), AppsFlyer and Google / Apple / Facebook sign-in.',
        'Ensured COPPA and store policy compliance for kid-directed apps, and mentored intern developers in an Agile/Scrum team.',
        'Developed interactive book features, educational mini-games and preschool learning activities.',
        'Led ChromeOS support for Magicpags.',
        'Integrated subscriptions and in-app purchases with Unity IAP.',
        'Built single sign-on (SSO) integrations with education platforms such as ClassLink and Clever.',
        'Integrated push notifications with Firebase Cloud Messaging and Netmera.',
        'Implemented analytics event tracking across apps.',
        'Improved gameplay performance and asset loading times.',
        'Built reusable UI systems and improved UI interactions.',
        'Integrated REST APIs documented with Swagger and handled JSON data.',
        'Distributed test builds to the team with Firebase App Distribution, and managed app signing and certificates.',
        'Used Git (Bitbucket) for version control, Jira for task tracking, and CI/CD pipelines.',
      ],
    },
    tech: ['Unity', 'C#', 'Firebase', 'AppsFlyer', 'Unity IAP', 'TestFlight', 'Agile/Scrum'],
  },
  {
    type: 'education',
    title: { tr: 'Bilgisayar Mühendisliği (Lisans)', en: 'B.Sc. Computer Engineering' },
    org: { tr: 'İstanbul Şehir Üniversitesi', en: 'Istanbul Şehir University' },
    period: { tr: '2014 – 2020', en: '2014 – 2020' },
    description: {
      tr: 'Tam burslu; eğitim dili İngilizce olan lisans programı.',
      en: 'Full scholarship; English-medium undergraduate program.',
    },
  },
];

// ---------------------------------------------------------------------------
// FREELANCE HİZMETLER
// TL fiyatlarını enflasyona göre 6 ayda bir gözden geçir.
// ---------------------------------------------------------------------------

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'mobile',
    icon: 'smartphone',
    title: { tr: 'Mobil Uygulama', en: 'Mobile Apps' },
    description: {
      tr: 'Projeye göre Unity, Flutter ya da React Native ile tek kod tabanından iOS, Android, Windows ve macOS uygulamaları; mağaza yayını dahil.',
      en: 'iOS, Android, Windows and macOS apps from a single codebase with Unity, Flutter or React Native, depending on the project. Store release included.',
    },
    tiers: [
      {
        name: { tr: 'Basit', en: 'Basic' },
        audience: { tr: 'Fikrini hızlıca mağazaya çıkarmak isteyenler için', en: 'For getting your idea into the stores quickly' },
        price: { tr: '60.000 TL\'den başlayan', en: 'From $3,000' },
        duration: { tr: '4–6 hafta', en: '4–6 weeks' },
        features: {
          tr: ['5–8 ekran', 'Metin, görsel ve video içerik', 'Analitik ve çökme takibi', 'App Store ve Google Play yayını'],
          en: ['5–8 screens', 'Text, image and video content', 'Analytics and crash monitoring', 'App Store and Google Play release'],
        },
      },
      {
        name: { tr: 'Orta', en: 'Standard' },
        audience: { tr: 'Üyelik ve gelir modeli olan uygulamalar için', en: 'For apps with user accounts and a revenue model' },
        price: { tr: '120.000 TL\'den başlayan', en: 'From $5,500' },
        duration: { tr: '6–10 hafta', en: '6–10 weeks' },
        features: {
          tr: ['Basit paketteki her şey', 'Üyelik ve Google / Apple ile giriş', 'REST API bağlantısı', 'Bildirimler', 'Abonelik ve uygulama içi satın alma'],
          en: ['Everything in Basic', 'Accounts and Google / Apple sign-in', 'REST API connection', 'Push notifications', 'Subscriptions and in-app purchases'],
        },
      },
      {
        name: { tr: 'Kapsamlı', en: 'Advanced' },
        audience: { tr: 'Okullar, kurumlar ve geniş kullanıcı kitleleri için', en: 'For schools, organizations and large user bases' },
        price: { tr: '220.000 TL\'den başlayan', en: 'From $10,000' },
        duration: { tr: '10–16 hafta', en: '10–16 weeks' },
        features: {
          tr: ['Orta paketteki her şey', 'Windows ve macOS desteği', 'Okul ve kurum girişi (SSO)', 'Ebeveyn veya yönetim paneli', 'Çevrimdışı içerik', 'Çocuk uygulamalarında COPPA uyumu'],
          en: ['Everything in Standard', 'Windows and macOS support', 'School and organization sign-in (SSO)', 'Parent or admin dashboard', 'Offline content', 'COPPA compliance for kids\' apps'],
        },
      },
    ],
  },
  {
    id: 'web',
    icon: 'globe',
    title: { tr: 'Web Sitesi', en: 'Websites' },
    description: {
      tr: 'Hızlı açılan, telefonda düzgün görünen ve Google\'da bulunabilen siteler. Bu site de örneklerden biri.',
      en: 'Fast sites that look right on phones and can be found on Google. This site is one example.',
    },
    tiers: [
      {
        name: { tr: 'Tanıtım sitesi', en: 'Landing site' },
        audience: { tr: 'İşini internette tanıtmak isteyen küçük işletmeler için', en: 'For small businesses that want to be found online' },
        price: { tr: '12.000 TL\'den başlayan', en: 'From $600' },
        duration: { tr: '1–2 hafta', en: '1–2 weeks' },
        features: {
          tr: ['1–5 sayfa', 'Türkçe ve İngilizce', 'İletişim formu', 'Temel SEO', 'Ücretsiz barındırma kurulumu'],
          en: ['1–5 pages', 'Two languages', 'Contact form', 'Basic SEO', 'Free hosting setup'],
        },
      },
      {
        name: { tr: 'Kurumsal site', en: 'Business site' },
        audience: { tr: 'Düzenli içerik paylaşan şirketler ve markalar için', en: 'For companies and brands that publish content regularly' },
        price: { tr: '25.000 TL\'den başlayan', en: 'From $1,400' },
        duration: { tr: '2–5 hafta', en: '2–5 weeks' },
        features: {
          tr: ['10+ sayfa', 'Blog veya içerik yönetimi', 'Çoklu dil desteği', 'Analitik'],
          en: ['10+ pages', 'Blog or content management', 'Multi-language support', 'Analytics'],
        },
      },
      {
        name: { tr: 'Web uygulaması', en: 'Web app' },
        audience: { tr: 'Kullanıcıların giriş yapıp işlem yaptığı projeler için', en: 'For projects where users sign in and get things done' },
        price: { tr: '70.000 TL\'den başlayan', en: 'From $3,500' },
        duration: { tr: '5–12 hafta', en: '5–12 weeks' },
        features: {
          tr: ['Üyelik ve giriş', 'Kullanıcı paneli', 'Veritabanı (Supabase)', 'Dosya yükleme'],
          en: ['Accounts and sign-in', 'User dashboard', 'Database (Supabase)', 'File uploads'],
        },
      },
    ],
  },
  {
    id: 'game',
    icon: 'gamepad',
    title: { tr: 'Oyun', en: 'Games' },
    description: {
      tr: 'Unity ile iOS ve Android oyunları. Eğitici ve çocuklara yönelik oyunlarda 6 yıllık deneyim.',
      en: 'iOS and Android games built with Unity, backed by 6 years of experience in educational and kids\' games.',
    },
    tiers: [
      {
        name: { tr: 'Mini oyun', en: 'Casual game' },
        audience: { tr: 'Basit ve eğlenceli bir oyunla başlamak isteyenler için', en: 'For starting with a simple, fun game' },
        price: { tr: '40.000 TL\'den başlayan', en: 'From $2,000' },
        duration: { tr: '3–6 hafta', en: '3–6 weeks' },
        features: {
          tr: ['Tek oyun mekaniği', '10–20 seviye', 'Analitik', 'Mağaza yayını'],
          en: ['One core mechanic', '10–20 levels', 'Analytics', 'Store release'],
        },
      },
      {
        name: { tr: 'Eğitici / çocuk oyunu', en: 'Educational / kids\' game' },
        audience: { tr: 'Çocuklara yönelik eğitim içeriği üretenler için', en: 'For creators of educational content for children' },
        price: { tr: '90.000 TL\'den başlayan', en: 'From $4,500' },
        duration: { tr: '6–12 hafta', en: '6–12 weeks' },
        features: {
          tr: ['Birden fazla mini oyun', 'İlerleme kaydı', 'Ses ve animasyon entegrasyonu', 'COPPA uyumu'],
          en: ['Multiple mini-games', 'Progress saving', 'Sound and animation integration', 'COPPA compliance'],
        },
      },
      {
        name: { tr: 'Kapsamlı oyun', en: 'Full game' },
        audience: { tr: 'Uzun soluklu ve gelir getiren oyunlar için', en: 'For long-term games that generate revenue' },
        price: { tr: '220.000 TL\'den başlayan', en: 'From $10,000' },
        duration: { tr: '3–6 ay', en: '3–6 months' },
        features: {
          tr: ['Çok sayıda seviye', 'Abonelik ve uygulama içi satın alma', 'Ebeveyn paneli', 'Yeni içerik eklenebilen yapı'],
          en: ['Many levels', 'Subscriptions and in-app purchases', 'Parent dashboard', 'Built for adding new content'],
        },
      },
    ],
  },
];

export const extraServices: Service[] = [
  {
    icon: 'plus',
    title: { tr: 'Entegrasyon ve Yeni Özellik', en: 'Integrations & New Features' },
    description: {
      tr: 'Elinizde çalışan bir Unity uygulaması varsa abonelik, giriş, bildirim, analitik ya da API bağlantısı ekleyebilirim.',
      en: 'If you already have a working Unity app, I can add subscriptions, sign-in, push notifications, analytics or API connections.',
    },
    priceFrom: { tr: 'Saatlik 1.250 TL', en: '$45 / hour' },
    duration: { tr: 'İşe göre değişir', en: 'Depends on the work' },
    features: {
      tr: ['Unity IAP ile abonelik ve satın alma', 'Google, Apple, Facebook, ClassLink, Clever ile giriş', 'Firebase, AppsFlyer, Netmera', 'REST API bağlantısı'],
      en: ['Subscriptions and purchases with Unity IAP', 'Google, Apple, Facebook, ClassLink, Clever sign-in', 'Firebase, AppsFlyer, Netmera', 'REST API connections'],
    },
  },
  {
    icon: 'store',
    title: { tr: 'Mağaza Yayını', en: 'Store Release' },
    description: {
      tr: 'Uygulamanız hazır ama mağazaya çıkaramıyorsanız ya da sürekli red alıyorsanız, App Store ve Google Play sürecini sizin için yürütürüm.',
      en: 'If your app is ready but you cannot get it into the stores, or it keeps getting rejected, I can handle the App Store and Google Play process for you.',
    },
    priceFrom: { tr: '10.000 TL\'den başlayan', en: 'From $450' },
    duration: { tr: '3–7 gün', en: '3–7 days' },
    features: {
      tr: ['Hesap, sertifika ve imzalama kurulumu', 'TestFlight ve kapalı test', 'Çocuk kategorisi kuralları', 'Red gerekçesinin çözümü'],
      en: ['Account, certificate and signing setup', 'TestFlight and closed testing', 'Kids category rules', 'Fixing rejection reasons'],
    },
  },
  {
    icon: 'wrench',
    title: { tr: 'Bakım ve Çökme Düzeltme', en: 'Maintenance & Crash Fixing' },
    description: {
      tr: 'Canlıdaki uygulamanız çöküyor, yavaşlıyor ya da yeni iOS ve Android sürümlerinde sorun çıkarıyorsa aylık olarak ilgilenirim.',
      en: 'If your live app crashes, slows down or breaks on new iOS and Android versions, I can look after it every month.',
    },
    priceFrom: { tr: 'Aylık 10.000 TL', en: '$500 / month' },
    duration: { tr: 'Aylık', en: 'Monthly' },
    features: {
      tr: ['Ayda 10 saate kadar çalışma (fazlası saatlik ücretle)', 'Çökme analizi ve hotfix', 'Bellek ve performans iyileştirme', 'SDK ve Unity sürüm güncellemeleri'],
      en: ['Up to 10 hours per month (extra hours billed hourly)', 'Crash analysis and hotfixes', 'Memory and performance improvements', 'SDK and Unity version updates'],
    },
  },
];

// ---------------------------------------------------------------------------
// ÖZEL TEKLİF SİHİRBAZI
// Her iç dizi bir adımdır; son adıma ayrıca açıklama kutusu eklenir.
// ---------------------------------------------------------------------------

export const quoteWizard: QuoteQuestion[][] = [
  [
    {
      id: 'type',
      label: { tr: 'Ne yaptırmak istiyorsunuz?', en: 'What would you like to build?' },
      summary: { tr: 'Proje türü', en: 'Project type' },
      required: true,
      options: {
        tr: ['Mobil uygulama', 'Web sitesi', 'Oyun', 'Mevcut uygulamama ekleme', 'Diğer'],
        en: ['Mobile app', 'Website', 'Game', 'Adding to my existing app', 'Other'],
      },
    },
  ],
  [
    {
      id: 'platforms',
      label: { tr: 'Hangi platformlarda olmalı?', en: 'Which platforms do you need?' },
      summary: { tr: 'Platformlar', en: 'Platforms' },
      multiple: true,
      options: {
        tr: ['iOS', 'Android', 'Windows', 'macOS', 'Web', 'Henüz bilmiyorum'],
        en: ['iOS', 'Android', 'Windows', 'macOS', 'Web', 'Not sure yet'],
      },
    },
  ],
  [
    {
      id: 'features',
      label: { tr: 'Hangi özellikler gerekiyor?', en: 'Which features do you need?' },
      summary: { tr: 'Özellikler', en: 'Features' },
      multiple: true,
      options: {
        tr: ['Üyelik ve giriş', 'Abonelik veya ödeme', 'Bildirimler', 'Yönetim paneli', 'Çoklu dil', 'Çevrimdışı içerik', 'API veya entegrasyon'],
        en: ['Accounts and sign-in', 'Subscriptions or payments', 'Push notifications', 'Admin dashboard', 'Multiple languages', 'Offline content', 'API or integrations'],
      },
    },
  ],
  [
    {
      id: 'design',
      label: { tr: 'Tasarımınız hazır mı?', en: 'Is your design ready?' },
      summary: { tr: 'Tasarım', en: 'Design' },
      required: true,
      options: {
        tr: ['Hazır', 'Kısmen hazır', 'Hazır değil'],
        en: ['Ready', 'Partly ready', 'Not ready'],
      },
    },
  ],
  [
    {
      id: 'timeline',
      label: { tr: 'Ne zamana yetişmesi gerekiyor?', en: 'When do you need it?' },
      summary: { tr: 'Zaman', en: 'Timeline' },
      options: {
        tr: ['1 ay içinde', '1–3 ay', 'Esnek'],
        en: ['Within a month', '1–3 months', 'Flexible'],
      },
    },
    {
      id: 'budget',
      label: { tr: 'Tahmini bütçeniz nedir?', en: 'What is your estimated budget?' },
      summary: { tr: 'Bütçe', en: 'Budget' },
      options: {
        tr: ['25.000 TL altı', '25.000 – 75.000 TL', '75.000 – 150.000 TL', '150.000 – 300.000 TL', '300.000 TL üzeri', 'Henüz bilmiyorum'],
        en: ['Under $1,000', '$1,000 – $3,000', '$3,000 – $7,000', '$7,000 – $15,000', 'Over $15,000', 'Not sure yet'],
      },
    },
  ],
];

// ---------------------------------------------------------------------------
// ÇALIŞMA SÜRECİ
// ---------------------------------------------------------------------------

export const workProcess: ProcessStep[] = [
  {
    title: { tr: 'Tanışma', en: 'Intro call' },
    description: {
      tr: 'Fikrinizi ücretsiz bir görüşmede konuşuruz. Ne yapmak istediğinizi ve kimin için yaptığınızı anlamaya çalışırım.',
      en: 'We talk about your idea in a free call. I try to understand what you want to build and who it is for.',
    },
  },
  {
    title: { tr: 'Teklif', en: 'Proposal' },
    description: {
      tr: 'Özellik listesini, süreyi ve fiyatı yazılı olarak gönderirim. Siz onay vermeden işe başlamam.',
      en: 'I send you the feature list, timeline and price in writing. I do not start until you approve it.',
    },
  },
  {
    title: { tr: 'Geliştirme', en: 'Development' },
    description: {
      tr: 'Her hafta deneyebileceğiniz bir test sürümü ya da önizleme bağlantısı gönderirim.',
      en: 'Every week I send you a test build or a preview link you can try.',
    },
  },
  {
    title: { tr: 'Yayın ve sonrası', en: 'Release and after' },
    description: {
      tr: 'Uygulamayı kendi mağaza hesaplarınızdan, web sitesini kendi alan adınızda yayına alırız. Yayından sonraki 30 gün içinde çıkan hataları ücretsiz düzeltirim.',
      en: 'We publish apps from your own store accounts and websites on your own domain. I fix any bugs that show up in the first 30 days for free.',
    },
  },
];

// ---------------------------------------------------------------------------
// MÜŞTERİ SSS
// ---------------------------------------------------------------------------

export const faq: FaqItem[] = [
  {
    q: { tr: 'Fiyatı nasıl belirliyorsunuz?', en: 'How do you price a project?' },
    a: {
      tr: 'Paketlerde belirtilen tutarlar başlangıç fiyatlarıdır. Kapsamı net olan işlerde sabit fiyat, süreç içinde şekillenecek işlerde ise saatlik ücretlendirme uygulanır. Ön görüşmenin ardından her özelliğin maliyetini gösteren yazılı bir teklif iletilir.',
      en: 'The package prices are starting prices. For well-defined work I give a fixed price; if the work will take shape as we go, I bill hourly. After our call I send a written proposal that shows what each feature costs.',
    },
  },
  {
    q: { tr: 'Ödeme nasıl yapılıyor?', en: 'How does payment work?' },
    a: {
      tr: 'Ödemeler genellikle üç aşamada alınır: %30 proje başlangıcında, %40 çalışan test sürümünün tesliminde, kalan %30 ise proje yayına alındıktan sonra. Büyük ölçekli projelerde ödeme planı daha fazla aşamaya bölünebilir.',
      en: 'Usually 30% upfront, 40% when you get a working test version, and the last 30% after the project goes live. For bigger projects we can split it into more parts.',
    },
  },
  {
    q: { tr: 'Benim hazırlamam gereken bir şey var mı?', en: 'Do I need to prepare anything?' },
    a: {
      tr: 'Uygulama ve oyun projeleri için bir Apple Developer hesabı (yıllık 99 USD) ve bir Google Play geliştirici hesabı (tek seferlik 25 USD) gereklidir; hesapların açılması sürecinde destek sağlanır. Web sitesi projeleri için yalnızca bir alan adı yeterlidir. Bunların dışında logo, metinler ve varsa mevcut tasarımlar talep edilir.',
      en: 'For apps and games you need an Apple Developer account ($99 a year) and a Google Play developer account ($25 one-time), and I can help you set them up. For a website, you only need a domain name. Other than that, your logo, your texts and any designs you have are enough.',
    },
  },
  {
    q: { tr: 'Daha önce çocuk uygulaması geliştirdiniz mi?', en: 'Have you built apps for kids before?' },
    a: {
      tr: 'Evet. Mayadem bünyesinde üzerinde çalışılan uygulamaların tamamı çocuklara yönelikti; TRT Çocuk serisi de bu uygulamalar arasında yer almaktadır. COPPA ve uygulama mağazalarının çocuk uygulamalarına ilişkin kuralları konusunda kapsamlı deneyim bulunmaktadır.',
      en: 'Yes. Every app I worked on at Mayadem was made for children, including the TRT Kids series. I know COPPA and the rules the stores set for children\'s apps.',
    },
  },
  {
    q: { tr: 'Bir proje ne kadar sürede tamamlanıyor?', en: 'How long does a project take?' },
    a: {
      tr: 'Süre, seçilen pakete göre değişir: tanıtım siteleri 1–2 haftada, mobil uygulama ve oyunların ilk sürümü ise genellikle 4–16 haftada tamamlanır. Süreyi en çok etkileyen etkenler özellik sayısı, içerik miktarı ve tasarımların hazır olup olmamasıdır.',
      en: 'It depends on the package: a landing site takes 1–2 weeks, and the first version of an app or game usually takes 4–16 weeks. The number of features, the amount of content and whether the designs are ready affect it the most.',
    },
  },
  {
    q: { tr: 'Tasarım ve grafikler fiyata dahil mi?', en: 'Are design and graphics included in the price?' },
    a: {
      tr: 'Hayır, fiyatlar yalnızca yazılım geliştirme hizmetini kapsar. Arayüz tasarımı, çizimler ve sesler hazırsa bunlar kullanılır; hazır değilse lisanslı hazır içeriklerle ilerlenebilir.',
      en: 'No, the prices cover development. If your UI design, artwork and sounds are ready, I work with them. If not, we can use licensed ready-made assets.',
    },
  },
  {
    q: { tr: 'Kaynak kodun sahibi kim oluyor?', en: 'Who owns the source code?' },
    a: {
      tr: 'Ödemenin tamamlanmasıyla birlikte kaynak kod ve tüm hakları size devredilir. Kod, size ait Git deposuna teslim edilir. Talep edilmesi hâlinde işe başlamadan önce sözleşme ve gizlilik anlaşması (NDA) imzalanabilir.',
      en: 'Once payment is complete, the code and all rights are yours. I deliver it to your own Git repository. If you like, we can also sign a contract and an NDA before we start.',
    },
  },
];

// ---------------------------------------------------------------------------
// REFERANSLAR
// Boş bırakılırsa bölüm gizlenir. Eski yöneticilerinden / müşterilerinden izin alarak ekle:
// { quote: { tr: '...', en: '...' }, name: 'Ad Soyad', role: { tr: 'Unvan, Şirket', en: 'Title, Company' } }
// ---------------------------------------------------------------------------

export const testimonials: Testimonial[] = [];
