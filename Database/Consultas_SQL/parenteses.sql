-- Operadores AND e OR juntos.
SELECT * FROM products WHERE (price > 45 AND price < 1000) AND (category = 'image' OR category = 'audio');