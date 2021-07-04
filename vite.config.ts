import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import babel from "vite-babel-plugin";
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    babel(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']  
    })
  ]
})
