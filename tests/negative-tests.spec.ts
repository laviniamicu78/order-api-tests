import { test, expect } from '@playwright/test';

// Missing user ID
test('Create order - missing userId returns 400', async ({ request }) => {
const response = await request.post('/carts/add', {
data: {
products: [{ id: 1, quantity: 2 }],
},
});
expect(response.status()).toBe(400); // Or expected error code
});

// Negative quantity
test('Create order - negative quantity returns 400', async ({ request }) => {
const response = await request.post('/carts/add', {
    data: {
        userId: 123,
        products: [{ id: 1, quantity: -5 }],
    },
});

    // Log response body for debugging
const responseBody= await response.json();
console.log('Response body:', responseBody);

    // Assert status code
expect(response.status()).toBe(400);


    // Assert specific error message

expect(responseBody.error).toHaveProperty('error');
expect(responseBody.error).toMatch(/quantity/i);    // message mentions "quantity"
});

// Zero quantity
test('Create order - zero quantity returns 400', async ({ request }) => {
const response = await request.post('/carts/add', {
data: {
userId: 123,
products: [{ id: 1, quantity: 0 }],
},
});
expect(response.status()).toBe(400);
});

// Invalid product ID
test('Create order - invalid product ID returns 400', async ({ request }) => {
const response = await request.post('/carts/add', {
data: {
userId: 123,
products: [{ id: 'abc', quantity: 2 }],
},
});
expect(response.status()).toBe(400);
});