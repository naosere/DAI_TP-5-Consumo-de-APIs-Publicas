const input = document.getElementById('searchInput');
const button = document.getElementById('searchBtn');
const result = document.getElementById('result');
const loading = document.getElementById('loading');
const error = document.getElementById('error');

// Buscar con botón
button.addEventListener('click', buscar);

// Buscar con Enter
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
    // Delay para que se vea el loading
    await new Promise(res => setTimeout(res, 1500));

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

    if (!res.ok) throw new Error();

    const data = await res.json();
    renderPokemon(data);

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