import React, { useState } from "react";
import Dropdown from "./components/dropdown";
function App() {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  return (
    <div className="App">
      {selectedPokemon && <div>Seu pokemon é: {selectedPokemon}</div>}
      <Dropdown
        title="Selecione seu pokemon inicial"
        options={["Bulbasaur", "Squirtle", "Charmander"]}
        onSelect={setSelectedPokemon}
      />
    </div>
  );
}

export default App;
