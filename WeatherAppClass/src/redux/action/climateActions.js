import {
  FETCH_CLIMATE,
  FETCH_CLIMATE_ERROR,
  FETCH_CLIMATE_SUCCESS,
} from '../constants';
export const fetchClimate = city => ({
  type: FETCH_CLIMATE,
  payload: city,
});
export const fetchClimateSuccess = data => ({
  type: FETCH_CLIMATE_SUCCESS,
  payload: data,
});
export const fetchClimateError = error => ({
  type: FETCH_CLIMATE_ERROR,
  payload: error,
});
