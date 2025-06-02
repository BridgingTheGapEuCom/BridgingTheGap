// https://nuxt.com/docs/api/configuration/nuxt-config
import { randomBytes } from 'crypto'

function generateNonce(): string {
  return randomBytes(16).toString('base64')
}

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

  security: {
    nonce: true, // Enables HTML nonce support in SSR mode
    ssg: {
      meta: true, // Enables CSP as a meta tag in SSG mode
      hashScripts: false, // Enables CSP hash support for scripts in SSG mode
      hashStyles: false, // Disables CSP hash support for styles in SSG mode (recommended)
      exportToPresets: true // Export security headers to Nitro presets
    },
    sri: true,
    headers: {
      contentSecurityPolicy: {
        'script-src': [
          "'self'",
          "'strict-dynamic'", // Modify with your custom CSP sources
          "'nonce-{{nonce}}'" // Enables CSP nonce support for scripts in SSR mode, supported by almost any browser (level 2)
        ],
        'script-src-attr': [
          "'unsafe-inline'"
        ]
      },
    },
  },

  hooks: {
    'nitro:config': (nitroConfig) => {
      nitroConfig.esbuild = nitroConfig.esbuild || {}
      nitroConfig.esbuild.define = nitroConfig.esbuild.define || {}
      nitroConfig.esbuild.define.nonce = () => `"${generateNonce()}"`
    },
  },

  robots: {
    blockNonSeoBots: true
  },

  site: {
    url: 'https://bridgingthegap.eu.com',
    name: 'Bridging The Gap'
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

  modules: [
    '@nuxt/eslint',
    'nuxt-security',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-seo-utils',
    'nuxt-mongoose'
  ]
})
