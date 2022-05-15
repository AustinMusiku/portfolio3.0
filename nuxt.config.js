export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Hey stranger, my name is Austin Musiku and I build cool stuff on the internet' },
      { hid: 'keywords', name: 'keywords', content: 'Austin Musiku web developer software engineer computer science , AustinMusiku.github website'},
      { httpEquiv: 'x-ua-compatible', content: 'ie=edge' },
      { name: 'google-site-verification', content: 'VkUXBVibMrKMGgd8yj1bjBoKK4XMmayQHdJjYftOhso' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/logo.png' },
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
      '~assets/scss/_base.scss',
      '~assets/scss/_layouts.scss',
      '~assets/scss/_typography.scss',
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["gsap"],
  },
}