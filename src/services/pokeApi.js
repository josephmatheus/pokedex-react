export async function getPokemonList(limit, offset) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = await response.json();
  return data.results;
}

export async function getPokemon(name = "1") {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  return data;
}

export async function getPokemonDescription(name) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  );
  const data = await response.json();
  data.flavor_text_entries = data.flavor_text_entries.filter(
    (entry) =>
      (entry.language.name === "en" && entry.version.name === "firered") ||
      (entry.language.name === "en" && entry.version.name === "legends-arceus") ||
      (entry.language.name === "en" && entry.version.name === "scarlet") ||
      (entry.language.name === "en" && entry.version.name === "shield") ||
      (entry.language.name === "en" && entry.version.name === "sun") ||
      (entry.language.name === "en" && entry.version.name === "ultra-sun")
  );
  return data.flavor_text_entries[0].flavor_text;
}
