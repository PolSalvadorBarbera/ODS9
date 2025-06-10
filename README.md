# Projecte ODS 9: Indústria, Innovació i Infraestructura

## Descripció
Aquesta web educativa està dedicada a l'Objectiu de Desenvolupament Sostenible 9 (ODS 9) de les Nacions Unides: Indústria, Innovació i Infraestructura. L'objectiu és informar i conscienciar sobre la importància de construir infraestructures resilients, promoure la industrialització sostenible i fomentar la innovació, especialment a nivell local i en entorns no urbans.

## Estructura del lloc
- **Pàgina principal**: Introducció a l'ODS 9, carrusel amb els 18 ODS i exemples visuals.
- **Impactes**:
  - **Social**: Gràfics i anàlisi sobre l'impacte de la indústria en l'ocupació, l'atur i la cohesió social.
  - **Ambiental**: Gràfics sobre emissions, consum energètic i sostenibilitat industrial.
  - **Econòmic**: Gràfics sobre inversió, VAB i innovació a les comarques catalanes.
- **API**: Consulta interactiva a una API pròpia (Node.js + Express + SQLite) per accedir a dades de comarques, atur, VAB, inversions, etc.
- **Qui som**: Presentació de l'equip, missió, visió, valors i impactes del projecte.

## Tecnologies utilitzades
- HTML5, CSS3 (amb estils modulars per a cada secció)
- JavaScript (frontend i backend)
- Node.js + Express (API REST)
- SQLite (base de dades local)
- Chart.js (visualització de dades)
- Plantilla Helios d'HTML5 UP
- Font Awesome (icones)

## Com executar el projecte
1. **Clona el repositori** i instal·la les dependències:
   ```sh
   npm install
   ```
2. **Executa l'API** (Node.js):
   ```sh
   cd assets/api
   node api.js
   ```
   L'API estarà disponible a `http://localhost:3001/api/{taula}`
3. **Obre `index.html`** o qualsevol altra pàgina del projecte amb un servidor local o directament al navegador.

## Exemples d'ús de l'API
- Totes les dades d'una taula:
  - `http://localhost:3001/api/poblacio_comarques`
- Columnes d'una taula:
  - `http://localhost:3001/api/poblacio_comarques/columns`
- Filtrar per comarca:
  - `http://localhost:3001/api/poblacio_comarques?comarca=Anoia`
- Filtrar per any:
  - `http://localhost:3001/api/inversions_comarques?year=2020`

## Crèdits
- Plantilla: Helios per HTML5 UP (html5up.net)
- Icones: Font Awesome (fontawesome.io)
- Imatges: Recursos propis i lliures d'ús educatiu
- Gràfics: Chart.js

## Equip
Asad Tahere, Naila Jabeen, Pol Salvador Barberà i Francisco Fernande Navarro

## Llicència
Ús educatiu i personal. Consulta la llicència de la plantilla a html5up.net/license
