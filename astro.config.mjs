// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// GitHub Pages ayarları:
// - Depo adı "kullaniciadi.github.io" ise: SITE = "https://kullaniciadi.github.io", BASE = "/"
// - Başka bir depo adı ise (ör. "portfoy"): SITE = "https://kullaniciadi.github.io", BASE = "/portfoy"
// GitHub Actions bu değerleri otomatik olarak ortam değişkenleriyle verir.
const SITE = process.env.SITE_URL ?? 'https://kullaniciadi.github.io';
const BASE = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'tr',
        locales: { tr: 'tr-TR', en: 'en-US' },
      },
    }),
  ],
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
