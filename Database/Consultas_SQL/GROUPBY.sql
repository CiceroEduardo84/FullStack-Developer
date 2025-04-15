SELECT * FROM products;

SELECT category, COUNT(*) AS Total
FROM products 
WHERE price > 400
GROUP BY category 
ORDER BY Total DESC;
