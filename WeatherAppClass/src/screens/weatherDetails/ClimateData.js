import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchClimate} from '../../redux/action/climateActions';
import DataItem from '../../customComponents/DataItem';
import {deviceHeight, deviceWidth} from '../../utils/Dimensions';

class ClimateData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      climateData: null,
    };
    this.cityName = props.cityName;
  }

  componentDidMount() {
    this.props.fetchClimate(this.cityName);
    // console.log(this.props, 'props----');
  }

  render() {
    const {climateData} = this.props;
    // console.log(climateData, 'climatedata from screeen');

    return (
      <View
        style={{
          width: deviceWidth - 50,
          height: deviceHeight - 400,
          paddingBottom: 15,
        }}>
        <Text style={{color: 'white', fontSize: 22}}>Forecast Details</Text>
        {climateData ? (
          <FlatList
            data={climateData.list}
            keyExtractor={item => item.dt.toString()}
            renderItem={({item}) => (
              <View style={styles.forecastItem}>
                {/* <Data value={weatherData.weather['wind']['speed']} title="Wind" /> */}
                <DataItem value={item.dt_txt} title="Date" />
                <DataItem
                  value={`${(item.main.temp - 273).toFixed(2)}°C`}
                  title="Temperature"
                />
                <DataItem value={item.weather[0].description} title="Weather" />

                {/* Add more forecast details as needed */}
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
            {/* No forecast data available */}
            Loading
            <ActivityIndicator size="large" />
          </Text>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    climateData: state.climate.climateData,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchClimate}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ClimateData);

const styles = StyleSheet.create({
  forecastItem: {
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    padding: 10,
  },
});
