USE `PanArteVfinal`;

INSERT INTO proveedores (id_nit, nombre_empresa, telefono, direccion) VALUES
(1,  'Molino San Martin',         '1142011001', 'Av. Mitre 1200, Avellaneda'),
(2,  'Lacteos Don Pedro',         '1142011002', 'Belgrano 845, Lanus'),
(3,  'Granja Los Alamos',         '1142011003', 'Ruta 2 km 45, Brandsen'),
(4,  'Distribuidora Dulce Sur',   '1142011004', 'Av. Pavon 3300, Avellaneda'),
(5,  'Levaduras del Plata',       '1142011005', 'Sarmiento 520, Quilmes'),
(6,  'Rellenos Norte',            '1142011006', 'Colon 1410, Banfield'),
(7,  'Aceites La Pampa',          '1142011007', 'Av. Hipolito Yrigoyen 9800, Lomas de Zamora'),
(8,  'Sal y Especias Andinas',    '1142011008', 'Alsina 77, Avellaneda'),
(9,  'Cacao Real SRL',            '1142011009', 'Av. Galicia 1560, Wilde'),
(10, 'Frutos Secos El Nogal',     '1142011010', 'Lavalle 233, Bernal');

INSERT INTO categorias (id, nombre) VALUES
(1,  'Panaderia'),
(2,  'Facturas'),
(3,  'Pasteleria'),
(4,  'Tortas'),
(5,  'Galletitas'),
(6,  'Panes especiales'),
(7,  'Budines'),
(8,  'Salados'),
(9,  'Alfajores'),
(10, 'Postres');

INSERT INTO recetas (id, nombre) VALUES
(1,  'Pan frances'),
(2,  'Medialunas de manteca'),
(3,  'Croissant'),
(4,  'Pan integral'),
(5,  'Torta de chocolate'),
(6,  'Budin de vainilla'),
(7,  'Galletitas de manteca'),
(8,  'Alfajores de maicena'),
(9,  'Pan de leche'),
(10, 'Bolas de fraile');

INSERT INTO clientes_frecuentes (id, dni, nombre, apellido, telefono, email, descuento) VALUES
(1,  '30111222', 'Lucia',     'Fernandez', '1155550101', 'lucia.fernandez@mail.com', 10),
(2,  '28333444', 'Martin',    'Gomez',     '1155550102', NULL,                       5),
(3,  '35666777', 'Sofia',     'Ramirez',   '1155550103', 'sofia.ramirez@mail.com',   15),
(4,  '32111999', 'Diego',     'Lopez',     '1155550104', 'diego.lopez@mail.com',     10),
(5,  '40222333', 'Valentina', 'Torres',    '1155550105', NULL,                       5),
(6,  NULL,       'Carlos',    'Benitez',   '1155550106', NULL,                       0),
(7,  NULL,       'Ana',       'Morales',   '1155550107', 'ana.morales@mail.com',     0),
(8,  '27888999', 'Jorge',     'Castro',    '1155550108', NULL,                       0),
(9,  '38444555', 'Camila',    'Herrera',   '1155550109', 'camila.herrera@mail.com',  10),
(10, NULL,       'Pablo',     'Suarez',    '1155550110', NULL,                       0);

INSERT INTO empleados (id, nombre, apellido, puesto, fecha_contratacion, telefono) VALUES
(1,  'Maria',     'Acosta',    'Encargada',          '2019-03-01', '1166660201'),
(2,  'Juan',      'Pereyra',   'Panadero',           '2020-06-15', '1166660202'),
(3,  'Laura',     'Medina',    'Cajera',             '2021-02-10', '1166660203'),
(4,  'Roberto',   'Silva',     'Pastelero',          '2018-09-05', '1166660204'),
(5,  'Florencia', 'Rios',      'Cajera',             '2023-04-20', '1166660205'),
(6,  'Nicolas',   'Vega',      'Panadero',           '2022-11-01', '1166660206'),
(7,  'Carla',     'Dominguez', 'Vendedora',          '2024-01-15', '1166660207'),
(8,  'Tomas',     'Ortiz',     'Ayudante de cocina', '2024-08-01', '1166660208'),
(9,  'Paula',     'Navarro',   'Pastelera',          '2021-07-12', '1166660209'),
(10, 'Federico',  'Luna',      'Cajero',             '2025-03-03', '1166660210');

INSERT INTO ingredientes (id, nombre, cantidad_stock, unidad_medida, proveedores_id_nit) VALUES
(1,  'Harina 000',      150.000, 'kg',     1),
(2,  'Harina integral',  40.000, 'kg',     1),
(3,  'Manteca',          25.000, 'kg',     2),
(4,  'Leche',            30.000, 'l',      2),
(5,  'Huevos',          360.000, 'unidad', 3),
(6,  'Azucar',           50.000, 'kg',     4),
(7,  'Levadura fresca',   5.000, 'kg',     5),
(8,  'Dulce de leche',   20.000, 'kg',     6),
(9,  'Sal fina',         10.000, 'kg',     8),
(10, 'Cacao amargo',      8.000, 'kg',     9);

INSERT INTO productos (id, nombre, descripcion, precio, productos_stock, categorias_id, recetas_id) VALUES
(1,  'Pan frances',           'Pan de mesa tradicional, precio por kilo',        3500.00, 25.00, 1, 1),
(2,  'Medialuna de manteca',  'Medialuna clasica de manteca, por unidad',         600.00, 60.00, 2, 2),
(3,  'Croissant',             'Croissant hojaldrado de manteca, por unidad',     1200.00,  8.00, 3, 3),
(4,  'Pan integral',          'Pan de harina integral, precio por kilo',         4500.00,  7.50, 6, 4),
(5,  'Torta de chocolate',    'Torta de chocolate entera, 8 porciones',         18000.00,  4.00, 4, 5),
(6,  'Budin de vainilla',     'Budin de vainilla de 500 g',                      6500.00,  6.00, 7, 6),
(7,  'Galletitas de manteca', 'Galletitas surtidas de manteca, precio por kilo', 9000.00, 12.00, 5, 7),
(8,  'Alfajor de maicena',    'Alfajor de maicena con dulce de leche',            900.00, 40.00, 9, 8),
(9,  'Pan de leche',          'Pancito de leche individual',                      700.00, 30.00, 1, 9),
(10, 'Bola de fraile',        'Bola de fraile rellena de dulce de leche',         800.00, 24.00, 2, 10);

INSERT INTO ingredientes_has_recetas (ingredientes_id, recetas_id, cantidad) VALUES
-- 1. Pan frances
(1, 1, 10.000), (7, 1, 0.200), (9, 1, 0.200),
-- 2. Medialunas de manteca
(1, 2, 2.000), (3, 2, 0.800), (6, 2, 0.400), (5, 2, 6.000), (7, 2, 0.100), (4, 2, 0.500),
-- 3. Croissant
(1, 3, 2.000), (3, 3, 1.000), (7, 3, 0.080), (9, 3, 0.040),
-- 4. Pan integral
(2, 4, 5.000), (7, 4, 0.100), (9, 4, 0.100),
-- 5. Torta de chocolate
(1, 5, 0.500), (6, 5, 0.400), (5, 5, 6.000), (10, 5, 0.150), (3, 5, 0.200),
-- 6. Budin de vainilla
(1, 6, 0.400), (6, 6, 0.300), (5, 6, 4.000), (3, 6, 0.200), (4, 6, 0.200),
-- 7. Galletitas de manteca
(1, 7, 1.000), (3, 7, 0.500), (6, 7, 0.300), (5, 7, 2.000),
-- 8. Alfajores de maicena
(1, 8, 0.500), (3, 8, 0.200), (6, 8, 0.200), (5, 8, 3.000), (8, 8, 1.000),
-- 9. Pan de leche
(1, 9, 3.000), (4, 9, 1.000), (6, 9, 0.300), (3, 9, 0.300), (7, 9, 0.100),
-- 10. Bolas de fraile
(1, 10, 2.000), (4, 10, 0.500), (6, 10, 0.300), (7, 10, 0.080), (8, 10, 1.200), (5, 10, 4.000);

INSERT INTO ventas (id, fecha, hora, total, sub_total, descuento, empleados_id, clientes_frecuentes_id) VALUES
(1,  '2026-09-28', '09:15:00',  8850.00,  8850.00,  0,  3, NULL),
(2,  '2026-09-30', '17:40:00', 21060.00, 23400.00, 10,  5, 1),
(3,  '2026-10-02', '08:30:00', 10000.00, 10000.00,  0,  3, NULL),
(4,  '2026-10-05', '10:05:00', 10925.00, 11500.00,  5,  7, 2),
(5,  '2026-10-08', '18:20:00', 10400.00, 10400.00,  0,  5, NULL),
(6,  '2026-10-12', '09:00:00', 14705.00, 17300.00, 15, 10, 3),
(7,  '2026-10-15', '16:45:00',  6875.00,  6875.00,  0,  3, NULL),
(8,  '2026-10-19', '11:30:00', 17280.00, 19200.00, 10,  7, 4),
(9,  '2026-10-22', '19:10:00', 18000.00, 18000.00,  0, 10, NULL),
(10, '2026-10-26', '08:50:00',  9025.00,  9500.00,  5,  5, 5);

INSERT INTO detalle_venta (productos_id, ventas_id, cantidad, precio_unitario) VALUES
-- Venta 1
(1, 1,  1.50,  3500.00), (2, 1,  6.00,   600.00),
-- Venta 2
(5, 2,  1.00, 18000.00), (8, 2,  6.00,   900.00),
-- Venta 3
(2, 3, 12.00,   600.00), (9, 3,  4.00,   700.00),
-- Venta 4
(1, 4,  2.00,  3500.00), (7, 4,  0.50,  9000.00),
-- Venta 5
(3, 5,  3.00,  1200.00), (2, 5,  6.00,   600.00), (10, 5, 4.00, 800.00),
-- Venta 6
(6, 6,  1.00,  6500.00), (8, 6, 12.00,   900.00),
-- Venta 7
(1, 7,  1.00,  3500.00), (4, 7,  0.75,  4500.00),
-- Venta 8
(2, 8, 24.00,   600.00), (10, 8, 6.00,   800.00),
-- Venta 9
(5, 9,  1.00, 18000.00),
-- Venta 10
(2, 10, 6.00,   600.00), (3, 10, 2.00,  1200.00), (9, 10, 5.00, 700.00);

INSERT INTO pedidos (id, fecha_pedido, hora_pedido, total, fecha_entrega, hora_entrega, estado_pedido, sub_total, descuento, empleados_id, clientes_frecuentes_id) VALUES
(1,  '2026-09-20', '10:00:00', 36000.00, '2026-09-25', '17:00:00', 'entregado', 36000.00,  0,  1, 6),
(2,  '2026-10-01', '11:15:00', 28080.00, '2026-10-04', '09:00:00', 'entregado', 31200.00, 10,  3, 1),
(3,  '2026-10-06', '15:30:00', 13000.00, '2026-10-10', '18:00:00', 'cancelado', 13000.00,  0,  5, 7),
(4,  '2026-10-10', '09:45:00', 25900.00, '2026-10-15', '08:00:00', 'entregado', 25900.00,  0,  1, 8),
(5,  '2026-10-18', '12:00:00', 26010.00, '2026-10-26', '16:00:00', 'entregado', 30600.00, 15,  7, 3),
(6,  '2026-10-22', '10:30:00', 28800.00, '2026-10-28', '09:00:00', 'pendiente', 28800.00,  0,  3, 10),
(7,  '2026-10-23', '17:00:00', 22680.00, '2026-10-27', '18:30:00', 'listo',     25200.00, 10,  5, 9),
(8,  '2026-10-24', '09:20:00', 18525.00, '2026-10-30', '10:00:00', 'pendiente', 19500.00,  5, 10, 2),
(9,  '2026-10-25', '14:10:00', 86400.00, '2026-10-31', '20:00:00', 'pendiente', 86400.00,  0,  1, 6),
(10, '2026-10-26', '11:00:00', 30240.00, '2026-11-02', '08:30:00', 'pendiente', 33600.00, 10,  7, 4);

INSERT INTO detalle_pedido (productos_id, pedidos_id, cantidad, precio_unitario) VALUES
-- Pedido 1
(5, 1,  2.00, 18000.00),
-- Pedido 2
(2, 2, 36.00,   600.00), (10, 2, 12.00,  800.00),
-- Pedido 3
(6, 3,  2.00,  6500.00),
-- Pedido 4
(1, 4,  5.00,  3500.00), (9, 4, 12.00,   700.00),
-- Pedido 5
(8, 5, 24.00,   900.00), (7, 5,  1.00,  9000.00),
-- Pedido 6
(2, 6, 48.00,   600.00),
-- Pedido 7
(5, 7,  1.00, 18000.00), (3, 7,  6.00,  1200.00),
-- Pedido 8
(4, 8,  2.00,  4500.00), (1, 8,  3.00,  3500.00),
-- Pedido 9
(5, 9,  3.00, 18000.00), (8, 9, 36.00,   900.00),
-- Pedido 10
(10, 10, 24.00,  800.00), (2, 10, 24.00,  600.00);