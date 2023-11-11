import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      process: {
        env: {
          REACT_APP_CLERK_PUBLISHABLE_KEY: env.REACT_APP_CLERK_PUBLISHABLE_KEY,
        },
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
      },
      extensions: ['.js', '.jsx'],
    },
  };
});
