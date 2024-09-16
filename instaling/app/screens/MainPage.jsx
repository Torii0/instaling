import React, { useState, useEffect } from "react";
import Logowanie from "../components/Logowanie";
import Ladowanie from "../components/Ladowanie";
import Sukces from "../components/Sukces";

const MainPage = () => {
  const [strona, setStrona] = useState("logowanie");
  const [response, setResponse] = useState("");

  const handleLoginSubmit = async (login, password) => {
    setStrona("ladownanie"); // Przechodzimy do widoku ładowania
    console.log("jsbda");
    const res = await fetch(
      `http://94.246.147.193:3000/run/${login}/${password} `
    );
    const result = await Promise.race([
      res.text(),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 60000)
      ),
    ]);
    setResponse(result);
    setStrona("sukces");
  };

  return (
    <div>
      {/* Wyświetlanie odpowiedniego komponentu w zależności od stanu strony */}
      {strona === "logowanie" && (
        <Logowanie onLoginSubmit={handleLoginSubmit} />
      )}
      {strona === "ladownanie" && <Ladowanie />}
      {strona === "sukces" && <Sukces wynik={response} />}
    </div>
  );
};

export default MainPage;
