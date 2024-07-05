-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-07-2024 a las 06:22:49
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fitemporium`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `ID_Cliente` int(11) NOT NULL,
  `Nombre` varchar(25) NOT NULL,
  `Apellido` varchar(25) NOT NULL,
  `Telefono` varchar(25) NOT NULL,
  `Correo_electronico` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`ID_Cliente`, `Nombre`, `Apellido`, `Telefono`, `Correo_electronico`) VALUES
(1, 'Erley', 'Valeta', '555-1234', 'juan.perez@example.com'),
(2, 'Laura', 'Quintero', '555-5678', 'maria.gomez@example.com'),
(3, 'Miguel', 'Madroñero', '555-9101', 'carlos.rodriguez@example.'),
(4, 'Jhoan', 'Gomez', '555-1121', 'ana.lopez@example.com'),
(5, 'Luis', 'Martínez', '555-3141', 'luis.martinez@example.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordenes`
--

CREATE TABLE `ordenes` (
  `ID_Orden` int(11) NOT NULL,
  `ID_Productos` int(11) NOT NULL,
  `Fecha_orden` date DEFAULT NULL,
  `Cantidad_orden` int(11) DEFAULT NULL,
  `Estado_orden` varchar(25) DEFAULT NULL,
  `ID_Cliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `ordenes`
--

INSERT INTO `ordenes` (`ID_Orden`, `ID_Productos`, `Fecha_orden`, `Cantidad_orden`, `Estado_orden`, `ID_Cliente`) VALUES
(1, 1, '2024-01-15', 5, 'Completada', 0),
(2, 2, '2024-02-20', 10, 'En proceso', 0),
(3, 3, '2024-03-10', 2, 'Cancelada', 0),
(4, 4, '2024-04-05', 1, 'Pendiente', 0),
(5, 5, '2024-05-25', 8, 'Completada', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `ID_Pago` int(11) NOT NULL,
  `ID_Orden` int(11) DEFAULT NULL,
  `Monto` decimal(10,0) NOT NULL,
  `Fecha_pago` date DEFAULT NULL,
  `Metodo_pago` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`ID_Pago`, `ID_Orden`, `Monto`, `Fecha_pago`, `Metodo_pago`) VALUES
(1, 1, 50000, '2024-01-16', 'Tarjeta de crédito'),
(2, 2, 30000, '2024-02-21', 'PayPal'),
(3, 3, 15000, '2024-03-11', 'Transferencia bancaria'),
(4, 4, 40000, '2024-04-06', 'Efectivo'),
(5, 5, 20000, '2024-05-26', 'Tarjeta de débito');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `ID_Producto` int(11) NOT NULL,
  `Nombrep` varchar(15) NOT NULL,
  `Valor_Unitario` decimal(10,2) NOT NULL,
  `Imagen` varchar(30) NOT NULL,
  `Descripcion` varchar(20) NOT NULL,
  `Stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`ID_Producto`, `Nombrep`, `Valor_Unitario`, `Imagen`, `Descripcion`, `Stock`) VALUES
(1, 'Camiseta Deport', 0.00, 'img/camiseta1.jpg', 'Camiseta de material', 50),
(2, 'Pantalones Cort', 0.00, 'img/pantalones_cortos1.jpg', 'Pantalones cortos li', 40),
(3, 'Leggings de Com', 0.00, 'img/leggings1.jpg', 'Leggings ajustados q', 30),
(4, 'Sudadera con Ca', 0.00, 'img/sudadera1.jpg', 'Sudadera con capucha', 25),
(5, 'Top Deportivo', 0.00, 'img/top1.jpg', 'Top deportivo con so', 45),
(6, 'Guantes de Entr', 0.00, 'img/guantes1.jpg', 'Guantes para protege', 60),
(7, 'Calcetines Anti', 0.00, 'img/calcetines1.jpg', 'Calcetines con agarr', 80),
(8, 'Chaqueta Deport', 0.00, 'img/chaqueta1.jpg', 'Chaqueta ligera y re', 20),
(9, 'Bandas de Resis', 0.00, 'img/bandas1.jpg', 'Bandas elásticas par', 70),
(10, 'Mallas Deportiv', 0.00, 'img/mallas1.jpg', 'Mallas con tecnologí', 35),
(11, 'Camiseta Deport', 0.00, 'img/camiseta1.jpg', 'Camiseta de material', 50),
(12, 'Pantalones Cort', 0.00, 'img/pantalones_cortos1.jpg', 'Pantalones cortos li', 40),
(13, 'Leggings de Com', 0.00, 'img/leggings1.jpg', 'Leggings ajustados q', 30),
(14, 'Sudadera con Ca', 0.00, 'img/sudadera1.jpg', 'Sudadera con capucha', 25),
(15, 'Top Deportivo', 0.00, 'img/top1.jpg', 'Top deportivo con so', 45);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shopping_cart`
--

CREATE TABLE `shopping_cart` (
  `ID_Carrito` int(11) NOT NULL,
  `Valor_Total` decimal(10,2) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `ID_Producto` int(11) NOT NULL,
  `ID_Cliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`ID_Cliente`);

--
-- Indices de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  ADD PRIMARY KEY (`ID_Orden`),
  ADD KEY `ID_Productos` (`ID_Productos`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`ID_Pago`),
  ADD KEY `ID_Orden` (`ID_Orden`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`ID_Producto`);

--
-- Indices de la tabla `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD PRIMARY KEY (`ID_Carrito`),
  ADD KEY `ID_Producto` (`ID_Producto`),
  ADD KEY `clientes_ibfk_1` (`ID_Cliente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `ID_Cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  MODIFY `ID_Orden` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `ID_Pago` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `ID_Producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `shopping_cart`
--
ALTER TABLE `shopping_cart`
  MODIFY `ID_Carrito` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ordenes`
--
ALTER TABLE `ordenes`
  ADD CONSTRAINT `ordenes_ibfk_2` FOREIGN KEY (`ID_Productos`) REFERENCES `productos` (`ID_Producto`);

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `pagos_ibfk_1` FOREIGN KEY (`ID_Orden`) REFERENCES `ordenes` (`ID_Orden`);

--
-- Filtros para la tabla `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`ID_Cliente`) REFERENCES `clientes` (`ID_Cliente`),
  ADD CONSTRAINT `shopping_cart_ibfk_1` FOREIGN KEY (`ID_Cliente`) REFERENCES `shopping_cart` (`ID_Carrito`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
