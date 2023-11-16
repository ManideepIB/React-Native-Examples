import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../../redux/action/weatherActions';
import {deviceHeight, deviceWidth} from '../../utils/Dimensions';
import DataItem from '../../customComponents/DataItem';

class WeatherData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
    };
    this.cityName = props.cityName;
  }

  componentDidMount() {
    this.props.fetchWeather(this.cityName);
  }

  render() {
    const {weatherData} = this.props;
    // console.log(weatherData, 'weatherData====');

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
                {this.cityName}
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
                <DataItem
                  value={weatherData['visibility']}
                  title="Visibility"
                />
              </View>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    weatherData: state.weather.weatherData,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchWeather}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherData);

const styles = StyleSheet.create({});
