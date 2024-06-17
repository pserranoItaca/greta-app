USE gretadb;

SHOW TABLES;
SELECT * FROM users;
SELECT * FROM genres;
SELECT * FROM film_genre;
INSERT INTO film_gernre(film_id, genre_id) VALUES (?,?);
SELECT * FROM film_genre WHERE film_id = 13;
SELECT * FROM films;
SELECT * FROM videoclub;

SELECT MAX(id) AS ultimo_id FROM films;

DELETE FROM film_genre WHERE film_id > 21;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    pass VARCHAR(255) NOT NULL,
    avatar TINYINT NOT NULL CHECK (avatar BETWEEN 1 AND 6),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    active BOOLEAN DEFAULT TRUE,
    deleted BOOLEAN DEFAULT FALSE
);
CREATE TABLE films (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    descript TEXT,
    id_user INT,
    director VARCHAR(255),
    art VARCHAR(255),
    sound VARCHAR(255),
    cast TEXT,
    poster TEXT,
    route TEXT,
    rating DECIMAL(3, 1),
    views INT,
    id_category INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    active BOOLEAN DEFAULT TRUE,
    deleted BOOLEAN DEFAULT FALSE,
    deleted_at TIMESTAMP NULL DEFAULT NULL,
    CONSTRAINT chk_id_category CHECK (id_category BETWEEN 1 AND 10)
);
INSERT INTO films (title, descript, id_user, director, art, sound, cast, poster, route, rating, views, id_category)
VALUES
('La Leyenda del Sol Perdido', 'Un equipo de exploradores emprende un viaje para encontrar una antigua reliquia que podría salvar al mundo de la oscuridad eterna.', 1, 'Amanda Rodriguez', 'Carlos González', 'Javier Muñoz', 'Sofía Cruz, Diego García, Laura Martínez', 'http://localhost:3010/films/resource/poster/1.png', 'http://localhost:3010/films/resource/films/1.mp4', 8.5, 120000, 1),
('Más Allá de las Estrellas', 'Una astronauta se encuentra atrapada en un planeta desconocido y debe encontrar una manera de regresar a la Tierra antes de que se agoten sus suministros.', 1, 'Eduardo Sánchez', 'María López', 'José Ramírez', 'Ana Pérez, Juan Fernández, Marta González', 'http://localhost:3010/films/resource/poster/2.png', 'http://localhost:3010/films/resource/films/2.mp4', 9.0, 180000, 2),
('El Misterio del Círculo de Piedra', 'Un arqueólogo descubre un antiguo círculo de piedra que esconde secretos oscuros y peligrosos que podrían cambiar el curso de la historia.', 1, 'Roberto Gómez', 'Pablo Fernández', 'Andrea Díaz', 'Carlos Martínez, Elena Ruiz, Daniel Sánchez', 'http://localhost:3010/films/resource/poster/3.png', 'http://localhost:3010/films/resource/films/3.mp4', 7.9, 90000, 3),
('La Última Frontera', 'Una tripulación de una nave espacial debe enfrentarse a peligros desconocidos en los confines del universo mientras buscan un nuevo hogar para la humanidad.', 1, 'Lucía Martín', 'Antonio Pérez', 'Raquel García', 'Pedro Rodríguez, Julia Fernández, Andrés Soto', 'http://localhost:3010/films/resource/poster/4.png', 'http://localhost:3010/films/resource/films/4.mp4', 8.7, 150000, 4),
('El Secreto del Abismo', 'Un grupo de buzos se aventura en las profundidades del océano en busca de un legendario tesoro, pero descubren algo mucho más aterrador en las profundidades.', 1, 'Gonzalo López', 'Elena Martínez', 'David Gómez', 'Carmen Ruiz, Sergio González, Patricia Hernández', 'http://localhost:3010/films/resource/poster/5.png', 'http://localhost:3010/films/resource/films/5.mp4', 7.6, 110000, 5),
('El Viaje del Tiempo', 'Un científico crea una máquina del tiempo y se embarca en un viaje a través de las eras para cambiar el curso de la historia y salvar a la humanidad.', 1, 'Javier Sánchez', 'María Fernández', 'Alberto Pérez', 'Laura García, Miguel Ruiz, Sofía Martín', 'http://localhost:3010/films/resource/poster/6.png', 'http://localhost:3010/films/resource/films/6.mp4', 8.9, 200000, 6),
('El Misterio del Templo Perdido', 'Un arqueólogo intrépido se adentra en un templo antiguo en busca de un tesoro legendario, pero pronto descubre que no está solo.', 1, 'Ana Sánchez', 'Carlos Rodríguez', 'Elena Pérez', 'Mario Martínez, Paula Soto, Alejandro García', 'http://localhost:3010/films/resource/poster/7.png', 'http://localhost:3010/films/resource/films/7.mp4', 7.8, 130000, 7),
('Aventura en la Selva', 'Un grupo de exploradores se interna en la selva amazónica en busca de una planta rara con poderes curativos, pero se enfrentan a peligros inesperados en su camino.', 1, 'Diego Martínez', 'Sara López', 'Juan Sánchez', 'Cristina Martín, Andrés Pérez, María Fernández', 'http://localhost:3010/films/resource/poster/8.png', 'http://localhost:3010/films/resource/films/8.mp4', 8.2, 140000, 8),
('El Último Guerrero', 'En un mundo post-apocalíptico, un guerrero solitario emprende un viaje para vengar la muerte de su familia y restaurar la paz en la tierra desolada.', 1, 'Daniel Rodríguez', 'Lucía Pérez', 'Santiago Martínez', 'Ana García, Carlos Sánchez, Julia Pérez', 'http://localhost:3010/films/resource/poster/9.png', 'http://localhost:3010/films/resource/films/9.mp4', 7.5, 100000, 9),
('El Secreto de la Montaña', 'Un grupo de alpinistas se enfrenta a desafíos mortales mientras intentan alcanzar la cima de una montaña imposible de escalar.', 1, 'Eva Martínez', 'Pablo López', 'María Sánchez', 'Alberto Fernández, Sofía Soto, David Pérez', 'http://localhost:3010/films/resource/poster/10.png', 'http://localhost:3010/films/resource/films/10.mp4', 8.0, 160000, 10),
('La Ciudad de las Sombras', 'Un detective privado investiga una serie de asesinatos en una ciudad dominada por la oscuridad y la corrupción, donde nada es lo que parece.', 1, 'Laura Fernández', 'Antonio Martínez', 'Carmen Pérez', 'Javier García, Paula Martínez, Roberto Sánchez', 'http://localhost:3010/films/resource/poster/11.png', 'http://localhost:3010/films/resource/films/11.mp4', 8.3, 170000, 10);

INSERT INTO films (title, descript, id_user, director, art, sound, cast, poster, route, rating, views, id_category)
VALUES
('Alerta Cobra', 'Serie de acción alemana sobre una unidad de la policía de carreteras.', 1, 'Stephan Wagner', 'Helmut Gärtner', 'Peter Thomas', 'Erdogan Atalay, Tom Beck', 'http://localhost:3010/films/resource/poster/12.png', 'http://localhost:3010/films/resource/films/12.mp4', 7.8, 12500, 1),
('La Sombra del Viento', 'Un joven descubre un libro misterioso que lo lleva a una aventura en la Barcelona de posguerra.', 1, 'Carlos Ruiz', 'Isabel Hernández', 'Luis López', 'Daniel Sempere, Fermín Romero', 'http://localhost:3010/films/resource/poster/13.png', 'http://localhost:3010/films/resource/films/13.mp4', 8.4, 50000, 2),
('El Enigma del Horizonte', 'Un grupo de científicos en una estación espacial descubren una nave perdida con secretos oscuros.', 1, 'Nina Alvarez', 'Santiago Ortiz', 'Ana Molina', 'Laura Pérez, Jorge Gomez', 'http://localhost:3010/films/resource/poster/14.png', 'http://localhost:3010/films/resource/films/14.mp4', 7.2, 34000, 3),
('Bajo Cero', 'Un detective investiga una serie de desapariciones en una remota ciudad ártica.', 1, 'Ricardo Castillo', 'Marta León', 'Pablo Martin', 'Elena Torres, Javier Ruiz', 'http://localhost:3010/films/resource/poster/15.png', 'http://localhost:3010/films/resource/films/15.mp4', 7.5, 41000, 4),
('Rescate en el Abismo', 'Un equipo de rescate submarino intenta salvar a los sobrevivientes de un submarino hundido.', 1, 'Fernando Garcia', 'Lucia Sánchez', 'Roberto Diaz', 'Sofia Martinez, Manuel Ortiz', 'http://localhost:3010/films/resource/poster/16.png', 'http://localhost:3010/films/resource/films/16.mp4', 7.9, 56000, 5),
('El Eco del Silencio', 'Un periodista investiga una serie de muertes inexplicables en una pequeña ciudad costera.', 1, 'Adriana Lopez', 'Clara Vega', 'Carlos Fernandez', 'Ana Romero, Luis Torres', 'http://localhost:3010/films/resource/poster/17.png', 'http://localhost:3010/films/resource/films/17.mp4', 8.1, 48000, 6),
('Fuego en el Cielo', 'Un piloto lucha por sobrevivir después de que su avión se estrella en una montaña remota.', 1, 'Gustavo Mendez', 'Mario Campos', 'Raquel Cruz', 'Jose Perez, Alicia Morales', 'http://localhost:3010/films/resource/poster/18.png', 'http://localhost:3010/films/resource/films/18.mp4', 7.6, 37000, 7),
('La Ciudad Perdida', 'Un arqueólogo descubre una antigua ciudad perdida en la selva y desata una maldición antigua.', 1, 'Victor Martinez', 'Diego Navarro', 'Laura Garcia', 'Maria Hernandez, Juan Castillo', 'http://localhost:3010/films/resource/poster/19.png', 'http://localhost:3010/films/resource/films/19.mp4', 7.3, 45000, 8),
('El Último Refugio', 'Un grupo de sobrevivientes busca un refugio seguro en un mundo post-apocalíptico.', 1, 'Sergio Fernandez', 'Patricia Vega', 'Miguel Santos', 'Eva Sanchez, Ricardo Romero', 'http://localhost:3010/films/resource/poster/20.png', 'http://localhost:3010/films/resource/films/20.mp4', 8.0, 53000, 9),
('La Voz del Viento', 'Una joven descubre que tiene la habilidad de controlar el viento y debe proteger su secreto.', 1, 'Jorge Gonzalez', 'Elena Lopez', 'Rafael Hernandez', 'Clara Ruiz, Andres Torres', 'http://localhost:3010/films/resource/poster/21.png', 'http://localhost:3010/films/resource/films/21.mp4', 7.7, 46000, 10);
