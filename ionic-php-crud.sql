-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 09-03-2022 a las 21:34:04
-- Versión del servidor: 8.0.21
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ionic-php-crud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `referencias`
--

DROP TABLE IF EXISTS `referencias`;
CREATE TABLE IF NOT EXISTS `referencias` (
  `idreferencia` bigint NOT NULL AUTO_INCREMENT,
  `titulopub` varchar(100) NOT NULL,
  `autores` varchar(100) NOT NULL,
  `tipopub` int NOT NULL,
  `eventorevista` varchar(100) DEFAULT NULL,
  `doi` varchar(100) DEFAULT NULL,
  `anyopub` int NOT NULL,
  PRIMARY KEY (`idreferencia`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `referencias`
--

INSERT INTO `referencias` (`idreferencia`, `titulopub`, `autores`, `tipopub`, `eventorevista`, `doi`, `anyopub`) VALUES
(1, 'Cloud Computing for Emerging Mobile Cloud Apps', 'Mehdi Bahrami', 2, 'IEEE International Conference on Mobile Cloud Computing, Services, and Engineering', '10.1109/MobileCloud.2015.40', 2015),
(2, 'Review on impact of nanoscale on CMOS circuits in VLSI design', 'Lakshminarayana G, Sribindu S, Suneel L, Krishna S.G.', 3, 'AIP Conference Proceedings', '10.1063/5.0058029', 2021),
(3, 'Scaling beyond 7nm Node: An Overview of Gate-All-Around FETs', 'Hu W, Li F.', 3, '2021 9th International Symposium on Next Generation Electronics, ISNE 2021', '10.1109/ISNE48910.2021.9493305', 2021),
(8, 'Intelligent Routing based on Reinforcement Learning for Software-Defined Networking. IEEE Transactio', 'Daniela M. Casas-Velasco, Oscar Mauricio Caicedo Rendon, Nelson L. S. da Fonseca', 3, NULL, '10.1109/tnsm.2020.3036911 ', 2020),
(9, 'publicación de prueba', 'autor, de, prueba', 1, 'evento', '12345', 2022);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'admin', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'),
(2, 'operario', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
