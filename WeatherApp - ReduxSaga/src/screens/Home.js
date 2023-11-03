import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {deviceHeight, deviceWidth} from '../utils/Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/action/authActions';

const Home = ({navigation}) => {
  const [city, setCity] = useState('');

  // const username = useSelector(state => state.auth.user.username.username);
  // console.log(username, 'Home username;;;;');
  const dispatch = useDispatch();
  const cities = [
    {
      name: 'Hyderabad',
      image: require('../assets/images/Hyd.jpg'),
    },
    {
      name: 'New Delhi',
      image: require('../assets/images/image3.jpg'),
    },
    {
      name: 'New York',
      image: require('../assets/images/image4.jpg'),
    },
    {
      name: 'London',
      image: require('../assets/images/image5.jpg'),
    },
    {
      name: 'San Francisco',
      image: require('../assets/images/image6.jpg'),
    },
    {
      name: 'New Jersey',
      image: require('../assets/images/image7.jpg'),
    },
  ];

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/night2.jpg')}
        style={{width: deviceWidth, height: deviceHeight}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
          <Icon name="menu" color="white" size={30} />
          <TouchableOpacity onPress={handleLogout}>
            <Image
              source={require('../assets/images/user.jpg')}
              style={{height: 45, width: 45, borderRadius: 50}}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          <Text style={{fontSize: 40, color: 'white', marginBottom: 20}}>
            {/* Welcome {username} */}
            Welcome
          </Text>
          <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
            Search the city by the name
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 16,
              paddingHorizontal: 10,
            }}>
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details', {name: city});
                setCity('');
              }}>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              paddingHorizontal: 10,
              marginTop: 180,
              marginBottom: 20,
            }}>
            My Locations
          </Text>

          <FlatList
            horizontal
            data={cities}
            renderItem={({item}) => (
              <Cards
                name={item.name}
                image={item.image}
                navigation={navigation}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
