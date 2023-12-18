import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import MovieContainer from "./components/MovieContainer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import OnMovie from "./pages/OnMovie";
import RegisterPage from "./pages/Registro";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
 
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favoritos" element={<favoritos />} />
        <Route path="/series" element={<series />} />
        <Route path="/peliculas" element={<peliculas />} />
        <Route path="/search" element={<Search />} />
        <Route path="/on-movie/:id" element={<OnMovie />} />
        <Route path="/registro" element={<RegisterPage />} />
      </Routes>
     
    </div>
  );
}

export default App;
// const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
