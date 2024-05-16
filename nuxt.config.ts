// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  plugins: [
    { src: '~/plugins/useBootstrap.ts', mode: 'client' },
  ],
  modules: ["nuxt-bootstrap-icons", 'nuxt-yandex-metrika'],
  yandexMetrika: {
    id: process.env.NUXT_YANDEX_METRICA_ID,
  }
})
