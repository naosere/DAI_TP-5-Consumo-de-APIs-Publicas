"# DAI_TP-5-Consumo-de-APIs-Publicas" 
🧾 Mini Pokédex

Aplicación web simple desarrollada con HTML, CSS y JavaScript puro que permite buscar Pokémon por nombre utilizando la API pública de PokéAPI.

🚀 Funcionalidades
Buscar un Pokémon por nombre
Mostrar:
Nombre
Imagen
Tipo(s)
Peso
Altura
Indicador de carga (loading spinner)
Manejo de errores si el Pokémon no existe
Validación básica del input
🔗 Endpoints utilizados

Se utilizó la API pública:

https://pokeapi.co/api/v2/pokemon/{name}

Ejemplo:

https://pokeapi.co/api/v2/pokemon/pikachu

De este endpoint se obtienen:

name
sprites.front_default (imagen)
types
weight
height
📁 Estructura del proyecto
/mini-pokedex
│── index.html
│── styles.css
│── app.js
│── README.md
index.html → estructura de la página
styles.css → estilos visuales modernos
app.js → lógica de la aplicación (fetch, DOM, eventos)
README.md → documentación del proyecto
⚙️ Decisiones tomadas
Se utilizó JavaScript puro sin frameworks para cumplir con los requisitos.
Se usó async/await para manejar promesas de forma más clara.
Se implementó un spinner de carga para mejorar la experiencia de usuario.
Se agregó un pequeño setTimeout para asegurar que el loading sea visible.
Se usó innerHTML para renderizar dinámicamente la tarjeta del Pokémon.
El diseño se hizo con CSS moderno (gradientes, sombras, responsive) para que la app se vea más atractiva.
⚠️ Dificultades encontradas
Manejo del estado de carga (el spinner quedaba visible permanentemente al principio).
Problemas con innerHTML y template strings (errores de sintaxis).
Validación del input para evitar requests vacíos.
Manejo de errores cuando la API devuelve un 404.
Ajustes de CSS (colores del input, visibilidad del texto, centrado).
▶️ Cómo usar
Abrir el archivo index.html en el navegador
Escribir el nombre de un Pokémon (ej: pikachu)
Presionar "Buscar"
Ver la información en pantalla
📌 Requisitos técnicos cumplidos
✔ fetch
✔ async/await
✔ manipulación del DOM
✔ manejo de errores
✔ validación de input
✔ código organizado en funciones
✔ sin frameworks