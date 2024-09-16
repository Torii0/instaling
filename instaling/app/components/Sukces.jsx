import React from "react";
import gifSrc from "../assets/kaczuszka.gif";
function Sukces({ wynik }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Aby ustawić tekst i GIF jeden pod drugim
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        fontSize: "24px",
        height: "100vh",
        margin: "auto",
      }}
    >
      <div>{wynik}</div>
      <img
        src={gifSrc}
        alt="Success"
        style={{
          marginTop: "20px", // Dystans między tekstem a GIF-em
          maxWidth: "80%", // Aby GIF był responsywny
          height: "auto", // Zachowuje proporcje GIF-a
        }}
      />
    </div>
  );
}

export default Sukces;
