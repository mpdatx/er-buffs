import React, { useState } from 'react';

const App = () => {
  const temp_buffs = ['Weapon', 'Shield', 'Body', 'Aura']
  const shield_buffs = ['Option 1.1', 'Option 1.2', 'Option 1.3'];
  const options2 = ['Option 2.1', 'Option 2.2', 'Option 2.3'];

const body_buffs = ["Boiled Seafood",
"Livers",
"Cured Meats",
"White Cured Meats",
"Exalted Flesh",
"Bloodboil Aromatic",
"Ironjar Aromatic",
"Baldachin's Blessing",
"Radiant Baldachin's Blessing",
"Barriers",
"Greater Barriers",
"Flame, Grant Me Strength",
"Howl of Shabriri",
"Fire's Deadly Sin",
"Dragonbolt Blessing",
"Vyke's Dragonbolt (Body)"]

  const [selectedOption1, setSelectedOption1] = useState(body_buffs[0]);
  const [selectedOption2, setSelectedOption2] = useState(options2[0]);

  return (
    <div>
      <h1>React Dropdown Interaction</h1>
      
      <label>
        Dropdown 1:
        <select value={selectedOption1} onChange={e => setSelectedOption1(e.target.value)}>
          {body_buffs.map(option => <option key={option}>{option}</option>)}
        </select>
      </label>
      
      <br />
      
      <label>
        Dropdown 2:
        <select value={selectedOption2} onChange={e => setSelectedOption2(e.target.value)}>
          {options2.map(option => <option key={option}>{option}</option>)}
        </select>
      </label>
      
      <h2>Selected Options</h2>
      <p>{`Option 1: ${selectedOption1}`}</p>
      <p>{`Option 2: ${selectedOption2}`}</p>
    </div>
  );
}

export default App;
