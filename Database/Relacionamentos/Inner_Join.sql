SELECT * FROM students;
SELECT * FROM students_address;

SELECT a.id, a.students_id,s.name, a.street, a.city
FROM students_address AS a
INNER JOIN students AS s ON s.id = a.students_id;
