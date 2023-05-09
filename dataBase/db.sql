CREATE DATABASE ecommerce

CREATE TABLE categoria(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE marca(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE productos(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    imagen VARCHAR(50),
    descripcion TEXT,
	precio DECIMAL(10, 2) NOT NULL,
	stock INT NOT NULL,
	id_categoria INT NOT NULL,
	id_marca INT NOT NULL,
	FOREIGN KEY (id_categoria) REFERENCES categoria(id),
  	FOREIGN KEY (id_marca) REFERENCES marca(id)

);

CREATE TABLE roles (
  	id INT PRIMARY KEY,
  	nombre VARCHAR(50) NOT NULL
	
);

CREATE TABLE permisos (
  	id INT PRIMARY KEY,
  	nombre VARCHAR(50) NOT NULL
	
);

CREATE TABLE rol_permiso (
	id_rol INT NOT NULL,
	id_permiso INT NOT NULL,
	FOREIGN KEY (id_rol) REFERENCES roles(id),
	FOREIGN KEY (id_permiso) REFERENCES permisos(id),
	PRIMARY KEY(id_rol,id_permiso)
	
);

CREATE TABLE usuarios (
  	id INT PRIMARY KEY,
  	correo VARCHAR(50) NOT NULL,
  	contrasena VARCHAR(50) NOT NULL,
  	id_rol INT NOT NULL,
  	FOREIGN KEY (id_rol) REFERENCES roles(id)

);


