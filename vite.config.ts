import type { UserConfig, ConfigEnv } from 'vite';

import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const pkg = require('./package.json')

// https://vitejs.dev/config/
export default defineConfig(({command, mode}: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const { VITE_PORT, VITE_INTERNAL_VERSION } = env

  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      port: Number(VITE_PORT)
    },
    define: {
      __APP_VERSION__: JSON.stringify([pkg.version, VITE_INTERNAL_VERSION].join('.')),
      __APP_BUILD_TIME__: JSON.stringify(new Date().toISOString())
    }
  }
})