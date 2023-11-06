import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import getMovies from "../services/BuscarPeliculas";

function NavBar() {
  const navbarStyle = {
    backgroundColor: "#20232A",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 0",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const logoStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#61dafb",
  };

  const navContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const navItemStyle = {
    marginLeft: "20px",
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
  };

  const searchInputStyle = {
    padding: "5px",
    borderRadius: "5px",
    border: "none",
    marginRight: "20px",
    backgroundColor: "#282C35",
    color: "white",
  };

  const searchWhileWriting = (event) => {
    getMovies(event.target.value);
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={logoStyle}>
        TMDB
      </Link>
      <div style={navContainerStyle}>
        {/* <input
          type="text"
          placeholder="Buscar películas"
          style={searchInputStyle}
          onChange={searchWhileWriting}
        /> */}
        <Link to="/search" style={navItemStyle}>
          <button> Buscar </button>
        </Link>
        <Link to="/login" style={navItemStyle}>
          <button className="login-register-button">Login/Register</button>
        </Link>
        <Link to="/peliculas" style={navItemStyle}>
          Películas
        </Link>
        <Link to="/series" style={navItemStyle}>
          Series
        </Link>
        <Link to="/favoritos" style={navItemStyle}>
          Favoritos
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
