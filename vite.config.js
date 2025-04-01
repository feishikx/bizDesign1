import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      resolves: [
        AntdResolve(),  // Import antd styles only when needed
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          '@primary-color': '#e3ad50',
          '@link-color': '#e3ad50',
          '@border-radius-base': '8px',
        },
        // For LESS of Ant Design 
        javascriptEnabled: true,
      },
    },
  },
  optimizeDeps: {
    include: ['antd'],  // ensure `antd` not excluded due to being in node_modules
  },
})
