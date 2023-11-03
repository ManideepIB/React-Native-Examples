import {GET_WEATHER, SET_ERROR} from '../constants';

const initialState = {
  weatherData: null,
  error: null,
};

const WeatherReducer = (state = initialState, action) => {
  //   console.log(action.payload, '///');
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weatherData: action.payload,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default WeatherReducer;
