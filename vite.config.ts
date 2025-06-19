import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
import dns from 'dns'

// Preserve localhost instead of using 127.0.0.1
dns.setDefaultResultOrder('verbatim')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Listen on all addresses
    allowedHosts: ['9fac-41-150-216-87.ngrok-free.app']
  }
})
