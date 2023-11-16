// sagas.js
import {all, call, put, takeEvery} from 'redux-saga/effects';

import {FETCH_WEATHER} from '../constants';
import {fetchWeatherError, fetchWeatherSuccess} from '../action/weatherActions';
import {API_KEY} from '../../utils/Constants';
import {fetchClimateSuccess} from '../action/climateActions';

export const fetchWeatherData = async city => {
  // console.log('fetchWeatherData is called');
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
    );
    const data = await response.json();
    // console.log(data, 'weatherSagaData-------');
    return data;
  } catch (error) {
    throw error;
  }
};

function* fetchWeather(action) {
  try {
    const data = yield call(fetchWeatherData, action.payload);
    console.log(data, 'data from weather saga');
    yield put(fetchWeatherSuccess(data));
  } catch (error) {
    yield put(fetchWeatherError(error));
  }
}
export function* watchFetchWeather() {
  yield takeEvery(FETCH_WEATHER, fetchWeather);
}
