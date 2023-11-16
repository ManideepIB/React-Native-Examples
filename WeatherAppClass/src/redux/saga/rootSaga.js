import {all} from 'redux-saga/effects';
import {watchFetchWeather} from './WeatherSagas';
import {watchLogin} from './authSaga';
import {watchFetchForecaste} from './ForecasteSaga';

function* rootSaga() {
  yield all([watchFetchWeather(), watchLogin(), watchFetchForecaste()]);
}

export default rootSaga;
