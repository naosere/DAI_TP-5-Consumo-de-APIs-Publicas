const input = document.getElementById('searchInput');
const button = document.getElementById('searchBtn');
const result = document.getElementById('result');
const loading = document.getElementById('loading');
const error = document.getElementById('error');

//BUSCAR 1
button.addEventListener('click', buscar);


//BUSCAR 2
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') buscar();
});

function buscar() {
  const name = input.value.trim().toLowerCase();

  if (!name) {
    error.textContent = 'Ingresá un nombre';
    return;
  }

  fetchPokemon(name);
}

async function fetchPokemon(nombre) {
  limpiar();
  loading.classList.remove('hidden');

  try {
    //DELAY A PROPOSITO
    await new Promise(res => setTimeout(res, 1500));

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

    if (!res.ok) throw new Error();

    const data = await res.json();
    renderPokemon(data);
    addToHistory(data.name);

  } catch (e) {
    error.textContent = 'Pokémon no encontrado';
  } finally {
    loading.classList.add('hidden');
  }

}

function renderPokemon(pokemon) {
  const tipos = pokemon.types
    .map(t => `<span class="type">${t.type.name}</span>`)
    .join('');

  result.innerHTML = `
    <div class="card">
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
      <div class="types">${tipos}</div>
      <p><strong>Peso:</strong> ${pokemon.weight}</p>
      <p><strong>Altura:</strong> ${pokemon.height}</p>
    </div>
  `;
}

function limpiar() {
  error.textContent = '';
  result.innerHTML = '';
}
const historyPanel = document.getElementById("historyPanel");
const historyList = document.getElementById("historyList");
const toggleHistory = document.getElementById("toggleHistory");

let history = JSON.parse(localStorage.getItem("history")) || [];

//PANEL
toggleHistory.addEventListener("click", () => {
  historyPanel.classList.toggle("hidden");
});

//HISTORIAL
function addToHistory(name) {
  if (!name) return;

  history = history.filter(p => p !== name);
  history.unshift(name);

  if (history.length > 10) history.pop();

  localStorage.setItem("history", JSON.stringify(history));
  renderHistory();
}


function renderHistory() {
  historyList.innerHTML = "";

  if (history.length === 0) {
    historyList.innerHTML = "<li style='opacity:0.6'>Sin búsquedas</li>";
    return;
  }

  history.forEach(pokemon => {
    const li = document.createElement("li");
    li.textContent = pokemon;

    li.addEventListener("click", () => {
      input.value = pokemon;
      buscarPokemon();
    });

    historyList.appendChild(li);
  });
}


renderHistory();