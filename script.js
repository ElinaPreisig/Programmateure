let allElementsPlaced=false;

// Dieses Skript wird ausgeführt, sobald das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', async function() {
    // URL der API, von der die Top-Song-Daten abgerufen werden
    const apiUrl = 'https://148951-4.web.fhgr.ch/unload.php';

    try {
        // Führt einen Fetch-Request an die angegebene URL durch
        const response = await fetch(apiUrl);
        const data = await response.json(); // Wandelt die Antwort in JSON um

        // Gibt die Top-Song-Daten in der Konsole aus
        // console.log('Top-Song-Daten:', data);

        // Zugriff auf die Top-Songs der Woche
        const topSongsWeek = data['TopSongsWeek'];
        console.log('Top-Songs der Woche:', topSongsWeek);
        // Zugriff auf die Top-Songs des Monats
        const topSongsMonth = data['TopSongsMonth'];
        console.log('Top-Songs des Monats:', topSongsMonth);
        // Zugriff auf die Top-Songs des Jahres
        const topSongsYear = data['TopSongsYear'];
        console.log('Top-Songs des Jahres:', topSongsYear);

        // Funktion, um eine Liste von eindeutigen zufälligen Indizes von min bis max zu generieren
        function generateUniqueRandomIndices(min, max, count) {
            const indices = [];
            while (indices.length < count) {
            const index = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!indices.includes(index)) {
            indices.push(index);
            }
            }
            return indices;
            }

            //console.log("test");

        function setTopSongsOfWeek(topSongsWeek) {

            // Generiere eine Liste von eindeutigen zufälligen Indizes von 0 bis 2
            const uniqueIndices = generateUniqueRandomIndices(0, 2, 3);
            //console.log('Eindeutige zufällige Indizes:', uniqueIndices[0], uniqueIndices[1], uniqueIndices[2]);

            // Iteriere durch die Top-Songs der Woche
            for (let i = 0; i < topSongsWeek.length; i++) { 

                // Zugriff auf das HTML-Element mit der Klasse "song-of-the-week-{i+1}"
                const songOfWeekElement = document.querySelector(`.song-of-the-week-${i+1}`);
                // data-position attribut hinzufügen, um echte position zu speichern
                songOfWeekElement.setAttribute('data-position', [uniqueIndices[i]]);
                //console.log( "Data Position", songOfWeekElement.getAttribute('data-position'));
                // Zugriff auf das h5-Element innerhalb des song-of-the-week-Elements
                const titleElement = songOfWeekElement.querySelector('h5');
                // Setze den Text des h5-Elements auf den Titel des Songs
                titleElement.textContent = topSongsWeek[uniqueIndices[i]].title;
                // Zugriff auf das p-Element innerhalb des song-of-the-week-Elements
                const artistElement = songOfWeekElement.querySelector('p');
                // Setze den Text des p-Elements auf den Künstler des Songs
                artistElement.textContent = topSongsWeek[uniqueIndices[i]].artist;
                // Zeige die Anzahl der Wiedergaben des Songs an
                //console.log('Anzahl der Wiedergaben:', topSongsWeek[uniqueIndices[i]].play_count);
            }
        }
        
        // Verwendung der Funktion mit den Top-Songs der Woche als Argument
        setTopSongsOfWeek(topSongsWeek);
        

        function setTopSongsOfMonth(topSongsMonth) {

            // Generiere eine Liste von eindeutigen zufälligen Indizes von 0 bis 2
            const uniqueIndices = generateUniqueRandomIndices(0, 2, 3);
            //console.log('Eindeutige zufällige Indizes:', uniqueIndices[0], uniqueIndices[1], uniqueIndices[2]);

            // Iteriere durch die Top-Songs des Monats
            for (let i = 0; i < topSongsMonth.length; i++) { 

                // Zugriff auf das HTML-Element mit der Klasse "song-of-the-week-{i+1}"
                const songOfMonthElement = document.querySelector(`.song-of-the-month-${i+1}`);
                // data-position attribut hinzufügen, um echte position zu speichern
                songOfMonthElement.setAttribute('data-position', [uniqueIndices[i]]);
                //console.log(songOfMonthElement.getAttribute('data-position'));
                // Zugriff auf das h5-Element innerhalb des song-of-the-week-Elements
                const titleElement = songOfMonthElement.querySelector('h5');
                // Setze den Text des h5-Elements auf den Titel des Songs
                titleElement.textContent = topSongsMonth[uniqueIndices[i]].title;
                // Zugriff auf das p-Element innerhalb des song-of-the-week-Elements
                const artistElement = songOfMonthElement.querySelector('p');
                // Setze den Text des p-Elements auf den Künstler des Songs
                artistElement.textContent = topSongsMonth[uniqueIndices[i]].artist;
                // Zeige die Anzahl der Wiedergaben des Songs an
                console.log('Anzahl der Wiedergaben:', topSongsMonth[uniqueIndices[i]].play_count);
            }
        }
        
        // Verwendung der Funktion mit den Top-Songs der Woche als Argument
        setTopSongsOfMonth(topSongsMonth);


        function setTopSongsOfYear(topSongsYear) {

            // Generiere eine Liste von eindeutigen zufälligen Indizes von 0 bis 2
            const uniqueIndices = generateUniqueRandomIndices(0, 2, 3);
            //console.log('Eindeutige zufällige Indizes:', uniqueIndices[0], uniqueIndices[1], uniqueIndices[2]);

            // Iteriere durch die Top-Songs des Jahres
            for (let i = 0; i < topSongsYear.length; i++) { 

                // Zugriff auf das HTML-Element mit der Klasse "song-of-the-week-{i+1}"
                const songOfYearElement = document.querySelector(`.song-of-the-year-${i+1}`);
                // data-position attribut hinzufügen, um echte position zu speichern
                songOfYearElement.setAttribute('data-position', [uniqueIndices[i]]);
                //console.log(songOfYearElement.getAttribute('data-position'));
                // Zugriff auf das h5-Element innerhalb des song-of-the-week-Elements
                const titleElement = songOfYearElement.querySelector('h5');
                // Setze den Text des h5-Elements auf den Titel des Songs
                titleElement.textContent = topSongsYear[uniqueIndices[i]].title;
                // Zugriff auf das p-Element innerhalb des song-of-the-week-Elements
                const artistElement = songOfYearElement.querySelector('p');
                // Setze den Text des p-Elements auf den Künstler des Songs
                artistElement.textContent = topSongsYear[uniqueIndices[i]].artist;
                // Zeige die Anzahl der Wiedergaben des Songs an
                console.log('Anzahl der Wiedergaben:', topSongsYear[uniqueIndices[i]].play_count);
            }
        }

        // Verwendung der Funktion mit den Top-Songs des Jahres als Argument
        setTopSongsOfYear(topSongsYear);

        } catch (error) {
            // Gibt Fehlermeldungen in der Konsole aus, falls der Fetch-Request scheitert
            console.error('Fehler beim Abrufen der Top-Song-Daten:', error);
    }


});

// Drag & Drop
            // Funktion, um das Ziehen zu ermöglichen
            function allowDrop(event) {
                event.preventDefault();
            }
        
            function drop(event) {
                event.preventDefault();
                var data = event.dataTransfer.getData("text");
                var draggedElement = document.getElementById(data);
                event.target.appendChild(draggedElement);
            
                checkAllElementsPlaced(); // Überprüfe, ob alle Elemente platziert wurden
                checkOrder(); // Überprüfe die Reihenfolge der platzierten Elemente
                message(); // Zeige eine Nachricht an, ob die Reihenfolge korrekt ist
            }
            
            function checkAllElementsPlaced() {
                const dropZone = document.getElementById("drop-zone");
                const songElements = dropZone.querySelectorAll(".song-of-the-week-1, .song-of-the-week-2, .song-of-the-week-3",);
                allElementsPlaced = songElements.length === 3;

                if (allElementsPlaced) {
                    console.log("All elements are placed. allElementsPlaced=", allElementsPlaced);
                } else {
                    console.log("Not all elements are placed. allElementsPlaced=", allElementsPlaced);
                }
            }
            
            function checkOrder() {
                if(allElementsPlaced==true){
                    console.log("All elements are placed. We are inside checkOrder function.");
                    const dropZone = document.getElementById("drop-zone");
                    const songOfWeekElements = dropZone.querySelectorAll(".podest-sotw-1, .podest-sotw-2, .podest-sotw-3");

                    // let gold =songOfWeekElements[0].firstChild.getAttribute('data-position');
                    // let silver = songOfWeekElements[1].firstChild.getAttribute('data-position');
                    // let bronze = songOfWeekElements[2].firstChild.getAttribute('data-position');
                    let silver = songOfWeekElements[0].firstChild.getAttribute('data-position');
                    let gold = songOfWeekElements[1].firstChild.getAttribute('data-position');
                    let bronze = songOfWeekElements[2].firstChild.getAttribute('data-position');
                    console.log("Gold", gold);
                    console.log("Silver", silver);
                    console.log("Bronze", bronze);
                    // console.log("Song of the week element", songOfWeekElements[0].firstChild.getAttribute('data-position'));
                    // console.log("Song of the week element", songOfWeekElements[1].firstChild.getAttribute('data-position'));
                    // console.log("Song of the week element", songOfWeekElements[2].firstChild.getAttribute('data-position'));

                    let orderCorrect = false;

                    if(silver==1 && gold==0 && bronze==2){
                        console.log("Order is correct.");
                        orderCorrect = true;

                    } else {
                        console.log("Order is incorrect.");
                    }
                }

                function message() {

                    if (orderCorrect==true) {
                        alert("Gratulation! Du hast es geschafft!");

                    } else {
                        alert("Leider falsch. Versuche es noch einmal!");
                        
                    }

                }


            
                // let orderCorrect = true; // Initialisiere die Variable orderCorrect
            
                // for (let i = 0; i < songOfWeekElements.length; i++) {
                //     const songOfWeekElement = songOfWeekElements[i];
                //     const firstChild = songOfWeekElement.firstChild;
                //     const dataPosition = firstChild.getAttribute('data-position');
                //     console.log("Data Position", dataPosition); // Ausgabe: 0, 1 oder 2
                //     const dropElement = document.getElementById(`sotw-drop-${i}`);
                //     const number = extractNumberFromDropElement(dropElement);
                //     console.log("Number", number); // Ausgabe: 0
            
                //     if (dataPosition !== number) {
                //         orderCorrect = false; // Setze orderCorrect auf false, wenn die Position nicht korrekt ist
                //         break; // Breche die Schleife ab, da die Reihenfolge bereits falsch ist
                //     }
                // }
            
                // if (orderCorrect) {
                //     console.log("Order is correct.");
                // } else {
                //     console.log("Order is incorrect.");
                // }
            }
            
            // Eventlistener, um das Dragging zu starten
            document.getElementById("song-of-the-week-1").addEventListener("dragstart", function(event) {
                event.dataTransfer.setData("text", event.target.id);
            });

            // Eventlistener, um das Dragging zu starten
            document.getElementById("song-of-the-week-2").addEventListener("dragstart", function(event) {
                event.dataTransfer.setData("text", event.target.id);

            });

            // Eventlistener, um das Dragging zu starten
            document.getElementById("song-of-the-week-3").addEventListener("dragstart", function(event) {
                event.dataTransfer.setData("text", event.target.id);
            });
