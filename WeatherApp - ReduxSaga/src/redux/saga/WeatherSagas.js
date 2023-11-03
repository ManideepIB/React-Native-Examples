// sagas.js
import {all, call, put, takeEvery} from 'redux-saga/effects';

import {FETCH_WEATHER} from '../constants';
import {fetchWeatherError, fetchWeatherSuccess} from '../action/weatherActions';
import {API_KEY} from '../../utils/Constants';
import {fetchClimateSuccess} from '../action/climateActions';

//Multiple API
// export const fetchWeatherData = async city => {
//   try {
//     const weatherResponse = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
//     );
//     const weatherData = await weatherResponse.json();
//     console.log(weatherData, 'weatherData//////');

//     // Make a second API call for climate forecast
//     const climateResponse = await fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`,
//     );
//     const climateData = await climateResponse.json();

//     return {weather: weatherData, climate: climateData};
//   } catch (error) {
//     console.log(error, 'error');
//     throw error;
//   }
// };

// export const fetchWeatherData = async city => {
//   try {fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
//       ),
//       fetch(
//         `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`,
//       ),
//     const [weatherResponse, climateResponse] = await Promise.all([
//         weatherResponse.json(),
//         climateResponse.json(),
//
//     ]);
//   } catch (error) {
//     throw error;
//   }
// };

//single API

// export const fetchWeatherData = async city => {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// function* fetchWeather(action) {
//   try {
//     const data = yield call(fetchWeatherData, action.payload);
//     yield put(fetchWeatherSuccess(data));
//   } catch (error) {
//     yield put(fetchWeatherError(error));
//   }
// }

// MultiFunction API

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

// Separate function for fetching climate data
export const fetchClimateData = async city => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`,
    );
    const data = await response.json();
    // console.log(data, 'data from weather saga----');
    return data;
  } catch (error) {
    throw error;
  }
};

function* fetchWeather(action) {
  try {
    const [weatherData, climateData] = yield all([
      call(fetchWeatherData, action.payload),
      call(fetchClimateData, action.payload),
    ]);
    // console.log('weatherData:', weatherData);
    // console.log('climateData:', climateData);
    yield put(fetchWeatherSuccess(weatherData));
    yield put(fetchClimateSuccess(climateData));
  } catch (error) {
    yield put(fetchWeatherError(error));
  }
}

export function* watchFetchWeather() {
  yield takeEvery(FETCH_WEATHER, fetchWeather);
}
