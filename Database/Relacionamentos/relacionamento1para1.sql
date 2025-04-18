-- 1:1 (um para um): um aluno possui um endereço, e um endereço pertence a um aluno
SELECT * FROM courses;
SELECT * FROM students;

CREATE TABLE students_address(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    students_id INTEGER UNIQUE NOT NULL,
    street TEXT NOT NULL,
    city TEXT NOT NULL,
    
    FOREIGN KEY (students_id) REFERENCES students(id)
);

SELECT * FROM students;
SELECT * FROM students_address;

INSERT INTO students_address(students_id, street, city) 
VALUES (1, 'Rua São João', 'São Paulo');

INSERT INTO students_address(students_id, street, city) 
VALUES (1, 'Rua Dom Pedro', 'Rio de Janeiro');