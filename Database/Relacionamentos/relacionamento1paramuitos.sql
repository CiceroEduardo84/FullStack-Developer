-- 1:N(Um para muitos): um curso tem muitos modulos;
SELECT * FROM courses;

CREATE TABLE course_modules(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    course_id INTEGER NOT NULL,    

    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- Inserindo modulos
INSERT INTO course_modules(name, course_id)
VALUES 
('Fundamentos do CSS',2),
('Layout com CSS', 2),
('CSS Functions', 2);

SELECT * FROM course_modules;

-- Exibindo curso no módulo
SELECT m.id, m.name, m.course_id, c.name 
FROM course_modules AS m 
INNER JOIN courses AS c 
ON c.id = m.course_id;