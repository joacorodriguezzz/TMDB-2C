import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  // if (password !== confirmPassword) {
  //   setError(true);
  //   alert("Las contraseñas no coinciden");
  //   return;
  // } else {
  //   setError(false)
  // }

  // if (name === "" || password === "" || email === "" || lastName === "") {
  //   setError(true);
  //   return;
  // } else setError(false)

  function callPostRegister(e) {
    e.preventDefault();
    
    // Assuming password and email are defined somewhere in your code
  
  
    console.log('hola gordo pete');
    console.log(password, email, username);
  
    axios.post('http://localhost:5000/api/user/register', {
      'email': email,
      'password': password,
      'username': username
    })
      .then((res) => {
        console.log(res.status); // Assuming the user data is in the 'data' property of the response
      })
      .catch((error) => {
        console.error(error);
      });
  }
  


  return (
    <div id="main-div">
      <h1 id="title">Registro</h1>
      <form>
        <div>
          <label id="email">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label id="email">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label id="password">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label id="confirmPassword">Confirme su contraseña</label>
          <input
            type="password"
            // value={confirmPassword}
            // onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={callPostRegister} id="signUp"> Registrarse </button>
        <Link to={"/login"}>
        
        <button id="signUp"> Ya tiene una cuenta? </button>
        
        </Link>
      </form>
    </div>
  );
}

export default RegisterPage;
