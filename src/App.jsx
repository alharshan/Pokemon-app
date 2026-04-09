import { useState } from "react";
import Card from "./Card";

const pokemons = [
  { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
  { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
  { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
  { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
  { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
  { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
  { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
  { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
  { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
  { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
  { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
  { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
  { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
  { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
  { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
  { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
  { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
  { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
  { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
  { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
];

function App() {
  const [selectedType, setSelectedType] = useState("All");

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        margin: "50px 0",
        paddingBottom: "40px",
        borderRadius: "12px",
        border: "2px solid #ddd",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          padding: "40px 0 20px 0",
          color: "#333",
          fontSize: "2.5rem",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Pokemon Card Collection
      </h1>

      {/* Manually add buttons for filtering */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        <button onClick={() => setSelectedType("All")}>All</button>
        <button onClick={() => setSelectedType("Fire")}>Fire</button>
        <button onClick={() => setSelectedType("Water")}>Water</button>
        <button onClick={() => setSelectedType("Grass")}>Grass</button>
        <button onClick={() => setSelectedType("Electric")}>Electric</button>
        <button onClick={() => setSelectedType("Normal")}>Normal</button>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        {pokemons.map(
          (pokemon) =>
            /* 4. تطبيق شرط الظهور باستخدام && */
            (selectedType === "All" || pokemon.type === selectedType) && (
              <Card key={pokemon.id}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  alt={pokemon.name}
                />
                <h3
                  style={{ textAlign: "center", textTransform: "capitalize" }}
                >
                  {pokemon.name}
                </h3>
                <p>Type: {pokemon.type}</p>
                <p>Hp: {pokemon.hp}</p>
                <p>Attack: {pokemon.attack}</p>
              </Card>
            ),
        )}
      </div>
    </div>
  );
}

export default App;
