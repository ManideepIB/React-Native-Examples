import {combineReducers} from 'redux';
import WeatherReducer from './WeatherReducer';

const RootReducer = combineReducers({
  weather: WeatherReducer,
});

export default RootReducer;
