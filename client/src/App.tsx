// import React from 'react';
import "./App.css";
import { allEntitySectors } from "@bitflipz/shared/build/Entity";
import { capitalizeFirstLetter } from "@bitflipz/shared/build/util";

function App() {
  return (
    <form>
      <label>
        Name:
        <input type="text" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" />
      </label>
      <br />
      <label>
        Location:
        <input type="text" />
      </label>
      <br />
      <label>
        Profession & hobbies:
        <select>
          {Array.from(allEntitySectors).map((sector) => (
            <option value={sector}>{capitalizeFirstLetter(sector)}</option>
          ))}
        </select>
      </label>
    </form>
  );
}

export default App;
