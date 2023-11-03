import {View, ImageBackground, Image, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import {API_KEY} from '../../utils/constants';

import {useDispatch, useSelector} from 'react-redux';
import {combineReducers} from 'redux';
import {getWeather} from '../redux/action/WeatherAction';
import {deviceHeight, deviceWidth} from '../utils/Dimensions';

const Details = props => {
  const [data, setData] = useState();
  const {name} = props.route.params;
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather.weatherData);
  const error = useSelector(state => state.weather.error);
  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
  //   )
  //     .then(res => res.json())
  //     .then(res => setData(res))
  //     .catch(err => console.log(err));
  // }, []);
  useEffect(() => {
    dispatch(getWeather(name));
  }, [dispatch, name]);
  // console.log(weatherData, 'weatherData////');
  const Data = ({title, value}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{color: 'gray', fontSize: 22}}>{title}</Text>
      <Text style={{color: 'white', fontSize: 22}}>{value}</Text>
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
          paddingVertical: 20,
          paddingHorizontal: 30,
        }}>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
          <Icon name="menu" size={46} color="white" />
          <Image
            source={require('../../assets/images/user.jpg')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View> */}
        {weatherData ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 150,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 40, marginVertical: 40}}>
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
              <Text style={{fontSize: 22, color: 'white', textAlign: 'center'}}>
                {weatherData['weather'][0]['main']}
              </Text>
            </View>

            <Text style={{color: 'white', fontSize: 64}}>
              {(weatherData['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>

            <View>
              <Text style={{color: 'white', fontSize: 22, marginBottom: 16}}>
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
                <Data value={weatherData['visibility']} title="Visibility" />
              </View>
            </View>
          </View>
        ) : null}
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
    // backgroundColor: 'green',
  },
});
