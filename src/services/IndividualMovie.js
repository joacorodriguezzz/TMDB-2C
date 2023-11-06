import axios from "axios";

const IndividualMovie = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=2fa09602348218b8cfa532258b39a358`;
  try {
    const peticion = await axios.get(url);
    return peticion.data;
  } catch (error) {
    console.error(error);
  }
};

export default IndividualMovie;
