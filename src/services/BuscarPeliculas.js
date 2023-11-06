import react from "react";
import axios from "axios";

const getMovies = async (inputValue) => {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1&api_key=2fa09602348218b8cfa532258b39a358`;
    const peticion = await axios.get(url);
    return peticion.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default getMovies;
// 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
