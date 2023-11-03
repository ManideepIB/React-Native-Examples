import {combineReducers} from 'redux';
import WeatherReducer from './WeatherReducer';
import authReducer from './authReducer';
import climateReducer from './climateReducer';

const RootReducer = combineReducers({
  weather: WeatherReducer,
  auth: authReducer,
  climate: climateReducer,
});

export default RootReducer;
