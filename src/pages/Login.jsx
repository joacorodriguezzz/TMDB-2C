import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
e.preventDefault
  
if(email,password){
  axios.post ('http://localhost:5000/api/user/login', {
  "email": email,
  "password": password
  })
}

  
  return (
    <div>
      <h1 id="title">Iniciar Sesión</h1>
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
        <button id="logIn">Iniciar Sesión</button>
        <Link to="/registro">
          <button id="signUp"> Registrarse </button>
        </Link>
      </form>
    </div>
  );
}}

export default LoginPage;
