## Einheit 4 - Backend-Routen, CRUD und Aggregation

### Endpunkte

#### Teams

- **Methode:** GET
  - **Pfad:** /teams
  - **Erwarteter Body:** /
  - **Rückgabe:** Array aller Teams (Status 200 OK)
  
- **Methode:** GET
  - **Pfad:** /teams/:id
  - **Erwarteter Body:** /
  - **Rückgabe:** Einzelnes Team Objekt (Status 200 OK) oder Fehler (Status 404 Not Found)
  
- **Methode:** POST
  - **Pfad:** /teams
  - **Erwarteter Body:** {"name": "team", "klasse": "klasse"}
  - **Rückgabe:** Erstelltes Team-Objekt (Status 201 Created) oder Fehler (Status 400 Bad Request)

- **Methode:** PUT
  - **Pfad:** /teams/:id
  - **Erwarteter Body:** {"name": "team", "klasse": "klasse"}
  - **Rückgabe:** Aktualisiertes Team Objekt (Status 200 OK) oder Fehler (Status 404 Not Found)

- **Methode:** DELETE
  - **Pfad:** /teams/:id
  - **Erwarteter Body:** /
  - **Rückgabe:** Kein Inhalt (Status 204 No Content) oder Fehler (Status 404 Not Found)


#### Projects

- **Methode:** GET
  - **Pfad:** /projects
  - **Erwarteter Body:** /
  - **Rückgabe:** Array aller Projekte (Status 200 OK)

- **Methode:** GET
  - **Pfad:** /projects/:id
  - **Erwarteter Body:** /
  - **Rückgabe:** Einzelnes Projekt-Objekt (Status 200 OK) oder Fehler (Status 404 Not Found)

- **Methode:** POST
  - **Pfad:** /projects
  - **Erwarteter Body:** {"titel": "titel", "beschreibung": "beschreibung", "praesentiertAm": "xxxx-xx-xx", "teamId": 1}
  - **Rückgabe:** Erstelltes Projekt-Objekt (Status 201 Created) oder Fehler (Status 400 Bad Request / Status 404 Not Found)

- **Methode:** PUT
  - **Pfad:** /projects/:id
  - **Erwarteter Body:** {"titel": "neuer titel"}
  - **Rückgabe:** Aktualisiertes Projekt-Objekt (Status 200 OK) oder Fehler (Status 404 Not Found)

- **Methode:** DELETE
  - **Pfad:** /projects/:id
  - **Erwarteter Body:** /
  - **Rückgabe:** Kein Inhalt (Status 204 No Content) oder Fehler (Status 404 Not Found)


#### Evaluations

- **Methode:** POST
  - **Pfad:** /evaluations
  - **Erwarteter Body:** {"score": 1, "comment": "comment", "projectId": 1, "criterionId": 1, "jurorId": 1}
  - **Rückgabe:** Erstellte Bewertung (Status 201 Created) oder Fehler (Status 400 Bad Request / Status 404 Not Found)

- **Methode:** GET
  - **Pfad:** /evaluations/durchschnitt/:projectId
  - **Erwarteter Body:** /
  - **Rückgabe:** Array mit Durchschnitts Scores pro Kriterium (Status 200 OK)