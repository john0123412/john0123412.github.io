import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const cspMeta = `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'none';" />`

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'inject-csp',
      transformIndexHtml(html) {
        return html.replace('</head>', `    ${cspMeta}\n  </head>`)
      },
      apply: 'build',
    },
  ],
  base: '/',
})
