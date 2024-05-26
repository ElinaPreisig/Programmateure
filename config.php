<?php

// Definition der Verbindungsparameter für die Datenbank
$db_host     = 'localhost';     // Hostserver, auf dem die DB läuft.
// «localhost» bedeutet: die selbe Serveradresse, auf dem auch die Seiten gespeichert sind

//$db_name = wegen öffentlichem Git Respository entfernt
//$db_user = wegen öffentlichem Git Respository entfernt 
//$db_pass = wegen öffentlichem Git Respository entfernt

$db_charset  = 'utf8mb4';       

// DSN (Datenquellenname) für PDO
$dsn = "mysql:host=$db_host;dbname=$db_name;charset=$db_charset"; 

// Optionen für PDO
$options = [
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_EMULATE_PREPARES   => false
];
?>
