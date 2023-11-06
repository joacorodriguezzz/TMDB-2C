import { react, useState, useEffect } from "react";
import getMovies from "../services/BuscarPeliculas";
import { Link } from "react-router-dom";

const Search = () => {
  const estadoInicial = [];
  const [estado, setEstado] = useState(estadoInicial);
  const [value, setValue] = useState(" ");

  const onSubmit = async (event) => {
    event.preventDefault();
    const movies = await getMovies(value);

    setEstado(movies);
    console.log(movies);
  };
  const onChange = (event) => {
    setValue(event.target.value);
  };

  console.log(estado);

  return (
    <div>
      <h1>Peliculas</h1>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} />
        <button> Buscar </button>
      </form>

      {estado.length !== 0
        ? estado.map((element, index) => (
            <div>
              <h1>{element.title}</h1>
              <form>
                <Link to={`/on-movie/${element.id}`}>
                  <button>
                    <img
                      src={
                        `https://www.themoviedb.org/t/p/w440_and_h660_face` +
                        element.poster_path
                      }
                      alt=""
                    />
                  </button>
                </Link>
              </form>
              <p>{element.overview}</p>
            </div>
          ))
        : null}
    </div>
  );
};
//
export default Search;
