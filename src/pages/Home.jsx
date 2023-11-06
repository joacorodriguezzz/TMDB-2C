import React from "react";
import { Routes, Route } from "react-router";
import Login from "./Login";
import NavBar from "../components/NavBar";
import MovieContainer from "../components/MovieContainer";

function Home() {
  return (
    <div>
      <MovieContainer />
    </div>
  );
}

export default Home;
