import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="main-div">
      <h1 id="title">Registro</h1>
      <form>
        <div>
          <label id="email">Email/Usuario:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label id="password">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button id="signUp"> Registrarse </button>
      </form>
    </div>
  );
}

export default RegisterPage;
