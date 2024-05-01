<?php
include 'config.php'; // Lade die Konfigurationsdatei

function fetchSongData() {
    // Aktuelles Datum generieren
    $currentDate = date('Y-m-d');

    // Dynamischer Link mit dem aktuellen Datum
    $url = "https://il.srgssr.ch/integrationlayer/2.0/srf/songList/radio/byChannel/69e8ac16-4327-4af4-b873-fd5cd6e895a7?from={$currentDate}T00%3A00%3A00%2B02%3A00&to={$currentDate}T23%3A59%3A00%2B02%3A00&pageSize=500";

    // Initialisiert eine cURL-Sitzung
    $ch = curl_init($url);

    // Setzt Optionen
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Führt die cURL-Sitzung aus und erhält den Inhalt
    $response = curl_exec($ch);

    // Überprüft auf cURL-Fehler
    if($response === false) {
        die('Fehler beim Abrufen der Daten');
    }

    // Schließt die cURL-Sitzung
    curl_close($ch);

    // Konvertiert die JSON-Antwort in ein assoziatives Array
    $data = json_decode($response, true);

    // Überprüft auf JSON-Dekodierungsfehler
    if($data === null) {
        die('Fehler beim Dekodieren der JSON-Daten');
    }

    // Gibt die Daten zurück
    return $data;

    // Dekodiert die JSON-Antwort und gibt Daten zurück - Lösung Nick; Nötig hier?
    // return json_decode($response, true);
}

// Gibt die Daten zurück, wenn dieses Skript eingebunden ist - Lösung Nick; Nötig hier?
// return fetchSongData();

// Gibt die Daten aus
echo json_encode(fetchSongData());

?>