import axios from 'axios';
import { FETCH } from './type';

export const getMovie = (movieName) => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=c951ff1&s=${movieName}`)
    .then((response) =>
      dispatch({
        type: FETCH,
        payload: response.data.Search[0],
      })
    )
    .catch((err) => {
      console.log(err);
      dispatch({
        type: 'ERROR',
      });
    });
};
/* export const getMovie = async (movieName) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=c951ff1&s=${movieName}`
      );
      await console.log(response.data.Search[0]);
      console.log('hello');
      await dispatch({ type: FETCH, payload: response.data.Search[0] });
    } catch (error) {
      console.error(error);
    }
  };
};
 */
