import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://dummyjson.com',
    extraHTTPHeaders: {'Content-Type': 'application/json'},
  },
  reporter: [
      ['list'],
      ['junit', { outputFile: 'test-results/junit.xml' }],
      ['html', { outputFolder:'playwright-report',open: 'never' }],
    ],
  
});
