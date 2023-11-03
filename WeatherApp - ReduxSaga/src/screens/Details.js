import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useDispatch, useSelector} from 'react-redux';
import {combineReducers} from 'redux';

import {deviceHeight, deviceWidth} from '../utils/Dimensions';
import {fetchWeather} from '../redux/action/weatherActions';
import {API_KEY} from '../utils/Constants';
import WeatherData from './weatherDetails/WeatherData';
import ClimateData from './weatherDetails/ClimateData';

const Details = props => {
  const [data, setData] = useState();
  const {name} = props.route.params;
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather.weatherData);
  const climateData = useSelector(state => state.climate.climateData);
  // const climateData = useSelector(state => state.climate.climateData);

  const error = useSelector(state => state.weather.error);
  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
  //   )
  //     .then(res => res.json())
  //     .then(res => setData(res))
  //     .catch(err => console.log(err));
  //   console.log(data, 'data');
  // }, []);

  useEffect(() => {
    dispatch(fetchWeather(name));
  }, [dispatch, name]);

  // console.log(weatherData, 'weatherData=====[[[[[[[[[[[[[');
  // console.log(climateData, 'climateData[[[[[[[[[[[[[]]]]]]]]');
  const Data = ({title, value}) => (
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
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/image1.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 10,
          paddingHorizontal: 30,
        }}>
        <View
          style={{
            marginVertical: 10,
            // backgroundColor: 'green',
          }}>
          <WeatherData cityName={name} />
          {/* <View>
            {weatherData ? (
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  height: deviceHeight - 450,
                }}>
                <View>
                  <Text
                    style={{color: 'white', fontSize: 40, marginVertical: 40}}>
                    {name}
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
                  <Text
                    style={{fontSize: 22, color: 'white', textAlign: 'center'}}>
                    {weatherData['weather'][0]['main']}
                  </Text>
                </View>

                <Text style={{color: 'white', fontSize: 54, marginBottom: 10}}>
                  {(weatherData['main']['temp'] - 273).toFixed(2)}&deg; C
                </Text>

                <View
                  style={{
                    marginVertical: 30,
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 22, marginBottom: 16}}>
                    Weather Details
                  </Text>
                  <View style={{width: deviceWidth - 60}}>
                    <Data value={weatherData['wind']['speed']} title="Wind" />
                    <Data
                      value={weatherData['main']['pressure']}
                      title="Pressure"
                    />
                    <Data
                      value={`${weatherData['main']['humidity']}%`}
                      title="Humidity"
                    />
                    <Data
                      value={weatherData['visibility']}
                      title="Visibility"
                    />
                  </View>
                </View>
              </View>
            ) : (
              <Text
                style={{
                  color: 'white',
                  margin: 20,
                  fontSize: 24,
                }}>
               
                Loading
                <ActivityIndicator size="large" />
              </Text>
            )}
          </View> */}

          <ClimateData cityName={name} />

          {/* <View
            style={{
              width: deviceWidth - 50,
              height: deviceHeight - 400,
              paddingBottom: 35,
              marginVertical: 20,
            }}>
            <Text style={{color: 'white', fontSize: 22}}>Forecast Details</Text>

            {climateData ? (
              <FlatList
                data={climateData.list}
                keyExtractor={item => item.dt.toString()}
                renderItem={({item}) => (
                  <View style={styles.forecastItem}>
                    <Data value={item.dt_txt} title="Date" />
                    <Data
                      value={`${(item.main.temp - 273).toFixed(2)}°C`}
                      title="Temperature"
                    />
                    <Data value={item.weather[0].description} title="Weather" />
                  </View>
                )}
              />
            ) : (
              <Text
                style={{
                  color: 'white',
                  margin: 20,
                  fontSize: 24,
                }}>
                Loading
                <ActivityIndicator size="large" />
              </Text>
            )}
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 100,
    alignContent: 'center',
    // backgroundColor: 'white',
  },
  forecastItem: {
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    padding: 10,
  },
});
