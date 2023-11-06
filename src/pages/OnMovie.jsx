import React, { useEffect, useState } from "react";
import Card from "../commons/Card";
import getMovies from "../services/BuscarPeliculas";
import Search from "./Search";
import { Link, useParams } from "react-router-dom";
import IndividualMovie from "../services/IndividualMovie";

const OnMovie = () => {
  const estadoInicial = {};
  const [estado, setEstado] = useState(estadoInicial);

  const { id } = useParams();
  const executor = async () => {
    const movie = await IndividualMovie(id);
    setEstado(movie);
  };

  useEffect(() => {
    executor();
  }, []);
  console.log(estado);

  return (
    <div>
      <h1>{estado.title}</h1>
      <img
        src={
          `https://www.themoviedb.org/t/p/w440_and_h660_face` +
          estado.poster_path
        }
      />
      <h2>{estado.overview}</h2>
      <p>Popularity {estado.popularity}</p>
      <p>Release Date {estado.release_date}</p>
    </div>
  );
};

export default OnMovie;
