# Programmateure

Auch schon mal ein Lied im Radio gehört und gedacht, dass es schon öfters lief? Interaktiv findest du auf Ohrwurm heraus, welche drei Songs am häufigsten auf Radio SRF 1 gespielt wurden.

•	LEARNINGS
o	Daten aus API sammeln und verknüpfen
o	Funktion Drag and Drop 
o	Optimierung Projektmanagement (Aufgabenaufteilung)

•	SCHWIERIGKEITEN
o	Interaktion einbetten (Drag and Drop)
  Die Drag and Drop Funktion stellte sich doch als komplexer heraus, als anfangs angenommen. Die grundsätzlichen Dinge mit den Elementen und der Drop Zone haben gut funktioniert, danach wurde es dann aber doch ein wenig komplexer. Besonders die Überprüfung, ob ein Song am richtigen Ort ist, hat einige Zeit und Nerven gekostet. Wir konnten das Problem schlussendlich aber gut lösen, indem wir Attribute an die Elemente vergeben und abgerufen haben. Auch das "Zurückspringen" der Songs auf ihren Ursprungsort (wenn man falsch geraten hat) hat einige Zeit gekostet. Zuerst wollten wir das Problem lösen, indem man die x- und y-Werte des Elementes vor dem Drag & Drop abgreift, das hat aber nicht funktioniert. Schlussendlich haben wir die Elemente einfach an ihren Ursprungscontainer mit appendChild "zurückverschoben".
  
o	Backend und Frontend verbinden
  Da wir die Datenbank und das Frontend auf zwei verschiedenen Servern haben, funktionierte die Verbindung nicht auf Anhieb. Wir konnten das Problem aber mithilfe einer .htaccess-Datei lösen und die Daten aus dem unload.php in unserem script abrufen. Ausserdem sollten die Top-Songs nicht immer schon in der richtigen Reihenfolge angezeigt werden, darum mussten wir randomisierte Indices generieren um so die Songs nach dem Zufallsprinzip darstellen zu können.
  
o	Kein Song of the Day
  Viele Songs hatten die gleiche Anzahl Wiederholungen pro Tag. Darum haben wir uns dazu entschieden, den Song of the day wegzulassen und dafür eine Rubrik mit dem Song of the year zu machen.

•	benutzte Ressourcen
o	GitHub
o	Visual Studio Code
o	Radio SRF 1 API
o	CronTool
o	W3 SChools
o	Chat GPT

o	Optimierungspotenzial
  Wir sind ganz zufrieden mit unserem Projekt, besonders da wir keine Code-Profis sind,  sondern eher Programmateure.
  Trotzdem hätten wir für die Website einige Ideen für zusätzliche Funktionen gehabt. Darunter:
  o	eine Navigationsleiste an der Seite, damit man immer weiss wo man sich befindet
  o	schöner gestaltete Alerts
  o	Ohrwurm mit Verlinkung zu Top-Song

  Trotzdem sind wir stolz auf das Projekt und konnten auf jeden Fall viel Neues lernen!

