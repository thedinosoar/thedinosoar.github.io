import { defineConfig } from 'vite'

export default defineConfig({
  // Set src as the root directory
  root: 'src',
  
  // Optimize for production builds
  build: {
    // Output to dist folder in project root
    outDir: '../dist',
    // Inline small assets for speed (4kb threshold)
    assetsInlineLimit: 4096,
    // Keep CSS as separate file for caching benefits
    cssCodeSplit: false,
    // Use fast minification
    minify: 'esbuild',
    // Optimize for speed
    target: 'esnext',
    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks: undefined,
        // Optimize asset names for caching
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  
  // Development server settings
  server: {
    port: 3000,
    open: true
  },
  
  // Preview server settings
  preview: {
    port: 4173,
    open: true
  }
})
