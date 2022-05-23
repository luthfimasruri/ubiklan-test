import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  static: {
    prefix: false
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Home',
    title: 'Ubiklan',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-inline-svg.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dayjs',
    '@nuxtjs/axios',
  ],

  // PWA module configuration: https://pwa.nuxtjs.org/setup
  pwa: {
    meta: {
      name: 'Ubiklan',
      author: 'Ahmad Luthfi Masruri',
      description: 'Ubiklan is a web application that helps you advertise your products and services online.',
      theme_color: '#36C0C6',
      lang: 'en',
    },
    manifest: {
      name: 'Ubiklan',
      lang: 'en',
      useWebmanifestExtension: false
    }
  },

  // Dayjs configuration: https://day.js.org/
  dayjs: {
    locales: ['id'],
    defaultLocale: 'id',
    defaultTimeZone: 'Asia/Jakarta',
    plugins: [
      'utc',
      'timezone',
      'relativeTime',
      'advancedFormat',
      'isoWeek',
    ]
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#FF6F02',
          'ub-orange': '#FF6F02',
          'ub-grey': '#7A7B7D',
          'ub-white': '#FFFFFF',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
