// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    supabaseUrl: '',
    supabaseKey: ''
  },
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  plugins: [
    { src: '~/plugins/useBootstrap.ts', mode: 'client' }
  ],
  modules: ["nuxt-bootstrap-icons"]
})
