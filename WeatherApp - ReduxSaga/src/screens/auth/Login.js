import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {deviceHeight, deviceWidth} from '../../utils/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../../redux/action/authActions';
const Login = () => {
  const [username, setUsername] = useState('atuny1');
  const [password, setPassword] = useState('9uQFF1Lh');

  const dispatch = useDispatch();

  const handleLogin = () => {
    // let validUser = loggedUser?.find(
    //   item => item.username === username && item.password === password,
    // );
    dispatch(loginSuccess(username, password));
    // if (validUser.username.length > 0) {
    //   dispatch(login(username, password));
    // }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/cloudy.jpeg')}
        style={{width: deviceWidth, height: deviceHeight}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />

      <View
        style={{
          position: 'absolute',
          //   paddingVertical: 20,
          //   paddingHorizontal: 10,
        }}>
        <View>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              marginBottom: 105,
              color: 'white',
              textAlign: 'center',
            }}>
            Welcome
          </Text>
          <TextInput
            style={styles.inputBox}
            value={username}
            placeholder="eg: John"
            placeholderTextColor="white"
            onChangeText={text => {
              setUsername(text);
            }}
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            secureTextEntry
            placeholder="password"
            placeholderTextColor="white"
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View>
          <TouchableOpacity style={[styles.loginBtn]} onPress={handleLogin}>
            {/* <Text style={styles.loginText}>LOG IN</Text> */}

            <AntDesign name="arrowright" color="white" size={50} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aliceblue',
  },
  inputBox: {
    borderWidth: 2,
    width: 300,
    borderRadius: 5,
    borderColor: 'white',
    marginBottom: 10,
    fontSize: 18,
    color: 'white',
    paddingLeft: 20,
  },
  loginBtn: {
    borderRadius: 50,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: 'steelblue',
  },
  loginText: {
    fontSize: 18,
    color: 'white',
  },
});
