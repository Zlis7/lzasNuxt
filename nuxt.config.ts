export default defineNuxtConfig({
  compatibilityDate: "2025-08-27",
  modules: ["nuxt-vuefire"],
  ssr: false,
  vuefire: {
    config: {
      apiKey: process.env.VITE_FIREBASE_API_KEY,
      authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.VITE_FIREBASE_DATABASE_URL,
      projectId: process.env.VITE_FIREBASE_PROJECT_ID,
      appId: process.env.VITE_FIREBASE_APP_ID,
    },
  },
});
