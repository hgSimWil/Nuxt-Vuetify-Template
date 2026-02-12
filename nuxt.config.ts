// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', 'nuxt-vuefire'],
  vuefire: {
    config: {
      apiKey: "AIzaSyAK8AJmJPmUrHjPvKl486i99SE_Wfk0R_4",
      authDomain: "temp-projekt-220s.firebaseapp.com",
      databaseURL: "https://temp-projekt-220s-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "temp-projekt-220s",
      storageBucket: "temp-projekt-220s.firebasestorage.app",
      messagingSenderId: "401787728103",
      appId: "1:401787728103:web:3f9f7614f1dae5d1c13242"
    },
  },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
      },
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt Vuetify Template',
    },
  },
})