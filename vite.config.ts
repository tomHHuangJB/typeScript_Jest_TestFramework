import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/modules/index.ts',
      name: 'TypeScriptDemo'
    }
  }
});
