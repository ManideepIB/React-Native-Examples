import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {fetchWeather} from '../redux/action/weatherActions';
import {fetchClimate} from '../redux/action/climateActions';

// export const useWeatherData = cityName => {
//   const dispatch = useDispatch();
//   const weatherData = useSelector(state => state.weather.weatherData);
//   useEffect(() => {
//     dispatch(fetchWeather(cityName));
//   }, [dispatch, cityName]);

//   return {weatherData};
// };

// export const useClimateData = cityName => {
//   const dispatch = useDispatch();
//   const climateData = useSelector(state => state.climate.climateData);

//   useEffect(() => {
//     dispatch(fetchClimate(cityName));
//   }, [dispatch, cityName]);

//   return {climateData};
// };

export const useFetchData = (cityName, dataSelector, fetchDataAction) => {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);

  useEffect(() => {
    dispatch(fetchDataAction(cityName));
  }, [dispatch, cityName]);

  return {data};
};

export const DataItem = ({title, value}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    <Text style={{color: 'gray', fontSize: 22}}>{title}</Text>
    <Text style={{color: 'white', fontSize: 20}}>{value}</Text>
  </View>
);
