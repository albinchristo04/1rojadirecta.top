import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://1rojadirecta.top',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  compressHTML: true,
});
