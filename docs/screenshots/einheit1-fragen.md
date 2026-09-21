### Verständnisfragen

#### 1. Was ist der Unterschied zwischen Capacitor und Cordova?
**Capacitor** ist Open Source, lässt WebApps nativ auf iOS, Android, Electron und Web laufen und liefert ein Interface um SDKs und native APIs für alle Plattformen einfach zu erreichen.  
**Cordova** ist auch Open Source und hat den gleichen Zweck, läuft aber nicht auf Electron/Progressive Web App und nutzt ältere Ansätze.

#### 2. Was macht ein ORM wie Sequelize, und wofür braucht man zusätzlich die sequelize-cli?
**Sequelize** übersetzt zwischen JavaScript-Objekten und Datenbanktabellen, sodass man mit JavaScript-Klassen arbeitet, anstatt SQL zu schreiben.  
**Sequelize-cli** ist ein Terminal-Tool zur administrativen Verwaltung von Sequelize und der Datenbank. Es wird z. B. verwendet, um Projekt- und Modell-Grundgerüste zu generieren sowie Migrationen auszuführen oder rückgängig zu machen.

#### 3. Was unterscheidet npm install von npx beim Ausführen eines Pakets?
* **npm install**: Lädt Pakete dauerhaft in den Ordner `node_modules` herunter.
* **npx**: Führt CLI-Tools direkt aus. Ist das Tool bereits lokal installiert, wird dieses benutzt; andernfalls wird es nur temporär heruntergeladen und danach wieder gelöscht.

#### 4. Was ist REST, und warum passt das Konzept zu einer Client-Server-Architektur wie Ionic-App und Node-Backend?
**REST** (**R**epresentational **S**tate **T**ransfer) ist ein zustandsloses Architekturmuster für Web-APIs mit Standard-HTTP-Methoden (`GET`, `POST`, etc.). Es passt ideal, weil REST beide Seiten über zustandslose HTTP-Requests trennt: Die App fragt Daten ab, ohne die interne Struktur des Backends kennen zu müssen.