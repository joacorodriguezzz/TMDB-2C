import React from "react";

function MovieContainer() {
  // Supongamos que tienes un array de películas con información
  const movies = [
    { id: 1, title: "Película 1", poster: "poster1.jpg" },
    { id: 2, title: "Película 2", poster: "poster2.jpg" },
    { id: 3, title: "Película 3", poster: "poster3.jpg" },
    { id: 4, title: "Película 4", poster: "poster4.jpg" },
    { id: 5, title: "Película 5", poster: "poster5.jpg" },
    { id: 6, title: "Película 6", poster: "poster6.jpg" },
    { id: 7, title: "Película 7", poster: "poster7.jpg" },
    { id: 8, title: "Película 8", poster: "poster8.jpg" },
    { id: 9, title: "Película 9", poster: "poster9.jpg" },
    { id: 10, title: "Película 10", poster: "poster10.jpg" },
    { id: 11, title: "Película 11", poster: "poster11.jpg" },
    { id: 12, title: "Película 12", poster: "poster12.jpg" },
    { id: 13, title: "Película 13", poster: "poster13.jpg" },
    { id: 14, title: "Película 14", poster: "poster14.jpg" },
    { id: 15, title: "Película 15", poster: "poster15.jpg" },
    { id: 16, title: "Película 16", poster: "poster16.jpg" },
  ];

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "50px",
    padding: "20px",
  };

  const movieCardStyle = {
    backgroundColor: "black",
    border: "1px solid #e1e1e1",
    borderRadius: "5px",
    padding: "100px",
    textAlign: "center",
    color: "white",
  };

  const movieImageStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <div style={gridContainerStyle}>
      {movies.map((movie) => (
        <div key={movie.id} style={movieCardStyle}>
          <img src={movie.poster} alt={movie.title} style={movieImageStyle} />
          <div>
            <h3>{movie.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieContainer;
