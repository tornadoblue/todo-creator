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
      // Optionally, specify the tsconfig file if it's not in the default location
      // tsConfigFilePath: './tsconfig.json' 
    }),
  ],
  build: {
    sourcemap: true, // Optional: generate sourcemaps for easier debugging in consuming projects
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyTodoLibrary', // A UMD global name, if needed by consumers
      formats: ['es', 'cjs'], // Output formats: ES Module and CommonJS
      fileName: (format) => `my-todo-library.${format}.js`,
    },
    rollupOptions: {
      // Externalize dependencies that should not be bundled into your library
      // These are expected to be provided by the consuming application
      external: ['react', 'react-dom', 'lucide-react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
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