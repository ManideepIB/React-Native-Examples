import {FETCH_WEATHER_ERROR, FETCH_WEATHER_SUCCESS} from '../constants';

const initialState = {
  weatherData: null,
  error: null,
};
export const WeatherReducer = (state = initialState, action) => {
  // console.log(action.payload, 'weatherReducerpayload========');
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weatherData: action.payload,
        error: null,
      };

    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default WeatherReducer;
