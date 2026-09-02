// https://nuxt.com/docs/api/configuration/nuxt-config

const isDevelopment = process.env.NODE_ENV === 'development'
const allowedOrigins = [
  'https://bridgingthegap.eu.com',
  ...(isDevelopment ? ['http://localhost:3000', 'http://127.0.0.1:3000'] : [])
]

export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
    preset: 'node-server'
  },

  compatibilityDate: '2024-04-03',

  css: ['~/assets/style/main.scss'],
  vite: {
    optimizeDeps: {
      include: ['v-calendar', 'vue-recaptcha-v3', '@mdi/js', '@vueuse/core']
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },

  security: {
    strict: true,
    nonce: true,
    sri: true,
    requestSizeLimiter: {
      maxRequestSizeInBytes: 100_000,
      maxUploadFileRequestInBytes: 100_000,
      throwError: true
    },
    corsHandler: false,
    rateLimiter: {
      tokensPerInterval: 150,
      interval: 300000,
      throwError: true
    },
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
          "'strict-dynamic'",
          "'nonce-{{nonce}}'",
          '*.youtube.com',
          'https://www.googletagmanager.com',
          'https://www.google.com',
          'https://www.gstatic.com',
          'www.youtube-nocookie.com'
        ],
        'connect-src': [
          "'self'",
          'https://www.google.com',
          'https://www.googletagmanager.com',
          'https://www.google-analytics.com',
          'https://*.google-analytics.com'
        ],
        'style-src': ["'self'", 'https:', "'unsafe-inline'"],
        'frame-src': [
          "'self'",
          'https://www.youtube.com',
          'https://www.youtube-nocookie.com',
          'https://www.google.com'
        ],
        'base-uri': ["'none'"],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'"],
        'object-src': ["'none'"],
        'script-src-attr': ["'none'"],
        'upgrade-insecure-requests': true
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
    recaptchaSecretKey: '',
    recipientEmail: '',
    userToImpersonate: '',

    public: {
      recaptchaSiteKey: ''
    }
  },

  robots: {
    blockNonSeoBots: true,
    disallow: ['/*?*']
  },

  site: {
    url: 'https://bridgingthegap.eu.com',
    name: 'BridgingTheGap.eu.com'
  },

  sitemap: {
    sources: ['/api/__sitemap__/streams'],
    exclude: ['/unsubscribePage', '/issuedBadge']
  },

  seo: {
    canonicalLowercase: false
  },

  devServer: {
    host: '127.0.0.1',
    port: 3000
  },

  devtools: {
    enabled: false
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  routeRules: {
    '/aboutTheProject': { redirect: { to: '/about', statusCode: 301 } },
    '/upcomingEvents': { redirect: { to: '/events', statusCode: 301 } },
    '/unsubscribePage': { robots: false },
    '/issuedBadge': { robots: false },
    '/api/**': {
      security: {
        rateLimiter: {
          tokensPerInterval: 30,
          interval: 60000,
          throwError: true
        },
        corsHandler: {
          origin: allowedOrigins,
          methods: ['GET', 'POST']
        }
      }
    }
  },

  experimental: {
    defaults: {
      nuxtLink: {
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
    'nuxt-mongoose',
    'nuxt-gtag',
    '@nuxt/icon'
  ],

  gtag: {
    id: 'G-PTPGZG8THC',
    enabled: true,
    initMode: 'auto',
    config: {
      anonymize_ip: true,
      send_page_view: true,
      linker: {
        domains: ['bridgingthegap.eu.com']
      }
    }
  }
})
