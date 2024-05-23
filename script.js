let allElementsPlaced=false;

let alertShownWeek = false;
let alertShownMonth = false;
let alertShownYear = false;

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
               // console.log('Anzahl der Wiedergaben:', topSongsMonth[uniqueIndices[i]].play_count);
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
                //console.log('Anzahl der Wiedergaben:', topSongsYear[uniqueIndices[i]].play_count);
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
            
                checkAllElementsPlacedWeek(); // Überprüfe, ob alle Elemente platziert wurden
                checkAllElementsPlacedMonth(); // Überprüfe, ob alle Elemente platziert wurden
                checkAllElementsPlacedYear(); // Überprüfe, ob alle Elemente platziert wurden
                checkOrderWeek(); // Überprüfe die Reihenfolge der platzierten Elemente
                checkOrderMonth(); // Überprüfe die Reihenfolge der platzierten Elemente
                checkOrderYear(); // Überprüfe die Reihenfolge der platzierten Elemente
            }
            
            function checkAllElementsPlacedWeek() {
                const dropZone = document.getElementById("drop-zone-w");
                const songElements = dropZone.querySelectorAll(".song-of-the-week-1, .song-of-the-week-2, .song-of-the-week-3",);
                WeekElementsPlaced = songElements.length === 3;

                if (WeekElementsPlaced) {
                    console.log("All elements are placed. WeekElementsPlaced=", WeekElementsPlaced);
                } else {
                    console.log("Not all elements are placed. WeekElementsPlaced=", WeekElementsPlaced);
                }
            }

            function checkAllElementsPlacedMonth() {
                const dropZone = document.getElementById("drop-zone-m");
                const songElements = dropZone.querySelectorAll(".song-of-the-month-1, .song-of-the-month-2, .song-of-the-month-3");
                MonthElementsPlaced = songElements.length === 3;

                if (MonthElementsPlaced) {
                    console.log("All elements are placed. MonthElementsPlaced=", MonthElementsPlaced);
                } else {
                    console.log("Not all elements are placed. MonthElementsPlaced=", MonthElementsPlaced);
                }
            }

            function checkAllElementsPlacedYear() {
                const dropZone = document.getElementById("drop-zone-y");
                const songElements = dropZone.querySelectorAll(".song-of-the-year-1, .song-of-the-year-2, .song-of-the-year-3");
                YearElementsPlaced = songElements.length === 3;

                if (YearElementsPlaced) {
                    console.log("All elements are placed. YearElementsPlaced=", YearElementsPlaced);
                } else {
                    console.log("Not all elements are placed. YearElementsPlaced=", YearElementsPlaced);
                }
            }

            let WeekorderCorrect = false;
            let MonthorderCorrect = false;
            let YearorderCorrect = false;
            
            function checkOrderWeek() {
                if(WeekElementsPlaced==true){
                    console.log("All elements are placed. We are inside checkOrder function.");
                    const dropZone = document.getElementById("drop-zone-w");
                    const songOfWeekElements = dropZone.querySelectorAll(".podest-sotw-1, .podest-sotw-2, .podest-sotw-3");

                    let silver = songOfWeekElements[0].firstChild.getAttribute('data-position');
                    let gold = songOfWeekElements[1].firstChild.getAttribute('data-position');
                    let bronze = songOfWeekElements[2].firstChild.getAttribute('data-position');
                    console.log("Gold", gold);
                    console.log("Silver", silver);
                    console.log("Bronze", bronze);

                    if(silver==1 && gold==0 && bronze==2){
                        WeekorderCorrect = true;
                        console.log("Order is correct.", WeekorderCorrect);
                        if (!alertShownWeek) { // Überprüfen, ob der Alert bereits gezeigt wurde
                            messageWeekCorrect(); // Zeige eine Nachricht an, ob die Reihenfolge korrekt ist
                            alertShownWeek = true; // Status der Variable aktualisieren
                        }

                    } else {
                        console.log("Order is incorrect.");
                        messageWeekIncorrect(); // Zeige eine Nachricht an, ob die Reihenfolge korrekt ist

                    }
                }
                
                function messageWeekCorrect() {

                    const podestElementsWeek = document.querySelectorAll('.podest-sotw-1, .podest-sotw-2, .podest-sotw-3');
                    // Set the background color of podestElementsWeek to lila
                    podestElementsWeek.forEach(element => {
                        element.style.backgroundColor = getComputedStyle(element).getPropertyValue('--tertiary-color');
                        const children = element.querySelectorAll('*');
                        children.forEach(child => {
                            child.style.backgroundColor = getComputedStyle(element).getPropertyValue('--tertiary-color');
                            child.style.color = getComputedStyle(element).getPropertyValue('--off-white');
                        });
                    });
    
                    const successSound = document.getElementById('successSound');
                    successSound.play();

                    console.log("Richtig! Du hast die Reihenfolge korrekt platziert!");
                    setTimeout(function() {
                        alert("Richtig! Du hast die Reihenfolge korrekt platziert!");
                    }, 500);
                 }
    
                function messageWeekIncorrect() {
                    // Iteriere durch die Elemente mit den Klassen song-of-the-week-1, song-of-the-week-2 und song-of-the-week-3
                    const elementsToReset = document.querySelectorAll('.song-of-the-week-1, .song-of-the-week-2, .song-of-the-week-3');

                    console.log("Resetting elements to default position.");
                    setTimeout(function() {
                        alert("Leider falsch! Versuche es erneut.");
                    }, 500);

                    const songOfWeekContainer = document.querySelector('.song-of-the-week-container');
                    songOfWeekContainer.appendChild(elementsToReset[0]);
                    songOfWeekContainer.appendChild(elementsToReset[1]);
                    songOfWeekContainer.appendChild(elementsToReset[2]);
                    console.log("append Child");
                }
                

            }

            

            function checkOrderMonth() {


                 if(MonthElementsPlaced==true){
                     console.log("All elements are placed. We are inside checkOrder function.");
                     const dropZone = document.getElementById("drop-zone-m");
                     const songOfMonthElements = dropZone.querySelectorAll(".podest-sotm-1, .podest-sotm-2, .podest-sotm-3");

                     let silver = songOfMonthElements[0].firstChild.getAttribute('data-position');
                     let gold = songOfMonthElements[1].firstChild.getAttribute('data-position');
                     let bronze = songOfMonthElements[2].firstChild.getAttribute('data-position');
                     console.log("Gold", gold);
                     console.log("Silver", silver);
                     console.log("Bronze", bronze);

                     if(silver==1 && gold==0 && bronze==2){
                         console.log("Order is correct.", MonthorderCorrect);
                         MonthorderCorrect = true;
                         if (!alertShownMonth) { // Überprüfen, ob der Alert bereits gezeigt wurde
                            messageMonthCorrect(); // Zeige eine Nachricht an, ob die Reihenfolge korrekt ist
                            alertShownMonth = true; // Status der Variable aktualisieren
                        }

                     } else {
                          console.log("Order is incorrect.");
                        messageMonthIncorrect();
                     }
                 }

                 function messageMonthCorrect() {

                    const podestElementsWeek = document.querySelectorAll('.podest-sotm-1, .podest-sotm-2, .podest-sotm-3');
                    // Set the background color of podestElementsWeek to lila
                    podestElementsWeek.forEach(element => {
                        element.style.backgroundColor = getComputedStyle(element).getPropertyValue('--quartiary-color');
                        const children = element.querySelectorAll('*');
                        children.forEach(child => {
                            child.style.backgroundColor = getComputedStyle(element).getPropertyValue('--quartiary-color');
                            child.style.color = getComputedStyle(element).getPropertyValue('--off-white');
                        });
                    });
                    
                    const successSound = document.getElementById('successSound');
                    successSound.play();

                    console.log("Richtig! Du hast die Reihenfolge korrekt platziert!");
                    setTimeout(function() {
                        alert("Richtig! Du hast die Reihenfolge korrekt platziert!");
                    }, 500);
                 }
    
                function messageMonthIncorrect() {
                    // Iteriere durch die Elemente mit den Klassen song-of-the-week-1, song-of-the-week-2 und song-of-the-week-3
                    const elementsToReset = document.querySelectorAll('.song-of-the-month-1, .song-of-the-month-2, .song-of-the-month-3');

                    console.log("Resetting elements to default position.");
                    setTimeout(function() {
                        alert("Leider falsch! Versuche es erneut.");
                    }, 500);

                    const songOfMonthContainer = document.querySelector('.song-of-the-month-container');
                    songOfMonthContainer.appendChild(elementsToReset[0]);
                    songOfMonthContainer.appendChild(elementsToReset[1]);
                    songOfMonthContainer.appendChild(elementsToReset[2]);
                    console.log("append Child");
                }

            }


            function checkOrderYear() {
                 if(YearElementsPlaced==true){
                     console.log("All elements are placed. We are inside checkOrder function.");
                    const dropZone = document.getElementById("drop-zone-y");
                    const songOfYearElements = dropZone.querySelectorAll(".podest-soty-1, .podest-soty-2, .podest-soty-3");
        
                     let silver = songOfYearElements[0].firstChild.getAttribute('data-position');
                     let gold = songOfYearElements[1].firstChild.getAttribute('data-position');
                     let bronze = songOfYearElements[2].firstChild.getAttribute('data-position');
                     console.log("Gold", gold);
                     console.log("Silver", silver);
                     console.log("Bronze", bronze);
        
                     if(silver==1 && gold==0 && bronze==2){
                        console.log("Order is correct.");
                        YearorderCorrect = true;
                        if (!alertShownYear) { // Überprüfen, ob der Alert bereits gezeigt wurde
                            messageYearCorrect(); // Zeige eine Nachricht an, ob die Reihenfolge korrekt ist
                            alertShownYear = true; // Status der Variable aktualisieren
                        };

                    } else {
                        console.log("Order is incorrect.");
                        messageYearIncorrect();
                            
                    }
                }

                function messageYearCorrect() {

                    const podestElementsWeek = document.querySelectorAll('.podest-soty-1, .podest-soty-2, .podest-soty-3');
                    // Set the background color of podestElementsWeek to lila
                    podestElementsWeek.forEach(element => {
                        element.style.backgroundColor = getComputedStyle(element).getPropertyValue('--quintiary-color');
                        const children = element.querySelectorAll('*');
                        children.forEach(child => {
                            child.style.backgroundColor = getComputedStyle(element).getPropertyValue('--quintiary-color');
                            child.style.color = getComputedStyle(element).getPropertyValue('--off-white');
                        });
                    });
    
                    const successSound = document.getElementById('successSound');
                    successSound.play();

                    console.log("Richtig! Du hast die Reihenfolge korrekt platziert!");
                    setTimeout(function() {
                        alert("Richtig! Du hast die Reihenfolge korrekt platziert!");
                    }, 500);
                 }
    
                function messageYearIncorrect() {
                    // Iteriere durch die Elemente mit den Klassen song-of-the-week-1, song-of-the-week-2 und song-of-the-week-3
                    const elementsToReset = document.querySelectorAll('.song-of-the-year-1, .song-of-the-year-2, .song-of-the-year-3');

                    console.log("Resetting elements to default position.");
                    setTimeout(function() {
                        alert("Leider falsch! Versuche es erneut.");
                    }, 500);

                    const songOfYearContainer = document.querySelector('.song-of-the-year-container');
                    songOfYearContainer.appendChild(elementsToReset[0]);
                    songOfYearContainer.appendChild(elementsToReset[1]);
                    songOfYearContainer.appendChild(elementsToReset[2]);
                    console.log("append Child");
                }
            }
                

            
            // Eventlistener, um das Dragging zu starten
            document.getElementById("song-of-the-week-1").addEventListener("dragstart", function(event) {

                    // Führe den Drag & Drop-Vorgang aus
                    event.dataTransfer.setData("text", event.target.id);
            });

            // Eventlistener, um das Dragging zu starten
            document.getElementById("song-of-the-week-2").addEventListener("dragstart", function(event) {
                // Führe den Drag & Drop-Vorgang aus
                event.dataTransfer.setData("text", event.target.id);

            });

            // Eventlistener, um das Dragging zu starten
            document.getElementById("song-of-the-week-3").addEventListener("dragstart", function(event) {
                // Führe den Drag & Drop-Vorgang aus
                event.dataTransfer.setData("text", event.target.id);
            });



            // Eventlistener, um das Dragging zu starten
            document.getElementById("song-of-the-month-1").addEventListener("dragstart", function(event) {
                // Führe den Drag & Drop-Vorgang aus
                event.dataTransfer.setData("text", event.target.id);
            });

            // Eventlistener, um das Dragging zu starten
            document.getElementById("song-of-the-month-2").addEventListener("dragstart", function(event) {
                // Führe den Drag & Drop-Vorgang aus
                event.dataTransfer.setData("text", event.target.id);

            });

            // Eventlistener, um das Dragging zu starten
            document.getElementById("song-of-the-month-3").addEventListener("dragstart", function(event) {
                // Führe den Drag & Drop-Vorgang aus
                event.dataTransfer.setData("text", event.target.id);
            });



            // Eventlistener, um das Dragging zu starten
            document.getElementById("song-of-the-year-1").addEventListener("dragstart", function(event) {
                // Führe den Drag & Drop-Vorgang aus
                event.dataTransfer.setData("text", event.target.id);
            });

            // Eventlistener, um das Dragging zu starten
            document.getElementById("song-of-the-year-2").addEventListener("dragstart", function(event) {
                // Führe den Drag & Drop-Vorgang aus
                event.dataTransfer.setData("text", event.target.id);

            });

            // Eventlistener, um das Dragging zu starten
            document.getElementById("song-of-the-year-3").addEventListener("dragstart", function(event) {
                // Führe den Drag & Drop-Vorgang aus
                event.dataTransfer.setData("text", event.target.id);
            });
