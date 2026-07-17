import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        onboarding: resolve(__dirname, 'onboarding.html'),
        login: resolve(__dirname, 'login.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        verify: resolve(__dirname, 'verify.html'),
        verifier: resolve(__dirname, 'verifier.html'),
        assistant: resolve(__dirname, 'assistant.html'),
        history: resolve(__dirname, 'history.html'),
        profile: resolve(__dirname, 'profile.html'),
        image_analysis: resolve(__dirname, 'image_analysis.html'),
        bot_detection: resolve(__dirname, 'bot_detection.html')
      }
    }
  }
})
