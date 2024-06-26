-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: idw
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alojamientos`
--

DROP TABLE IF EXISTS `alojamientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alojamientos` (
  `idAlojamiento` int NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(255) NOT NULL,
  `Descripcion` text,
  `Latitud` decimal(10,8) NOT NULL,
  `Longitud` decimal(11,8) NOT NULL,
  `PrecioPorDia` decimal(10,2) NOT NULL,
  `CantidadDormitorios` int NOT NULL,
  `CantidadBanios` int NOT NULL,
  `Estado` enum('Disponible','Reservado') NOT NULL,
  `idTipoAlojamiento` int DEFAULT NULL,
  PRIMARY KEY (`idAlojamiento`),
  KEY `idTipoAlojamiento` (`idTipoAlojamiento`),
  CONSTRAINT `alojamientos_ibfk_1` FOREIGN KEY (`idTipoAlojamiento`) REFERENCES `tiposalojamiento` (`idTipoAlojamiento`)
) ENGINE=InnoDB AUTO_INCREMENT=600415 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alojamientos`
--

LOCK TABLES `alojamientos` WRITE;
/*!40000 ALTER TABLE `alojamientos` DISABLE KEYS */;
INSERT INTO `alojamientos` VALUES (304029,'Casa rural entero en Exaltación de la Cruz, Argentina','Se trata de una hermosa casa con 3 dormitorios. Una habitación principal con cama doble, con amplios ventanales al jardín. Una segunda habitación con 2 camas individuales y una habitación en planta alta con cama queen. En la casa entran cómodas 6 personas, se puede agregar un colchón extra para un niño pequeño de ser necesario.',80.00000000,600.00000000,950.00,2,2,'Disponible',8),(397865,'Hotel La Fachada','Hermoso hotel a las orillas de la playa',90.00000000,800.00000000,899.00,0,1,'Disponible',7),(542648,'Casa rural entero en Tandil, Argentina','Casa en las Sierras de Tandil / 160 m² / Predio privado / En medio de la naturaleza / Increíbles vistas.',50.00000000,500.00000000,599.00,3,2,'Reservado',10),(600414,'Hotel La Fachada 2','Hermoso hotel a las orillas del mar',70.00000000,400.00000000,750.00,2,1,'Disponible',7);
/*!40000 ALTER TABLE `alojamientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alojamientoservicios`
--

DROP TABLE IF EXISTS `alojamientoservicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alojamientoservicios` (
  `idAlojamientoServicio` int NOT NULL AUTO_INCREMENT,
  `idAlojamiento` int DEFAULT NULL,
  `idServicio` int DEFAULT NULL,
  PRIMARY KEY (`idAlojamientoServicio`),
  KEY `idAlojamiento` (`idAlojamiento`),
  KEY `idServicio` (`idServicio`),
  CONSTRAINT `alojamientoservicios_ibfk_1` FOREIGN KEY (`idAlojamiento`) REFERENCES `alojamientos` (`idAlojamiento`),
  CONSTRAINT `alojamientoservicios_ibfk_2` FOREIGN KEY (`idServicio`) REFERENCES `servicios` (`idServicio`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alojamientoservicios`
--

LOCK TABLES `alojamientoservicios` WRITE;
/*!40000 ALTER TABLE `alojamientoservicios` DISABLE KEYS */;
INSERT INTO `alojamientoservicios` VALUES (1,397865,1),(2,397865,2),(3,304029,4),(4,304029,5),(5,304029,3),(6,600414,2),(7,600414,5),(8,600414,1),(9,600414,4),(10,304029,2),(11,304029,6),(12,304029,5);
/*!40000 ALTER TABLE `alojamientoservicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `idImagen` int NOT NULL AUTO_INCREMENT,
  `idAlojamiento` int DEFAULT NULL,
  `RutaArchivo` varchar(255) NOT NULL,
  PRIMARY KEY (`idImagen`),
  KEY `idAlojamiento` (`idAlojamiento`),
  CONSTRAINT `imagenes_ibfk_1` FOREIGN KEY (`idAlojamiento`) REFERENCES `alojamientos` (`idAlojamiento`)
) ENGINE=InnoDB AUTO_INCREMENT=933573 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (117639,397865,'https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://images.ntmllc.com/v4/hotel/226/226890/226890_EXT_Z6E8F6/Hotel-Playa-Mazatlan-Exterior.jpg?tr=w-780%2Ch-437%2Cfo-auto'),(428846,542648,'https://a0.muscache.com/im/pictures/miso/Hosting-558098563375118476/original/35b3b01a-d366-409c-a065-ddab13a3bde1.jpeg?im_w=1200'),(538668,304029,'https://a0.muscache.com/im/pictures/8afd5121-a173-46c8-9d20-510f11f47358.jpg?im_w=1200'),(933572,600414,'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1090263081392277324/original/e07d71f4-8637-4b36-b102-da9b2017e61e.png?im_w=720');
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicios`
--

DROP TABLE IF EXISTS `servicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicios` (
  `idServicio` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`idServicio`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicios`
--

LOCK TABLES `servicios` WRITE;
/*!40000 ALTER TABLE `servicios` DISABLE KEYS */;
INSERT INTO `servicios` VALUES (1,'Limpieza'),(2,'Cochera'),(3,'Vista al jardín'),(4,'Pileta privada'),(5,'Wifi'),(6,'Parrilla');
/*!40000 ALTER TABLE `servicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiposalojamiento`
--

DROP TABLE IF EXISTS `tiposalojamiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tiposalojamiento` (
  `idTipoAlojamiento` int NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`idTipoAlojamiento`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiposalojamiento`
--

LOCK TABLES `tiposalojamiento` WRITE;
/*!40000 ALTER TABLE `tiposalojamiento` DISABLE KEYS */;
INSERT INTO `tiposalojamiento` VALUES (7,'Hotel'),(8,'Cabaña'),(10,'Casa');
/*!40000 ALTER TABLE `tiposalojamiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `correo` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'ignac1997nacho@gmail.com','1234'),(2,'joelChassman@gmail.com','1999');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-25 22:09:54
