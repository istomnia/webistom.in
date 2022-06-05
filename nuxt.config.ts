import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  pages: true,
  content: {
    navigation: false,
  },
  modules: ['@nuxt/content']
})
