'use client';
import { useEffect, useState } from 'react';

export default function CSR() {
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, []);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="center-container">
      <div className="pokemon-card">
        <img
          className="pokemon-img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <div className="pokemon-info">
          <h1>{pokemon.name}</h1>
          <p>Weight: {pokemon.weight}</p>
          <p>Height: {pokemon.height}</p>
          <p>Base Experience: {pokemon.base_experience}</p>
        </div>
      </div>
    </div>
  );
}
