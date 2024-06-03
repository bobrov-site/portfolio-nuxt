// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  plugins: [
    { src: '~/plugins/useBootstrap.ts', mode: 'client' },
  ],
  modules: ["nuxt-bootstrap-icons", "yandex-metrika-module-nuxt3"],
  yandexMetrika: {
    id: '97306384',
  }
})
