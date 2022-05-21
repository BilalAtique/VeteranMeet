import { useState } from "react";
import "./App.css";
import { allEntitySectors, EntitySector } from "@bitflipz/shared/build/Entity";
import { capitalizeFirstLetter } from "@bitflipz/shared/build/util";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [sectorSet, setSectorSet] = useState<Set<EntitySector>>(new Set([]));
  /* const [name, setName] = useState(""); */

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </label>
      <br />
      <div>
        <div className="sectorList">
          {Array.from(sectorSet).map((sector) => (
            <>
              <div>
                {sector}{" "}
            <button onClick={() => setSectorSet(new Set([]))}>Remove</button>{" "}
                  </div>
              <br />
            </>
          ))}
        </div>
      </div>
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
