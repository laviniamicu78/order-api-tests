import { test, expect } from '@playwright/test';

test.skip('Create order with XML payload', async ({ request }) => {
  const xmlPayload = await test.info().project.use?.readFile?.('data/order.xml', 'utf-8') ??
    require('fs').readFileSync('data/order.xml', 'utf-8');

  const response = await request.post('/fake-xml-endpoint', {
    headers: {
      'Content-Type': 'application/xml'
    },
    data: xmlPayload,
  });

  expect(response.status()).toBeGreaterThanOrEqual(200);
  expect(response.status()).toBeLessThan(300);
});
