DROP TABLE IF EXISTS COMPRA;
DROP TABLE IF EXISTS CLIENTE;
DROP TABLE IF EXISTS PRODUCTO;

CREATE TABLE CLIENTE (
    cliente_id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    ciudad VARCHAR(50) NOT NULL,
    estado VARCHAR(30) NOT NULL,
    cp INT NOT NULL,
    telefono VARCHAR(20) NOT NULL  
);

INSERT INTO CLIENTE(nombre, correo, password, direccion, ciudad, estado, cp, telefono) VALUES ('Diego Rosas', 'rosasdiego@gmail.com', 'Mhdjs99ew21', 'Clementina Deschamps #136, Villa Petrolera', 'Salamanca', 'Guanajuato', 36786, '4641089099');
INSERT INTO CLIENTE(nombre, correo, password, direccion, ciudad, estado, cp, telefono) VALUES ('Alan Alvarez', 'alanalv5@gmail.com', 'Fortnite69rata', 'Casa de Alan #1313, Humanista', 'Salamanca', 'Guanajuato', 36784, '4641117890');
INSERT INTO CLIENTE(nombre, correo, password, direccion, ciudad, estado, cp, telefono) VALUES ('Jonathan Ortega', 'jonny.coor31@gmail.com', 'Noobmaster69', 'Clementina Deschamps #136 Villa Petrolera', 'Salamanca', 'Guanajuato', 36786, '4641109059');

CREATE TABLE PROVEEDOR (
    proveedor_id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    rfc VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    ciudad VARCHAR(50) NOT NULL,
    estado VARCHAR(30) NOT NULL,
    cp INT NOT NULL,
    telefono VARCHAR(20) NOT NULL  
);
INSERT INTO PROVEEDOR(nombre, rfc, correo, direccion, ciudad, estado, cp, telefono) VALUES ('Diego Rosas', 'Mhdjs99ew21', 'rosasdiego@gmail.com', 'Clementina Deschamps #136, Villa Petrolera', 'Salamanca', 'Guanajuato', 36786, '4641089099');

CREATE TABLE PRODUCTO(
    producto_id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    proveedor_id INT NOT NULL REFERENCES PROVEEDOR(proveedor_id),
    nombre VARCHAR(100) NOT NULL,
    precio NUMERIC(10,2) NOT NULL,
    descripcion VARCHAR(300) NOT NULL,
    existencia BIT NOT NULL,
    imagen VARCHAR(100) NOT NULL
);
INSERT INTO PRODUCTO(proveedor_id, nombre, precio, descripcion, existencia, imagen) VALUES (1, 'PlayStation 4', 7999.99, 'La mejor consola de todas', '1', 'ruta');
INSERT INTO PRODUCTO(proveedor_id, nombre, precio, descripcion, existencia, imagen) VALUES (1, 'Xbox One X', 9999.99, 'La peor consola de todas', '1', 'ruta');
INSERT INTO PRODUCTO(proveedor_id, nombre, precio, descripcion, existencia, imagen) VALUES (1, 'Xiaomi Mi Band 3', 659.99, 'Reloj inteligente', '1', 'ruta');

CREATE TABLE COMPRA(
    compra_id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cliente_id INT NOT NULL REFERENCES CLIENTE(cliente_id),
    producto_id INT NOT NULL REFERENCES PRODUCTO(producto_id),
    cantidad INT NOT NULL,
    precio_total NUMERIC(10,2) NOT NULL,
    fecha DATE NOT NULL
);
INSERT INTO COMPRA(cliente_id, producto_id, cantidad, precio_total, fecha) VALUES (1, 1, 4, 500.90, '2019-06-23');
INSERT INTO COMPRA(cliente_id, producto_id, cantidad, precio_total, fecha) VALUES (3, 2, 4, 1000, '2019-06-23');
INSERT INTO COMPRA(cliente_id, producto_id, cantidad, precio_total, fecha) VALUES (2, 3, 4, 1213.23, '2019-06-23');

CREATE TABLE CARRITO(
    carrito_id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cliente_id INT NOT NULL REFERENCES CLIENTE(cliente_id),
    producto_id INT NOT NULL REFERENCES PRODUCTO(producto_id),
    cantidad INT NOT NULL
);
INSERT INTO CARRITO(carrito_id, cliente_id, producto_id, cantidad) VALUES (1, 1, 4);

CREATE TABLE FACTURA(
    factura_id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    compra_id INT NOT NULL REFERENCES COMPRA(compra_id),
    fecha_facturacion DATE NOT NULL
);
INSERT INTO FACTURA(compra_id, fecha_facturacion) VALUES (1,'2019-06-23');


