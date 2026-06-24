import { defineConfig } from 'vite'
import { resolve } from 'path'
import { readdirSync } from 'fs'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const htmlFiles = readdirSync(__dirname)
  .filter(f => f.endsWith('.html'))
  .reduce((entries, file) => {
    const name = file.replace('.html', '')
    entries[name] = resolve(__dirname, file)
    return entries
  }, {})

export default defineConfig({
  build: {
    rollupOptions: {
      input: htmlFiles,
    },
  },
})
