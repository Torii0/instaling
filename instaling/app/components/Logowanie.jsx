import { FormEvent, useState } from "react";
import "./Logowanie.css";

function Logowanie({ onLoginSubmit }) {
  const [dane, setDane] = useState({
    login: "",
    haslo: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    onLoginSubmit(dane.login, dane.haslo);
  };
  return (
    <div>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Instaling</h3>

        <label for="username">Login</label>
        <input
          type="text"
          value={dane.login}
          placeholder="Login"
          id="username"
          onChange={(event) => setDane({ ...dane, login: event.target.value })}
        />

        <label for="password">Hasło</label>
        <input
          type="password"
          value={dane.haslo}
          placeholder="Hasło"
          id="password"
          onChange={(event) => {
            setDane({ ...dane, haslo: event.target.value });
          }}
        />

        <button>Zrób instalinga</button>
      </form>
    </div>
  );
}

export default Logowanie;
