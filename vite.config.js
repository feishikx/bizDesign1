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
          'hack': `true; @import "node_modules/antd/lib/style/themes/dark.less";`,
          '@primary-color': '#e3ad50',
          '@border-radius-base': '8px',
          // '@import': "'~antd/lib/style/themes/dark.less'",
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
