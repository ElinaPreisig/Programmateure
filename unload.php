<?php
// Verbindung zur Datenbank herstellen
include 'config.php'; 

try {
    // Erstellt eine neue PDO-Instanz mit der Konfiguration aus config.php
    $pdo = new PDO($dsn, $db_user, $db_pass, $options);

    // Aktuelles Datum
    $currentDate = date('Y-m-d');

    // SQL-Query für den Song des Tages
    $sqlDay = "SELECT title, artist, COUNT(*) AS play_count 
               FROM Song 
               WHERE DATE(play_date) = '$currentDate' 
               GROUP BY title, artist 
               ORDER BY play_count DESC 
               LIMIT 3";

    $stmtDay = $pdo->query($sqlDay);

    // Array für den Song des Tages erstellen
    $topSongsDay = array();

    // Daten in das Array einfügen
    while($row = $stmtDay->fetch()) {
        $topSongsDay[] = $row;
    }

    // SQL-Query für den Song der Woche
    $sqlWeek = "SELECT title, artist, COUNT(*) AS play_count 
                FROM Song 
                WHERE play_date >= DATE_SUB(NOW(), INTERVAL 1 WEEK) 
                GROUP BY title, artist 
                ORDER BY play_count DESC 
                LIMIT 3";

    $stmtWeek = $pdo->query($sqlWeek);

    // Array für den Song der Woche erstellen
    $topSongsWeek = array();

    // Daten in das Array einfügen
    while($row = $stmtWeek->fetch()) {
        $topSongsWeek[] = $row;
    }

    // SQL-Query für den Song des Monats
    $sqlMonth = "SELECT title, artist, COUNT(*) AS play_count 
                 FROM Song 
                 WHERE YEAR(play_date) = YEAR(CURDATE()) AND MONTH(play_date) = MONTH(CURDATE()) 
                 GROUP BY title, artist 
                 ORDER BY play_count DESC 
                 LIMIT 3";

    $stmtMonth = $pdo->query($sqlMonth);

    // Array für den Song des Monats erstellen
    $topSongsMonth = array();

    // Daten in das Array einfügen
    while($row = $stmtMonth->fetch()) {
        $topSongsMonth[] = $row;
    }

    // Array für die Ausgabe erstellen
    $output = array(
        'TopSongsDay' => $topSongsDay,
        'TopSongsWeek' => $topSongsWeek,
        'TopSongsMonth' => $topSongsMonth
    );

    // JSON-Daten ausgeben
    header('Content-Type: application/json');
    echo json_encode($output, JSON_PRETTY_PRINT);
    
} catch (PDOException $e) {
    die("Verbindung zur Datenbank konnte nicht hergestellt werden: " . $e->getMessage());
}
?>
