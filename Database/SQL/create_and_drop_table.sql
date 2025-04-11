CREATE TABLE
  products (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NULL DEFAULT 'general'
  )

  DROP TABLE products