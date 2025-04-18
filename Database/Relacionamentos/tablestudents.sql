-- Criando tabela estudantes
CREATE TABLE students(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL
);

-- Populando tabela estudantes
INSERT INTO students(name) VALUES('Lucas Santos');
INSERT INTO students(name) VALUES('Beatriz Lima');
INSERT INTO students(name) VALUES('Gabriel Oliveira');
INSERT INTO students(name) VALUES('Mariana Costa');
INSERT INTO students(name) VALUES('Felipe Souza');
INSERT INTO students(name) VALUES('Melissa Pereira');
INSERT INTO students(name) VALUES('Rafael Mendes');
INSERT INTO students(name) VALUES('Amanda Silva');
INSERT INTO students(name) VALUES('Juliana Rodrigues');
INSERT INTO students(name) VALUES('Pedro Ferreira');

SELECT * FROM students;
