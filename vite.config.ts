import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginChecker from 'vite-plugin-checker'
import path from 'path'
import EntryShakingPlugin from 'vite-plugin-entry-shaking'
import fs from 'fs'

const indexPaths = await findFoldersWithIndexTs(path.resolve(__dirname, 'src'))

export default defineConfig({
  plugins: [
    react(),
    pluginChecker({ typescript: true }),
    EntryShakingPlugin({
      targets: indexPaths
        .map((path) => path.split('src/').pop())
        .filter((path): path is string => !!path),
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
    port: 3000,
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
})

async function findFoldersWithIndexTs(folderPath: string): Promise<string[]> {
  const result: string[] = []

  async function crawl(directory: string): Promise<void> {
    const entries = await fs.promises.readdir(directory, {
      withFileTypes: true,
    })

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name)

      if (entry.isDirectory()) {
        if (
          entry.name !== 'node_modules' &&
          entry.name !== '.git' &&
          entry.name !== 'pages' &&
          entry.name !== 'test-utils'
        ) {
          const folderFiles = await fs.promises.readdir(fullPath)
          if (folderFiles.includes('index.ts')) {
            result.push(fullPath)
          }
          await crawl(fullPath)
        }
      }
    }
  }

  await crawl(folderPath)
  return result
}
