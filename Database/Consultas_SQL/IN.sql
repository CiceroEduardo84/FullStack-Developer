-- Seleciona multiplos valores númericos
SELECT * FROM products WHERE price IN (800, 550, 1200);

-- Seleciona multiplos valores de texto
SELECT * FROM products WHERE category IN ('image', 'audio');