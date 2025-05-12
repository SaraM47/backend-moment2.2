# Work Experience - CV-Webbapplikation

## Publicering

Denna webbapplikation är publicerad via Netlify för att fungera oberoende av backendmiljön som körs på Render. Detta möjliggör en tydlig separation mellan frontend och backend, vilket speglar hur moderna webbsystem ofta är uppbyggda.

- [Frontend (Netlify)](https://backend-moment22.netlify.app/)
- [Backend (live-API)](https://backend-moment2-1-ga1k.onrender.com/)
- [Källkod för backend (GitHub)](https://github.com/SaraM47/backend-moment2.1)

---

## Beskrivning

Frontend-applikationen ger ett lättanvänt gränssnitt för att läsa, lägga till och ta bort **arbetserfarenheter** som lagras i en PostgreSQL-databas via ett RESTful API.

Den är byggd med **Vite** och **TypeScript** och använder **Fetch API** för att kommunicera med backend.

### Funktioner:

- Visa en tabell med alla sparade arbetserfarenheter
- Lägg till ny post via formulär
- Radera enskilda poster direkt i listan
- Visa teknisk info och slutsatser på "Om"-sidan
- Visa felmeddelanden om något går fel vid t.ex. validering

---

## Teknisk översikt

- **Språk:** TypeScript
- **Byggverktyg:** Vite
- **Arkitektur:**
  - `main.ts` hanterar datainläsning och radering
  - `add.ts` sköter formuläret för att skapa ny post
  - Anpassad för både desktop och mobil
- **Miljövariabler:**
  - API-URL konfigureras via `.env`:
---

## Slutsats
Det här momentet gav en tydlig förståelse för hur en frontend kan kommunicera med ett REST-API över nätet. Genom att använda moderna verktyg som Vite och TypeScript blev utvecklingen snabb och strukturerad. Jämfört med moment 1 där SQLite användes lokalt, kändes PostgreSQL via Render betydligt mer realistiskt och anpassat för en produktionslik miljö.
