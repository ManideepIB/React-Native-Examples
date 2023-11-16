import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {deviceHeight, deviceWidth} from '../utils/Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import {logout} from '../redux/action/authActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    };
  }
  handleLogout = () => {
    this.props.logout();
  };
  render() {
    const {city} = this.state;
    const {navigation} = this.props;
    const {userName} = this.props;
    console.log(userName, 'user name');

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
            <TouchableOpacity onPress={this.handleLogout}>
              {/* <Image
                source={require('../assets/images/user.jpg')}
                style={{height: 45, width: 45, borderRadius: 50}}
              /> */}
              <Image
                source={require('../assets/images/logout.jpg')}
                style={{height: 45, width: 45, borderRadius: 50}}
              />
              <Text style={{color: 'white'}}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal: 20, marginTop: 100}}>
            <Text style={{fontSize: 40, color: 'white', marginBottom: 20}}>
              Welcome {this.props.userName}
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
                onChangeText={val => this.setState({city: val.trim()})}
                placeholder="Search City"
                placeholderTextColor="white"
                style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Details', {name: city});
                  this.setState({city: ''});
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
                <>
                  <TouchableOpacity
                    style={{marginHorizontal: 10}}
                    onPress={() =>
                      navigation.navigate('Details', {name: item.name})
                    }>
                    <ImageBackground
                      source={item.image}
                      style={{
                        height: deviceHeight / 5,
                        width: deviceWidth / 2 - 50,
                      }}
                      imageStyle={{borderRadius: 16}}
                    />
                    <View
                      style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                      }}>
                      <Text
                        style={{
                          fontSize: 28,
                          width: '100%',
                          height: '100%',
                          textAlign: 'center',
                          textAlignVertical: 'bottom',
                          color: 'white',
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    userName: state.auth.user.firstName,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({logout}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
