const select = document.getElementById('tableSelect');
const input = document.getElementById('apiUrl');
const resultat = document.getElementById('resultat');
const baseUrl = 'http://localhost:3001/api/';

function updateApi() {
  const table = select.value;
  const url = `${baseUrl}${table}`;
  input.value = url;
  resultat.textContent = "Carregant...";
  fetch(url)
    .then(res => res.json())
    .then(data => {
      resultat.textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => {
      resultat.textContent = "Error al carregar les dades: " + err;
    });
}

select.addEventListener('change', updateApi);

// Inicialitza amb la primera taula
updateApi();