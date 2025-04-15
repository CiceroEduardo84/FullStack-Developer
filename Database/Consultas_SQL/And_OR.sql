-- Retorna os registros que atendem todos os critérios.
SELECT * FROM products WHERE price > 500 AND price < 800 AND id > 6;

-- Retorna os registros que atendem pelo menos um dos critários.
SELECT * FROM products WHERE price > 500 OR price < 800;