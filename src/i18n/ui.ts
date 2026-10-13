import { getRelativeLocaleUrl } from 'astro:i18n';
import type { L, Lang } from '../data/profile';

export const languages: Record<Lang, string> = {
  tr: 'Türkçe',
  en: 'English',
};

export const defaultLang: Lang = 'tr';

export const ui = {
  tr: {
    'meta.description': 'Projeler, deneyim ve iletişim bilgileri.',
    'a11y.skip': 'İçeriğe geç',
    'nav.about': 'Hakkımda',
    'nav.skills': 'Teknolojiler',
    'nav.projects': 'Projeler',
    'nav.experience': 'Deneyim',
    'nav.freelance': 'Freelance',
    'nav.contact': 'İletişim',
    'nav.menu': 'Menüyü aç/kapat',
    'theme.toggle': 'Temayı değiştir',
    'lang.switch': 'Dili değiştir',

    'hero.hello': 'Merhaba, ben',
    'hero.cv': 'CV İndir',
    'hero.contact': 'İletişime geç',
    'hero.status': 'Yeni bir pozisyona açığım',

    'about.title': 'Hakkımda',
    'about.languages': 'Diller',
    'about.freelanceNote': 'Freelance bir proje için mi geldiniz?',
    'about.freelanceLink': 'Freelance sayfama göz atın',

    'skills.title': 'Teknolojiler',
    'skills.subtitle': 'Profesyonel olarak kullandığım ve şu sıralar öğrendiğim teknolojiler.',

    'projects.title': 'Projeler',
    'projects.subtitle': 'Mayadem\'de çalıştığım uygulamalardan dördü. Hepsi App Store ve Google Play\'de yayında.',
    'projects.otherApps': 'Bakımını yaptığım diğer uygulamalar',
    'projects.caseStudy': 'Proje detayları',
    'projects.appStore': 'App Store',
    'projects.googlePlay': 'Google Play',
    'projects.github': 'GitHub',
    'projects.website': 'Web sitesi',

    'case.back': 'Tüm projeler',
    'case.contribution': 'Projedeki katkılarım',
    'case.results': 'Rakamlarla',
    'case.tech': 'Kullanılan teknolojiler',
    'case.platforms': 'Platformlar',
    'case.year': 'Mağazaya çıkışı',
    'case.cta': 'Benzer bir uygulama mı düşünüyorsunuz?',
    'case.ctaButton': 'Benimle iletişime geçin',
    'case.next': 'Sonraki proje',

    'experience.title': 'Deneyim ve Eğitim',
    'experience.work': 'İş',
    'experience.education': 'Eğitim',
    'experience.certificate': 'Sertifika',
    'experience.showMore': 'Devamını göster',
    'experience.showLess': 'Daha az göster',

    'freelance.title': 'Freelance çalışma',
    'freelance.intro': 'Mayadem\'de 6 yıl boyunca milyonlarca kez indirilen çocuk uygulamaları geliştirdim. Şimdi bu deneyimle mobil uygulama, web sitesi ve Unity ile oyun projelerinde freelance çalışıyorum.',
    'freelance.proof': 'Üzerinde çalıştığım uygulamalar',

    'services.title': 'Neler yapabilirim?',
    'services.subtitle': 'Fiyatlar projenin kapsamına göre değişen aralıklardır; kesin fiyatı projeyi konuştuktan sonra yazılı olarak paylaşıyorum.',
    'services.tabs': 'Hizmet türü',
    'services.duration': 'Süre',
    'services.cta': 'Teklif iste',
    'services.note': 'Fiyatlara grafik, ses ve arayüz tasarımı dahil değildir; hazır tasarımınızla ya da lisanslı hazır içeriklerle çalışırım. App Store ve Google Play hesap ücretleri size aittir.',
    'services.extras': 'Ek hizmetler',

    'process.title': 'Nasıl çalışıyoruz?',

    'faq.title': 'Sık sorulanlar',

    'testimonials.title': 'Referanslar',
    'testimonials.subtitle': 'Birlikte çalıştığım kişilerin yorumları.',

    'contact.title': 'İletişim',
    'contact.subtitle': 'Bir iş teklifiniz ya da proje fikriniz varsa yazabilirsiniz; en kısa sürede dönüş yaparım.',
    'contact.name': 'Adınız',
    'contact.email': 'E-posta adresiniz',
    'contact.type': 'Konu',
    'contact.type.job': 'İş teklifi (tam zamanlı)',
    'contact.type.freelance': 'Freelance proje',
    'contact.type.other': 'Diğer',
    'contact.budget': 'Tahmini bütçe (isteğe bağlı)',
    'contact.budgetShort': 'Bütçe',
    'contact.message': 'Mesajınız',
    'contact.messagePlaceholder': 'Projenizden veya pozisyondan kısaca bahsedin...',
    'contact.send': 'Gönder',
    'contact.sending': 'Gönderiliyor...',
    'contact.success': 'Teşekkürler! Mesajınız iletildi, en kısa sürede dönüş yapacağım.',
    'contact.error': 'Bir sorun oluştu. Lütfen doğrudan e-posta gönderin.',
    'contact.emailMe': 'E-posta gönder',
    'contact.book': 'Ücretsiz görüşme planla',
    'contact.or': 'veya doğrudan ulaşın',
    'contact.location': 'Konum',

    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.built': 'Astro ve Tailwind CSS ile geliştirildi.',
  },
  en: {
    'meta.description': 'Projects, experience and contact details.',
    'a11y.skip': 'Skip to content',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.freelance': 'Freelance',
    'nav.contact': 'Contact',
    'nav.menu': 'Toggle menu',
    'theme.toggle': 'Toggle theme',
    'lang.switch': 'Switch language',

    'hero.hello': 'Hi, I\'m',
    'hero.cv': 'Download CV',
    'hero.contact': 'Get in touch',
    'hero.status': 'Open to a new role',

    'about.title': 'About me',
    'about.languages': 'Languages',
    'about.freelanceNote': 'Here for a freelance project?',
    'about.freelanceLink': 'See my freelance page',

    'skills.title': 'Skills',
    'skills.subtitle': 'Technologies I have used professionally and those I am currently learning.',

    'projects.title': 'Projects',
    'projects.subtitle': 'Four of the apps I worked on at Mayadem. All of them are live on the App Store and Google Play.',
    'projects.otherApps': 'Other apps I maintained',
    'projects.caseStudy': 'Project details',
    'projects.appStore': 'App Store',
    'projects.googlePlay': 'Google Play',
    'projects.github': 'GitHub',
    'projects.website': 'Website',

    'case.back': 'All projects',
    'case.contribution': 'My contributions',
    'case.results': 'In numbers',
    'case.tech': 'Tech stack',
    'case.platforms': 'Platforms',
    'case.year': 'Released',
    'case.cta': 'Thinking about a similar app?',
    'case.ctaButton': 'Get in touch',
    'case.next': 'Next project',

    'experience.title': 'Experience & Education',
    'experience.work': 'Work',
    'experience.education': 'Education',
    'experience.certificate': 'Certificate',
    'experience.showMore': 'Show more',
    'experience.showLess': 'Show less',

    'freelance.title': 'Freelance work',
    'freelance.intro': 'For 6 years at Mayadem I built kids\' apps that were downloaded millions of times. Now I bring that experience to freelance projects: mobile apps, websites and games built with Unity.',
    'freelance.proof': 'Apps I have worked on',

    'services.title': 'What I can do for you',
    'services.subtitle': 'Prices are ranges that depend on the project scope; I send an exact quote in writing once we have discussed the project.',
    'services.tabs': 'Service type',
    'services.duration': 'Duration',
    'services.cta': 'Request a quote',
    'services.note': 'Prices do not include graphics, sound or UI design; I work with your existing designs or licensed ready-made assets. App Store and Google Play account fees are paid by you.',
    'services.extras': 'Additional services',

    'process.title': 'How we work together',

    'faq.title': 'Common questions',

    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'What people I have worked with say.',

    'contact.title': 'Contact',
    'contact.subtitle': 'If you have a job offer or a project idea, send me a message and I will get back to you soon.',
    'contact.name': 'Your name',
    'contact.email': 'Your email',
    'contact.type': 'Subject',
    'contact.type.job': 'Job offer (full-time)',
    'contact.type.freelance': 'Freelance project',
    'contact.type.other': 'Other',
    'contact.budget': 'Estimated budget (optional)',
    'contact.budgetShort': 'Budget',
    'contact.message': 'Your message',
    'contact.messagePlaceholder': 'Tell me briefly about your project or the role...',
    'contact.send': 'Send',
    'contact.sending': 'Sending...',
    'contact.success': 'Thank you! Your message has been sent. I will get back to you soon.',
    'contact.error': 'Something went wrong. Please email me directly.',
    'contact.emailMe': 'Send an email',
    'contact.book': 'Book a free call',
    'contact.or': 'or reach out directly',
    'contact.location': 'Location',

    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with Astro and Tailwind CSS.',
  },
} as const;

export type UiKey = keyof (typeof ui)['tr'];

export function getLangFromUrl(url: URL): Lang {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const path = url.pathname.slice(base.length);
  const [, first] = path.split('/');
  return first in ui ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** { tr, en } nesnesinden aktif dildeki değeri döndürür */
export function pick<T>(value: L<T>, lang: Lang): T {
  return value[lang] ?? value[defaultLang];
}

/** Tek bir metin ya da dile göre değişen { tr, en } değeri için aktif dildeki metni döndürür */
export function localize(value: string | L<string>, lang: Lang): string {
  return typeof value === 'string' ? value : pick(value, lang);
}

/** Dil önekli ve base yolu eklenmiş sayfa adresi üretir */
export function localePath(lang: Lang, path = ''): string {
  return getRelativeLocaleUrl(lang, path.replace(/^\//, ''));
}

/** public/ klasöründeki bir dosyanın base yolu eklenmiş adresi */
export function asset(path: string): string {
  if (!path || /^https?:\/\//.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
