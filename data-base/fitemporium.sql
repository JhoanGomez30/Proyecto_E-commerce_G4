-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-07-2024 a las 03:34:00
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

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
  `id_cliente` bigint(20) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `correo_electronico` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordenes`
--

CREATE TABLE `ordenes` (
  `orden_id` bigint(20) NOT NULL,
  `cantidad_orden` bigint(20) NOT NULL,
  `estado_orden` varchar(255) NOT NULL,
  `fecha_orden` varchar(255) NOT NULL,
  `producto_id` bigint(20) NOT NULL,
  `id_orden` bigint(20) DEFAULT NULL,
  `producto_orden_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `id_pago` int(11) NOT NULL,
  `fecha_pago` varchar(255) NOT NULL,
  `metodo_pago` varchar(255) NOT NULL,
  `monto` bigint(20) NOT NULL,
  `id_orden` bigint(20) NOT NULL,
  `cliente_pago_id` bigint(20) DEFAULT NULL,
  `orden_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` bigint(20) NOT NULL,
  `descripcion` varchar(600) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `valor_unitario` float DEFAULT NULL,
  `categoria` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `descripcion`, `imagen`, `nombre`, `stock`, `valor_unitario`, `categoria`) VALUES
(3, 'T-shirt, la comodidad necesaria para tus entrenamientos', 'https://cdn.shopify.com/s/files/1/1367/5207/files/PowerT-ShirtGSTitaniumBlueA4A9Q-UCMQ-0067_0c35b9b9-b2b4-4533-a3d5-15a809cb6e3b_1664x.jpg?v=1705568039', 'Power T-Shirt', 14, 150000, 'hombre'),
(6, 'whatever', '../assets/img/imgProduct2.webp', 'CROP MESH TANK', 5, 450, 'mujer'),
(7, 'whatever', 'https://cdn.shopify.com/s/files/1/1367/5207/files/BlurSeamlessShortGSIrisBlue_GSPowderedLilacB9A2D-UCVV_1664x.jpg?v=1717571493', 'BLUR SEAMLESS SHORTS', 5, 550000, 'mujer'),
(8, 'whatever', 'https://cdn.shopify.com/s/files/1/1367/5207/files/VitalSeamlessSportsBraAwBlackMarlBlackMarlB3A4K-BBF3-1311_9b149b64-3f1a-4d14-af56-4e23de969d99_1664x.jpg?v=1702281430', 'VITAL SEAMLESS 2.0 V ', 5, 450000, 'mujer'),
(9, 'whatever', 'https://cdn.shopify.com/s/files/1/1367/5207/files/VitalSeamlessSportsBraAwBrightFuchsia-MarlB3A4K-KBM5.81_2538fca1-1bd1-4b74-ad18-4b8d026d2266_1664x.jpg?v=1686821446', 'VITAL SEAMLESS 1.0 V', 5, 470000, 'mujer'),
(10, 'whatever', 'https://cdn.shopify.com/s/files/1/1367/5207/products/GfxFractionSportsBraWhiteB3A6Y-WBBM-0902.92_5f6561a4-4a84-425e-9e40-cec23185c2cd_1664x.jpg?v=1674463026', 'FRACTION SPORTS BRA', 5, 465000, 'mujer'),
(11, 'whatever', 'https://cdn.shopify.com/s/files/1/1367/5207/products/GfxFractionSportsBraWhiteB3A6Y-WBBM-0902.92_5f6561a4-4a84-425e-9e40-cec23185c2cd_1664x.jpg?v=1674463026', 'FRACTION SPORTS BRA', 5, 460000, 'mujer'),
(12, 'whatever', 'https://cdn.shopify.com/s/files/1/1367/5207/files/SweatSeamlessLonglineSportsBraGSWashedStoneBrownB4A5B-NBY51186_5e70d935-d009-4c11-b84f-55440590efb8_1664x.jpg?v=1701441715', 'SWEAT SEAMLESS', 5, 600000, 'mujer'),
(13, 'whatever', 'https://cdn.shopify.com/s/files/1/1367/5207/files/SweatSeamlessLonglineBraBlack-B4A5B-BBBB-0552.50_8990e9d1-583f-4d99-99a1-c27cd5cc3d11_1664x.jpg?v=1702639262', 'SWEAT SEAMLESS', 5, 200000, 'mujer'),
(28, 'Es un suplemento nutricional ampliamente reconocido por su capacidad para promover la salud en diversas áreas, en especial el apoyo a la función cerebral y cardiovascular.', 'https://cdn.miproteina.com.co/storage/images/products/omega-3-30-serv.jpg?width=400&height=400?width=612&quality=70', 'OMEGA 3', 3, 70000, 'Suplementos'),
(29, 'Glutamine 300grm es el aminoácido más abundante en el cuerpo y que juega un papel muy importante en la recuperación muscular. Previene el catabolismo y apoya el crecimiento muscular.', 'https://cdn.miproteina.com.co/storage/images/products/glutamine-300g-pure-bulk.jpg?width=400&height=400?width=612&quality=70', 'GLUTAMINE PURE BULK', 2, 89000, 'Suplementos'),
(30, 'Colgen es un colágeno tipo 1 y 3 ideal para reparar tejidos y sobre todo obtener una recuperación muscular mucho más rápida y segura. Los colágenos tipo I y III como Colgen.', 'https://cdn.miproteina.com.co/storage/images/products/plantilla-productos-pagina-web.jpg?width=400&height=400?width=612&quality=70', 'COLGEN', 5, 40000, 'Suplementos'),
(31, 'Creatine Powder de Optimum Nutrition es un producto a base de creatina monohidrato micronizada en polvo de alta calidad y fácil absorción.', 'https://cdn.miproteina.com.co/storage/images/products/creatine-powder-300grm.jpg?width=400&height=400?width=612&quality=70', 'CREATINE POWDER', 3, 135000, 'Suplementos'),
(32, 'Nitro Shock, es la más novedosa y poderosa fórmula de aminoácidos de cadena ramificada y glutamina jamás desarrollada.', 'https://cdn.miproteina.com.co/storage/images/products/nitro-shock-nuevo-02.jpg?width=400&height=400?width=612&quality=70', 'NITRO SHOCK', 5, 95000, 'Suplementos'),
(33, 'Este producto es un suplemento dietario. No es un medicamento y no suple una alimentación equilibrada.', 'https://cdn.miproteina.com.co/storage/images/products/l-arginine-healthy-sport-1.jpg?width=400&height=400?width=612&quality=70', 'L-ARGININA', 3, 77000, 'Suplementos'),
(34, 'Proteína vegana a base de quinoa, garbanzo y arvejas, de fácil digestión, que favorece la ganancia muscular y el rendimiento deportivo. Contiene remolacha, vitamina B12, magnesio, vitamina D, zinc y vitamina B9.', 'https://cdn.miproteina.com.co/storage/images/products/vegann-pro-22lb-nueva-presentacion.jpg?width=400&height=400?width=612&quality=70', 'VEGANN PRO', 5, 189000, 'Suplementos'),
(35, 'Mass evolution es ideal para cuando se trata de ganar masa muscular, peso y fuerza rápidamente, esto se logra cuando es consumido. Alternandolo junto con una dieta balanceada y una rutina de ejercicios.', 'https://cdn.miproteina.com.co/storage/images/products/mass-evolution-42lb-nueva.jpg?width=400&height=400?width=612&quality=70', 'MASS EVOLUTION', 3, 168000, 'Suplementos'),
(36, 'CellTech Performance Series 3lb es una fórmula de creatina científicamente diseñada para los deportistas que tienen dificultades para aumentar el tamaño y la fuerza muscular.', 'https://cdn.miproteina.com.co/storage/images/products/cell-tech-3lb.jpg?width=400&height=400?width=612&quality=70', 'CELLTECH PERFORMANCE', 0, 165000, 'Suplementos'),
(37, 'Syntha 6 de BSN presenta una nueva fórmula de proteína que combina a su vez 6 proteínas de asimilación rápida, media y lenta, pensadas para mantener los niveles de aminoácidos constantes y mejorar el estado anabólico por aumento de la síntesis de proteína.', 'https://cdn.miproteina.com.co/storage/images/products/syntha6-5lb.jpg?width=400&height=400?width=612&quality=70', 'SYNTHA 6', 5, 295000, 'Suplementos'),
(38, 'La bicicleta estatica indispensable para tus entrenamientos', 'https://sportfitness.co/cdn/shop/products/Bicicletaspinningurbino_540x.jpg?v=1612558220', 'Bicicleta Spinning', 8, 800000, 'maquinas'),
(39, 'Caminadora electrica ideal para cardio fuerte', 'https://sportfitness.co/cdn/shop/files/072250-1_1800x1800.jpg?v=1702907540', 'Caminadora', 9, 750000, 'maquinas'),
(40, 'Eliptica perfecta para que estes en forma', 'https://sportfitness.co/cdn/shop/products/070286-5_1800x1800.png?v=1657298463', 'Eliptica', 4, 650000, 'maquinas'),
(41, 'El banco con soporte para barra ideal para sacar tu PR', 'https://sportfitness.co/cdn/shop/files/071252_1800x1800.jpg?v=1705333140', 'Banco plano', 7, 2250000, 'maquinas'),
(42, 'Ideal para fortalecer tus piernas, con capacidad de 200kg', 'https://sportfitness.co/cdn/shop/files/071261_1800x1800.jpg?v=1705332891', 'Prensa Inclinada', 16, 6890300, 'maquinas'),
(43, 'Ideal para fortalecer tu tren inferior', 'https://sportfitness.co/cdn/shop/files/071750_fee981f4-7ba7-43ad-9924-21836adbafd8_1800x1800.jpg?v=1718634231', 'Maquina Flexo Extension de pierna', 7, 7800000, 'maquinas'),
(44, 'Perfecta para fortalecer tu tren superior', 'https://sportfitness.co/cdn/shop/products/071359_1800x1800.jpg?v=1659041861', 'Maquina de Poleas', 8, 9000000, 'maquinas'),
(45, 'Mauina ideal para tus rutinas intensivas en el tren inferior', 'https://sportfitness.co/cdn/shop/products/071230_1800x1800.jpg?v=1659038778', 'Maquia Pecho Inclinado', 13, 7500000, 'maquinas'),
(46, 'La maquina necesaria para un entrenamiento de alta intensidad que necesitan tus piernas', 'https://sportfitness.co/cdn/shop/files/071265_1800x1800.jpg?v=1705335810', 'Maquina Sentadilla Squat', 13, 6870000, 'maquinas'),
(47, 'La maquina necesaria para un entrenamiento de alta intensidad que necesitan tus piernas', 'https://sportfitness.co/cdn/shop/files/071264_360x.jpg?v=1705335709', 'Maquina Smith', 15, 6250000, 'maquinas'),
(48, 'Camiseta de manga larga con ajuste holgado para un estilo casual.', 'https://cdn.shopify.com/s/files/1/0156/6146/files/GFXDumbbellsLST-ShirtGSFadedBlueA5A4J-UCMG_1920x.jpg?v=1716981418', 'LONG SLEEVE T-SHIRT', 0, 144000, 'hombre');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shopping_cart`
--

CREATE TABLE `shopping_cart` (
  `id_carrito` bigint(20) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `id_producto` bigint(20) NOT NULL,
  `valor_total` float NOT NULL,
  `cliente_carrito_id` bigint(20) DEFAULT NULL,
  `producto_carrito_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  ADD PRIMARY KEY (`orden_id`),
  ADD KEY `FKicxi4fslpe07dnsbulr7k7g5h` (`id_orden`),
  ADD KEY `FKjiasbs9pwx1ql7gjmccau891j` (`producto_orden_id`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id_pago`),
  ADD KEY `FKcxk214mjdq1f09atu5vuolf6h` (`cliente_pago_id`),
  ADD KEY `FKgwc09q159u2vka6huvllyf6jy` (`orden_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD PRIMARY KEY (`id_carrito`),
  ADD KEY `FKhoh53xa2gqj8hx6c73xtvb3we` (`cliente_carrito_id`),
  ADD KEY `FKaf6js5smw26xjf5n4emgrfgkk` (`producto_carrito_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_cliente` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  MODIFY `orden_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id_pago` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `shopping_cart`
--
ALTER TABLE `shopping_cart`
  MODIFY `id_carrito` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ordenes`
--
ALTER TABLE `ordenes`
  ADD CONSTRAINT `FKicxi4fslpe07dnsbulr7k7g5h` FOREIGN KEY (`id_orden`) REFERENCES `clientes` (`id_cliente`),
  ADD CONSTRAINT `FKjiasbs9pwx1ql7gjmccau891j` FOREIGN KEY (`producto_orden_id`) REFERENCES `productos` (`id_producto`);

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `FKcxk214mjdq1f09atu5vuolf6h` FOREIGN KEY (`cliente_pago_id`) REFERENCES `clientes` (`id_cliente`),
  ADD CONSTRAINT `FKgwc09q159u2vka6huvllyf6jy` FOREIGN KEY (`orden_id`) REFERENCES `ordenes` (`orden_id`);

--
-- Filtros para la tabla `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD CONSTRAINT `FKaf6js5smw26xjf5n4emgrfgkk` FOREIGN KEY (`producto_carrito_id`) REFERENCES `productos` (`id_producto`),
  ADD CONSTRAINT `FKhoh53xa2gqj8hx6c73xtvb3we` FOREIGN KEY (`cliente_carrito_id`) REFERENCES `clientes` (`id_cliente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
