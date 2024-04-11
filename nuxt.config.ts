// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/content'],
  googleFonts: {
    families: { 
      'DM Sans': [400, 500, 600, 900],
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
    }
  }
})
