import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Como cada página es un bloque de JS aparte (App.jsx los carga con lazy), el navegador
// solo los descubriría al ejecutar el bloque de entrada: una descarga detrás de otra.
// Este plugin inyecta en el HTML un script diminuto que, según la ruta, precarga ya el
// bloque de esa página (y los compartidos) y las fuentes que necesita, en paralelo.
// Solo actúa en `vite build`; en desarrollo no hace nada.
function routePreload() {
  const CAMPAIGN_PATH = '/invierte'
  return {
    name: 'route-preload',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const bundle = ctx.bundle
        if (!bundle) return html
        const chunks = Object.values(bundle).filter((c) => c.type === 'chunk')
        const entry = chunks.find((c) => c.isEntry)

        // Un bloque y todo lo que importa (sin repetir el de entrada, que ya va en el HTML).
        const collect = (name) => {
          const seen = new Set()
          const walk = (chunk) => {
            if (!chunk || seen.has(chunk.fileName) || chunk === entry) return
            seen.add(chunk.fileName)
            chunk.imports.forEach((file) => walk(bundle[file]))
          }
          walk(chunks.find((c) => c.name === name))
          return [...seen].map((file) => '/' + file)
        }

        const routes = {
          home: {
            js: collect('HomePage'),
            fonts: ['inter-latin', 'inter-tight-latin', 'fraunces-latin'],
          },
          campaign: {
            js: collect('CampaignPage'),
            // Fraunces solo aparece en la portada 3D, bastante por debajo: no se precarga.
            fonts: ['inter-latin', 'inter-tight-latin'],
          },
        }

        const script = `(function(){var r=${JSON.stringify(routes)};var c=location.pathname.replace(/\\/+$/,'')===${JSON.stringify(
          CAMPAIGN_PATH
        )};var x=c?r.campaign:r.home;function a(h,o){var l=document.createElement('link');l.href=h;for(var k in o)l.setAttribute(k,o[k]);document.head.appendChild(l)}x.js.forEach(function(h){a(h,{rel:'modulepreload'})});x.fonts.forEach(function(f){a('/fonts/'+f+'.woff2',{rel:'preload',as:'font',type:'font/woff2',crossorigin:''})})})();`

        return { html, tags: [{ tag: 'script', children: script, injectTo: 'head-prepend' }] }
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), routePreload()],
})
