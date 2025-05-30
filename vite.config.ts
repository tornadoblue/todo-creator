import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from 'vite-plugin-dts';

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'TornadoblueTodoCreator', // UMD global name
      formats: ['es', 'cjs'],
      fileName: (format) => `todo-creator.${format}.js`, // Output filenames
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'lucide-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'lucide-react': 'LucideReact',
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));