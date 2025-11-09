// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
    preset: 'node-server'
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

  hooks: {
    'nitro:config': (nitroConfig) => {
      nitroConfig.esbuild = nitroConfig.esbuild || {}
      nitroConfig.esbuild.define = nitroConfig.esbuild.define || {}
      nitroConfig.esbuild.define.nonce = () => `"${generateNonce()}"`
    }
  },

  security: {
    strict: true,
    headers: {
      contentSecurityPolicy: {
        'img-src': [
          "'self'",
          'data:',
          'https://i.ytimg.com',
          'https://www.youtube.com',
          'www.youtube-nocookie.com'
        ],
        'script-src': [
          "'self'",
          "'unsafe-inline'",
          '*.youtube.com',
          'https://www.googletagmanager.com',
          'https://www.google.com',
          'https://www.gstatic.com',
          'www.youtube-nocookie.com'
        ],
        'style-src': ["'self'", 'https:', "'unsafe-inline'"],
        'frame-src': [
          "'self'",
          'https://www.youtube.com',
          'https://www.youtube-nocookie.com',
          'https://www.google.com'
        ],
        'frame-ancestors': ["'self'", 'https://www.youtube.com']
      },
      crossOriginEmbedderPolicy: 'unsafe-none',
      crossOriginOpenerPolicy: 'same-origin',
      permissionsPolicy: {
        camera: [],
        'display-capture': [],
        fullscreen: ['self', '"https://www.youtube.com"', '"https://www.youtube-nocookie.com"'],
        autoplay: ['self', '"https://www.youtube.com"', '"https://www.youtube-nocookie.com"'],
        'encrypted-media': [
          'self',
          '"https://www.youtube.com"',
          '"https://www.youtube-nocookie.com"'
        ],
        accelerometer: ['self', '"https://www.youtube.com"', '"https://www.youtube-nocookie.com"'],
        gyroscope: ['self', '"https://www.youtube.com"', '"https://www.youtube-nocookie.com"'],
        'picture-in-picture': [
          'self',
          '"https://www.youtube.com"',
          '"https://www.youtube-nocookie.com"'
        ],
        geolocation: [],
        microphone: []
      }
    }
  },

  runtimeConfig: {
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
    USER_TO_IMPERSONATE: process.env.USER_TO_IMPERSONATE,

    public: {
      RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY // This will be exposed to the client
    }
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

  plugins: [
    { src: '~/plugins/recaptcha.client.ts', mode: 'client' } // Ensure .ts extension and mode: 'client'
  ],

  modules: [
    '@nuxt/eslint',
    'nuxt-security',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-seo-utils',
    'nuxt-mongoose',
    'nuxt-gtag',
    '@nuxt/scripts'
  ],

  gtag: {
    id: 'G-PTPGZG8THC',
    config: {
      anonymize_ip: true,
      send_page_view: false,
      linker: {
        domains: ['bridgingthegap.eu.com']
      }
    },
    debug: true,
    disableAutoPageTrack: false
  }
})
