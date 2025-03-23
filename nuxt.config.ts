// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/test-utils", "@nuxt/test-utils/module"],
  css: ["@/assets/styles/tailwind.css"],
  vite: {
    plugins: [...[tailwindcss()]],
  },
});
