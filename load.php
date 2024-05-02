<?php

// Transformations-Skript  als 'transform.php' einbinden
include 'transform.php';

// Dekodiert die JSON-Daten zu einem Array
$dataArray = json_decode($jsonData, true);

try {
    // Erstellt eine neue PDO-Instanz mit der Konfiguration aus config.php
    $pdo = new PDO($dsn, $db_user, $db_pass, $options);

    // Startet eine Transaktion, um Konsistenz zu gewährleisten
    $pdo->beginTransaction();

    // Setzt alle is_playing_now-Einträge auf 0
    $sqlReset = "UPDATE Song SET is_playing_now = 0";
    $stmtReset = $pdo->prepare($sqlReset);
    $stmtReset->execute();

    // Abfrage, um vorhandene Datensätze abzurufen
    $existingDatesQuery = "SELECT play_date FROM Song";
    $existingDatesStmt = $pdo->query($existingDatesQuery);
    $existingDates = $existingDatesStmt->fetchAll(PDO::FETCH_COLUMN);

    // SQL-Query mit Platzhaltern für das Einfügen von Daten
    $sqlInsert = "INSERT INTO Song (title, artist, is_playing_now, play_date) VALUES (?, ?, ?, ?)";
    $stmtInsert = $pdo->prepare($sqlInsert);

    // Aktuelle Zeit holen
    $currentTime = time();

    // Fügt jedes Element im Array in die Datenbank ein, wenn das play_date nicht vorhanden ist
    foreach ($dataArray as $item) {
        if (!in_array($item['play_date'], $existingDates)) {
            // Zeitstempel des Songs in UNIX-Zeit umwandeln
            $songTime = strtotime($item['play_date']);

            // Zeitunterschied in Minuten berechnen
            $differenceInMinutes = ($currentTime - $songTime) / 60;

            // Überprüfen, ob der Zeitunterschied kleiner als 3 Minuten ist
            if ($differenceInMinutes <= 3) {
                // Wenn ja, setze is_playing_now auf 1, sonst auf 0
                $isPlayingNow = 1;
            } else {
                $isPlayingNow = 0;
            }

            // Daten in die Datenbank einfügen
            $stmtInsert->execute([
                $item['title'],
                $item['artist'],
                $isPlayingNow,
                $item['play_date']
            ]);
        }
    }

    $pdo->commit();

    echo "Daten erfolgreich eingefügt.";
} catch (PDOException $e) {
    die("Verbindung zur Datenbank konnte nicht hergestellt werden: " . $e->getMessage());
}
?>
