<?php
// Bindet die Datenbankkonfiguration ein
include 'config.php'; 

// Transformations-Skript  als 'transform.php' einbinden
$jsonData = include('transform.php');

// Dekodiert die JSON-Daten zu einem Array
$dataArray = json_decode($jsonData, true);

try {
    // Erstellt eine neue PDO-Instanz mit der Konfiguration aus config.php
    $pdo = new PDO($dsn, $db_user, $db_pass, $options);

    // SQL-Query mit Platzhaltern für das Einfügen von Daten
    $sql = "INSERT INTO Song (title, artist, is_playing_now, play_date) VALUES (?, ?, ?, ?)";

    // Bereitet die SQL-Anweisung vor
    $stmt = $pdo->prepare($sql);

    // Fügt jedes Element im Array in die Datenbank ein
    foreach ($dataArray as $item) {
        $stmt->execute([
            $item['title'],
            $item['artist'],
            $item['is_playing_now'],
            $item['play_date']
        ]);
    }

    echo "Daten erfolgreich eingefügt.";
} catch (PDOException $e) {
    die("Verbindung zur Datenbank konnte nicht hergestellt werden: " . $e->getMessage());
}
?>