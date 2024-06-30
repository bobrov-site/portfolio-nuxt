// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  plugins: [
    { src: '~/plugins/useBootstrap.ts', mode: 'client' },
  ],
  modules: ["nuxt-bootstrap-icons", "yandex-metrika-module-nuxt3", '@nuxtjs/seo'],
  site: {
    url: 'https://bobrov-site.vercel.app',
    name: 'Бобров Даниил | Портфолио | Frontend-developer | Vue | Nuxt | React | JS | TS | GIT',
    description: 'Занимаюсь разработкой сайтов 3+ года. Мною были разработаны разного типа: лендинги, многостраничные сайты и интернет магазины разной коммерческой направленности. В моей базе более 30 положительных отзывов от клиентов предпринимателей в малом и среднем бизнесе. Так же занимался разработкой сайтов под ключ (дизайн + посадка на Wordpress). На данный момент занимаюсь разработкой приложений на Vue.js',
    defaultLocale: 'ru', // not needed if you have @nuxtjs/i18n installed
  },
  yandexMetrika: {
    id: '97306384',
  },
  future: {
    compatibilityVersion: 4,
  },
})
