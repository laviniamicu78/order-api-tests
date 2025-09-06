import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://dummyjson.com',
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  }
});
