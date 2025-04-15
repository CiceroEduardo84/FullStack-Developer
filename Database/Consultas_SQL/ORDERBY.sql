-- ASC (ascendente/ crescente)
SELECT * FROM products ORDER BY price ASC;

-- DESC (descendente/decrescente)
SELECT * FROM products ORDER BY price DESC;

-- WHERE + ORDER BY
SELECT * FROM products WHERE category = 'audio' ORDER BY price DESC;

-- ORDER BY com texto
SELECT * FROM products ORDER BY name;