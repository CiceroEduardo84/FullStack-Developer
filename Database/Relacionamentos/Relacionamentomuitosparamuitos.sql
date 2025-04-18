/* N:N(Muitos para muitos)
students: 1 aluno pode fazer MUITOS cursos;
Courses: 1 curso pode ter MUITOS alunos;
*/

CREATE TABLE students_courses(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

INSERT INTO students_courses(student_id,course_id) 
VALUES(1,1);

SELECT * FROM students;
SELECT * FROM courses;
SELECT * FROM students_courses;

-- SELECT Muitos para Muitos
SELECT sc.id, sc.student_id, s.name, sc.course_id, c.name
FROM students_courses AS sc
INNER JOIN students AS s ON s.id = sc.student_id
INNER JOIN Courses AS c ON c.id = sc.course_id;