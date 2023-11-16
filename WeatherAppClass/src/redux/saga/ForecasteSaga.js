import {call, put, takeEvery} from 'redux-saga/effects';

import {FETCH_CLIMATE, FETCH_WEATHER} from '../constants';
import {fetchWeatherError, fetchWeatherSuccess} from '../action/weatherActions';
import {API_KEY} from '../../utils/Constants';
import {fetchClimateError, fetchClimateSuccess} from '../action/climateActions';

export const fetchClimateData = async city => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`,
    );
    const data = await response.json();
    // console.log(data, 'data from climate saga----');
    return data;
  } catch (error) {
    throw error;
  }
};

function* fetchClimate(action) {
  try {
    const data = yield call(fetchClimateData, action.payload);
    yield put(fetchClimateSuccess(data));
  } catch (error) {
    yield put(fetchClimateError(error));
  }
}

export function* watchFetchForecaste() {
  yield takeEvery(FETCH_CLIMATE, fetchClimate);
}
