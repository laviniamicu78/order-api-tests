import { test, expect, request } from '@playwright/test';

test('Create order - API test', async ({ request }) => {
  const response = await request.post('/carts/add', {
    data: {
      userId: 1,
      products: [{ id: 1, quantity: 4 }]
    },
  });

  expect(response.status()).toBe(201);
  const body = await response.json();
  console.log(body);
  expect(body.total).toBeGreaterThan(0);
  expect(body.totalProducts).toBe(1);
  expect(body.totalQuantity).toBe(4);
});
