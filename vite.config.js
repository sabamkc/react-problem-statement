import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'src/public',
  server: {
    host: true,          // listen on 0.0.0.0
    port: 3000,
    watch: {
      usePolling: true,  // reliable for Docker on macOS
    },
    hmr: {
      host: 'localhost', // host your browser will connect to
      port: 3000,
    },
  },
});