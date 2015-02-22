-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 25, 2014 at 03:36 PM
-- Server version: 5.1.41
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `createwealth`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(250) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(300) NOT NULL,
  `user_mobile_no` varchar(250) NOT NULL,
  `user_email` varchar(300) NOT NULL,
  `user_city` varchar(300) NOT NULL,
  `user_product` varchar(300) NOT NULL,
  `user_term` varchar(300) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=34 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_mobile_no`, `user_email`, `user_city`, `user_product`, `user_term`) VALUES
(21, 'Test', '1234567890', 'salim0869@gmail.com', 'bangalore', 'Nifty,Agri', ''),
(20, 'Test', '1234567890', 'ds98409@gmail.com', 'bangalore', 'Nifty,Metals', ''),
(18, 'Test', '1234567890', 'salim0869@gmail.com', 'bangalore', 'Nifty', ''),
(19, 'Test', '1234567890', 'salim0869@gmail.com', 'bangalore', 'Nifty', ''),
(22, 'Test', '1234567890', 'salim0869@gmail.com', 'banf', 'Nifty,Metals,Energy', ''),
(23, 'Test', '1234567890', 'salim0869@gmail.com', 'bangalore', 'Nifty,Metals', ''),
(24, 'Test', '1234567890', 'test@gmail.com', 'bangalore', 'Nifty,Metals', ''),
(25, 'Test', '1234567890', 'test@gmail.com', 'bangalore', 'Nifty,Metals', ''),
(26, 'Test', '1234567890', 'test@gmail.com', 'bangalore', 'Nifty,Metals', ''),
(27, 'Test', '1234567890', 'test@gmail.com', 'bangalore', 'Nifty,Metals', ''),
(28, 'Test', '1234567890', 'test@gmail.com', 'bangalore', 'Nifty,Metals', ''),
(29, 'Test', '1234567890', 'test@gmail.com', 'banf', 'Nifty,Metals', ''),
(30, 'Test', '1234567890', 'test@gmail.com', 'bangalore', 'Nifty,Metals,Energy', ''),
(31, 'test', '1234567890', 'test@gmail.com', 'bangalore', 'Equity,Nifty,Agri,Bullions,Metals,Energy,Options', ''),
(32, 'Test', '8088109613', 'test@gmail.com', 'bangalore', 'Nifty,Metals,Energy', ''),
(33, 'digvijay', '1234567890', 'test@gmail.com', 'bangalore', 'Nifty,Metals', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
