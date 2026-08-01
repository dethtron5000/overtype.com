import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Custom esbuild configuration options
  oxc: {
    // Treat standard .js files as JSX (useful for older React migration)
    loader: 'jsx', 
    include: /src\/.*\.js$/, 
    exclude: [],
    
    // Configure production optimization 
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    
    // Target environment
    target: 'es2022',
    
    // Automatically inject code into every file processed by esbuild
    jsxInject: `import React from 'react'`, 
    
    // Keep class names and function names from being minified
    keepNames: false, 
  },

});
