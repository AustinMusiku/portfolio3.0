export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  render: {
    resourceHints: false,
  },

  router: {
    // base: '/AustinMusiku.github.io/',
    prefetchLinks: false,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Austin Musiku - Software Engineer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/clash-display' },
    ],
    script: [
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~plugins/locomotiveScroll.js",
      mode: "client"
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxt/content'
  ],

  styleResources: {
    scss: [
      '~assets/scss/_variables.scss',
      '~assets/scss/_utilities.scss',
      '~assets/scss/_base.scss',
      '~assets/scss/_layouts.scss',
      '~assets/scss/_typography.scss',
      '~assets/scss/_components.scss'
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  }
}
