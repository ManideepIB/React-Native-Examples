import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeather} from '../../redux/action/weatherActions';
import {deviceHeight, deviceWidth} from '../../utils/Dimensions';
import {DataItem, useFetchData} from '../../components/CustomHooks';

const WeatherData = ({cityName}) => {
  //   const {data: weatherData} = useFetchData(
  //     cityName,
  //     state => state.weather.weatherData,
  //     fetchWeather,
  //   );
  // const {weatherData} = useWeatherData(cityName);
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather.weatherData);
  console.log(weatherData, 'weatherdata from screen************');

  useEffect(() => {
    dispatch(fetchWeather(cityName));
  }, [dispatch, cityName]);

  return (
    <View>
      {weatherData ? (
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: deviceHeight - 450,
          }}>
          <View>
            <Text style={{color: 'white', fontSize: 40, marginVertical: 40}}>
              {cityName}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={styles.image}
              source={{
                uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
              }}
            />
            <Text style={{fontSize: 22, color: 'white', textAlign: 'center'}}>
              {weatherData['weather'][0]['main']}
            </Text>
          </View>

          <Text style={{color: 'white', fontSize: 64}}>
            {(weatherData['main']['temp'] - 273).toFixed(2)}&deg; C
          </Text>

          <View
            style={{
              marginVertical: 20,
            }}>
            <Text style={{color: 'white', fontSize: 22, marginBottom: 16}}>
              Weather Details
            </Text>
            <View style={{width: deviceWidth - 60}}>
              <DataItem value={weatherData['wind']['speed']} title="Wind" />
              <DataItem
                value={weatherData['main']['pressure']}
                title="Pressure"
              />
              <DataItem
                value={`${weatherData['main']['humidity']}%`}
                title="Humidity"
              />
              <DataItem value={weatherData['visibility']} title="Visibility" />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default WeatherData;

const styles = StyleSheet.create({});
