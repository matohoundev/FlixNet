// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["@/assets/main.scss"],
});
