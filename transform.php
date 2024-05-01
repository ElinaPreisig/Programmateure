<?php
include 'config.php'; 

// Aktuelles Datum generieren
$currentDate = date('Y-m-d');

// Hier erfolgt der API-Aufruf und die Datenextraktion -- DYNAMISCHER LINK MÖGLICH???
$apiData = file_get_contents("https://il.srgssr.ch/integrationlayer/2.0/srf/songList/radio/byChannel/69e8ac16-4327-4af4-b873-fd5cd6e895a7?from={$currentDate}T00%3A00%3A00%2B02%3A00&to={$currentDate}T23%3A59%3A00%2B02%3A00&pageSize=500");

// Die Daten werden in ein Array konvertiert
$data = json_decode($apiData, true);

// Funktion zur Umwandlung des Datums in das SQL-Datumsformat
function formatDate($date) {
    $dateTime = new DateTime($date);
    return $dateTime->format('Y-m-d H:i:s');
}

// Initialisiert ein Array, um die transformierten Daten zu speichern
$transformedData = [];

// Überprüft, ob die Daten vorhanden sind und ob songList ein Array ist
if (isset($data['songList']) && is_array($data['songList'])) {
    // Iteriert durch die songList
    foreach ($data['songList'] as $song) {
        // Überprüft, ob 'title' im Array vorhanden ist, bevor darauf zugegriffen wird
        $title = isset($song['title']) ? $song['title'] : "Unbekannter Titel";

        // Überprüft, ob 'artist' und 'name' im Array vorhanden sind, bevor darauf zugegriffen wird
        $artist = isset($song['artist']['name']) ? $song['artist']['name'] : "Unbekannter Künstler";

        // Überprüft, ob 'isPlayingNow' im Array vorhanden ist, bevor darauf zugegriffen wird
        $isPlayingNow = isset($song['isPlayingNow']) ? ($song['isPlayingNow'] ? 1 : 0) : 0;

        // Überprüft, ob 'date' im Array vorhanden ist, bevor darauf zugegriffen wird
        $playDate = isset($song['date']) ? formatDate($song['date']) : "";

        // Konstruiert die neue Struktur mit allen angegebenen Feldern, einschließlich des neuen 'condition'-Feldes
        // Hinzufügen der transformierten Daten zum Array
        $transformedData[] = [
            'title' => $title,
            'artist' => $artist,
            'is_playing_now' => $isPlayingNow,
            'play_date' => $playDate
        ];
    }
}

// Kodiert die transformierten Daten in JSON
$jsonData = json_encode($transformedData, JSON_PRETTY_PRINT);

// Gibt die JSON-Daten zurück, anstatt sie auszugeben
return $jsonData;