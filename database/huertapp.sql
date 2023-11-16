-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: huertapp
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `calendar`
--

DROP TABLE IF EXISTS `calendar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calendar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_orchard` int NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `start_date` varchar(45) DEFAULT NULL,
  `end_date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendar`
--

LOCK TABLES `calendar` WRITE;
/*!40000 ALTER TABLE `calendar` DISABLE KEYS */;
/*!40000 ALTER TABLE `calendar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orchards`
--

DROP TABLE IF EXISTS `orchards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orchards` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orchard_name` varchar(55) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orchards`
--

LOCK TABLES `orchards` WRITE;
/*!40000 ALTER TABLE `orchards` DISABLE KEYS */;
/*!40000 ALTER TABLE `orchards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `planner`
--

DROP TABLE IF EXISTS `planner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `planner` (
  `id` int NOT NULL,
  `xSize` int DEFAULT NULL,
  `ySize` int DEFAULT NULL,
  `grid` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planner`
--

LOCK TABLES `planner` WRITE;
/*!40000 ALTER TABLE `planner` DISABLE KEYS */;
INSERT INTO `planner` VALUES (1,12,12,'[{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/tomato.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/tomato.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null}]'),(2,14,13,'[{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/lettuce.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/tomato.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/tomato.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null}]'),(3,7,8,'[{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/tomato.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/tomato.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/tomato.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null}]'),(50,7,8,'[{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/tomato.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/carrot.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/broccoli.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/beet.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/tomato.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/carrot.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/broccoli.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/beet.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/tomato.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/carrot.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/broccoli.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/beet.png\"},{\"background\":\"/images/plannerImgs/path.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/path.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/path.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/path.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/path.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/path.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/path.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/tomato.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/carrot.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/broccoli.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/beet.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/tomato.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/carrot.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/broccoli.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/beet.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/tomato.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/carrot.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/broccoli.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":null},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/beet.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/oregano.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/pumpkin.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/oregano.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/pumpkin.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/oregano.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/pumpkin.png\"},{\"background\":\"/images/plannerImgs/dirt.jpg\",\"plant\":\"/images/plannerImgs/oregano.png\"}]');
/*!40000 ALTER TABLE `planner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plants`
--

DROP TABLE IF EXISTS `plants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_orchard` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` text,
  `image` text,
  `start_date` varchar(45) NOT NULL,
  `end_date` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plants`
--

LOCK TABLES `plants` WRITE;
/*!40000 ALTER TABLE `plants` DISABLE KEYS */;
INSERT INTO `plants` VALUES (37,2,'Lechuga','','https://okdiario.com/img/recetas/2016/09/18/lechuga-boston.jpg','30/09/2022','13/10/2022'),(38,2,'Tomate','','','30/09/2022','13/10/2022'),(40,50,'Papapapapp','papapapapa','https://upload.wikimedia.org/wikipedia/commons/6/6c/Portrait_of_Pope_Francis_%282021%29.jpg','31/03/2022','07/09/223');
/*!40000 ALTER TABLE `plants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_orchard` int NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(60) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_orchards`
--

DROP TABLE IF EXISTS `user_orchards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_orchards` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_orchard` int NOT NULL,
  `user_email` varchar(65) NOT NULL,
  `user_role` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_orchards`
--

LOCK TABLES `user_orchards` WRITE;
/*!40000 ALTER TABLE `user_orchards` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_orchards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `user_password` varchar(150) NOT NULL,
  `user_email` varchar(65) NOT NULL,
  `user_photo` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-06 18:23:59
