<?php
// Verbindung zur Datenbank herstellen
include 'config.php'; 

try {
    // Erstellt eine neue PDO-Instanz mit der Konfiguration aus config.php
    $pdo = new PDO($dsn, $db_user, $db_pass, $options);

    // SQL-Query für den Top Song der Woche
    $sqlWeek = "SELECT title, artist, COUNT(*) AS play_count 
                FROM Song 
                WHERE play_date >= DATE_SUB(NOW(), INTERVAL 1 WEEK) 
                GROUP BY title, artist 
                ORDER BY play_count DESC 
                LIMIT 3";

    $stmtWeek = $pdo->query($sqlWeek);

    // Array für die Top Songs der Woche erstellen
    $topSongsWeek = $stmtWeek->fetchAll();

    // Platz 1 des Songs der Woche
    $topSongWeek1 = isset($topSongsWeek[0]) ? $topSongsWeek[0] : null;

    // Platz 2 des Songs der Woche
    $topSongWeek2 = isset($topSongsWeek[1]) ? $topSongsWeek[1] : null;

    // Platz 3 des Songs der Woche
    $topSongWeek3 = isset($topSongsWeek[2]) ? $topSongsWeek[2] : null;

    // SQL-Query für den Top Song des Monats
    $sqlMonth = "SELECT title, artist, COUNT(*) AS play_count 
                 FROM Song 
                 WHERE YEAR(play_date) = YEAR(CURDATE()) AND MONTH(play_date) = MONTH(CURDATE()) 
                 GROUP BY title, artist 
                 ORDER BY play_count DESC 
                 LIMIT 3";

    $stmtMonth = $pdo->query($sqlMonth);

    // Array für die Top Songs des Monats erstellen
    $topSongsMonth = $stmtMonth->fetchAll();

    // Platz 1 des Songs des Monats
    $topSongMonth1 = isset($topSongsMonth[0]) ? $topSongsMonth[0] : null;

    // Platz 2 des Songs des Monats
    $topSongMonth2 = isset($topSongsMonth[1]) ? $topSongsMonth[1] : null;

    // Platz 3 des Songs des Monats
    $topSongMonth3 = isset($topSongsMonth[2]) ? $topSongsMonth[2] : null;

    // SQL-Query für den Top Song des Jahres
    $sqlYear = "SELECT title, artist, COUNT(*) AS play_count 
                FROM Song 
                WHERE YEAR(play_date) = YEAR(CURDATE()) 
                GROUP BY title, artist 
                ORDER BY play_count DESC 
                LIMIT 3";

    $stmtYear = $pdo->query($sqlYear);

    // Array für die Top Songs des Jahres erstellen
    $topSongsYear = $stmtYear->fetchAll();

    // Platz 1 des Songs des Jahres
    $topSongYear1 = isset($topSongsYear[0]) ? $topSongsYear[0] : null;

    // Platz 2 des Songs des Jahres
    $topSongYear2 = isset($topSongsYear[1]) ? $topSongsYear[1] : null;

    // Platz 3 des Songs des Jahres
    $topSongYear3 = isset($topSongsYear[2]) ? $topSongsYear[2] : null;

    // Array für die Ausgabe erstellen
    $output = array(
        'TopSongsWeek' => array($topSongWeek1, $topSongWeek2, $topSongWeek3),
        'TopSongsMonth' => array($topSongMonth1, $topSongMonth2, $topSongMonth3),
        'TopSongsYear' => array($topSongYear1, $topSongYear2, $topSongYear3)
    );

    // JSON-Daten ausgeben
    header('Content-Type: application/json');
    echo json_encode($output, JSON_PRETTY_PRINT);
    
} catch (PDOException $e) {
    die("Verbindung zur Datenbank konnte nicht hergestellt werden: " . $e->getMessage());
}
?>
