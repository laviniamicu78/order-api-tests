import { test, expect } from '@playwright/test';
import sqlite3 from 'sqlite3';

test('Simuleer SQL query voor order status', async () => {
  const db = new sqlite3.Database(':memory:');

  db.serialize(() => {
    db.run("CREATE TABLE orders (id INTEGER, status TEXT)");
    db.run("INSERT INTO orders (id, status) VALUES (1, 'verzonden')");

    db.get("SELECT status FROM orders WHERE id = 1", (err, row) => {
      expect(row.status).toBe('verzonden');
      console.log(`Order status: ${row.status}`);
    });
  });

  db.close();
});
