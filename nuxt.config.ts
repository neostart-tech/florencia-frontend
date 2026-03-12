// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/test-utils",
    "@pinia/nuxt",
    "nuxt-toast",
  ],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  runtimeConfig: {
    public: {
      apiBase: "http://localhost:8000/api",
      storageBase: "http://localhost:8000/storage",
    },
  },

  // vite: {
  //   server: {
  //     allowedHosts: true, // Plus simple pour le moment
  //     hmr: {
  //       // Utilise le protocole de l'URL actuelle
  //       protocol: "wss", // 'wss' pour HTTPS, 'ws' pour HTTP
  //       // Détecte automatiquement l'hôte
  //       host: "0.0.0.0",
  //       clientPort: 443, // Port pour le client mobile
  //       port: 443, // Port pour le serveur HMR
  //       // Timeout plus long pour le mobile
  //       timeout: 60000,
  //     },
  //     // Écoute sur toutes les interfaces
  //     host: "0.0.0.0",
  //     port: 3000,
  //     // Permet les requêtes CORS
  //     cors: true,
  //   },
  // },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
