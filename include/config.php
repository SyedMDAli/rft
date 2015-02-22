<?php
if (!isset($_SESSION)) {
    session_start();
}
// local db
$database = "RiskFreeTrade";
$hostname = "localhost";
$username = "root";
$password = "mysql";

$con = mysql_connect($hostname, $username, $password);
if (!$con) {
    $ConnectionStatus = 'Disconnected';
    die('Could not connect:' . mysql_error());
} else {
    $ConnectionStatus = 'Connected';
}
mysql_select_db($database, $con);

?>
