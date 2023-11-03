import {API_KEY} from '../../utils/Constants';
import {GET_WEATHER, SET_ERROR} from '../constants';

export const getWeather = name => {
  return async dispatch => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
      );
      if (!response.ok) {
        const resData = await response.json();
        throw new Error(resData.message);
      }
      const resData = await response.json();
      //   console.log('Action Type: GET_WEATHER, Payload:', resData);

      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
      console.log(type, Payload, resData);

      //   console.log(resData['weather'][0]['main'], 'resData=======');
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
const setError = error => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};
