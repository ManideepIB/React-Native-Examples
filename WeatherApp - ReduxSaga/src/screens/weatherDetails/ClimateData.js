import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {deviceHeight, deviceWidth} from '../../utils/Dimensions';
import {fetchClimate} from '../../redux/action/climateActions';
import {DataItem, useFetchData} from '../../components/CustomHooks';

const ClimateData = ({cityName}) => {
  const {data: climateData} = useFetchData(
    cityName,
    state => state.climate.climateData,
    fetchClimate,
  );
  // const {climateData} = useClimateData(cityName);

  // const dispatch = useDispatch();
  // const climateData = useSelector(state => state.climate.climateData);
  // // console.log(climateData, 'climateData........');
  // useEffect(() => {
  //   dispatch(fetchClimate(cityName));
  // }, [dispatch, cityName]);

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
};

export default ClimateData;

const styles = StyleSheet.create({
  forecastItem: {
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    padding: 10,
  },
});
