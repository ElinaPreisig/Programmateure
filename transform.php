<?php
include 'extract.php'; 

// Funktion zur Umwandlung des Datums in das SQL-Datumsformat
function formatDate($date) {
    $dateTime = new DateTime($date);
    return $dateTime->format('Y-m-d H:i:s');
}

// Funktion zur Formatierung des Titels und des Künstlers
function formatTitleArtist($str) {
    // Zuerst alle Buchstaben in Kleinbuchstaben umwandeln
    $str = strtolower($str);
    // Dann den ersten Buchstaben jedes Wortes in Großbuchstaben umwandeln
    return ucwords($str);
}

// Initialisiert ein Array, um die transformierten Daten zu speichern
$transformedData = [];

// Überprüft, ob die Daten vorhanden sind und ob songList ein Array ist
if (isset($data['songList']) && is_array($data['songList'])) {
    // Iteriert durch die songList
    foreach ($data['songList'] as $song) {
        /// Überprüft, ob 'title' im Array vorhanden ist, bevor darauf zugegriffen wird
        $title = isset($song['title']) ? formatTitleArtist($song['title']) : "Unbekannter Titel";

        // Überprüft, ob 'artist' und 'name' im Array vorhanden sind, bevor darauf zugegriffen wird
        $artist = isset($song['artist']['name']) ? formatTitleArtist($song['artist']['name']) : "Unbekannter Künstler";

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
