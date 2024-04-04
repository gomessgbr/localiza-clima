import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd(), '');
  return{
    define: {
      'process.env.CLIMA_TEMPO_KEY': JSON.stringify(env.CLIMA_TEMPO_KEY)
    },
    plugins: [react()],
  }
})
