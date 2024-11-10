// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true
  },

  ssr: true,
  compatibilityDate: '2024-04-03',
  css: ['~/assets/style/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  router: {
    options: {
      strict: false
    }
  },

  experimental: {
    defaults: {
      nuxtLink: {
        activeClass: 'nuxt-link-active',
        trailingSlash: 'remove'
      }
    }
  },

  app: {
    pageTransition: { name: 'fade', mode: 'out-in' }
  },

  modules: ['@nuxt/eslint']
})
