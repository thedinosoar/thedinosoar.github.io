import { defineConfig } from 'vite'

export default defineConfig({
  // Set src as the root directory
  root: 'src',
  
  // Optimize for production builds
  build: {
    // Output to dist folder in project root
    outDir: '../dist',
    // Inline assets smaller than 4kb
    assetsInlineLimit: 4096,
    // Minimize CSS
    cssCodeSplit: false,
    // Generate lightweight builds
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks: undefined
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
