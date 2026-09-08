import vinext from 'vinext';
import { defineConfig } from 'vite';
export default defineConfig({
  plugins: [vinext()],
  server: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: true,
    watch: { useFsEvents: false, usePolling: true },
  },
});
