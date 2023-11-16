import React, {Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {deviceHeight, deviceWidth} from '../../utils/Dimensions';
import {loginRequest, loginSuccess} from '../../redux/action/authActions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'atuny0',
      password: '9uQFF1Lh',
    };
  }

  handleLogin = async () => {
    const {username, password} = this.state;
    const {dispatchLoginRequest} = this.props;
    dispatchLoginRequest(username, password);
  };
  render() {
    const {username, password} = this.state;
    const {errorMessage} = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/cloudy.jpeg')}
          style={{width: deviceWidth, height: deviceHeight}}
          imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
        />

        <View style={styles.containerAbsolute}>
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
              this.setState({username: text});
            }}
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            secureTextEntry
            placeholder="password"
            placeholderTextColor="white"
            onChangeText={text => this.setState({password: text})}
          />
          <View>
            {errorMessage && (
              <Text style={styles.errorMessage}>Invalid credentials</Text>
            )}
            <TouchableOpacity
              style={[styles.loginBtn]}
              onPress={this.handleLogin}>
              <AntDesign name="arrowright" color="white" size={50} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  dispatchLoginRequest: (username, password) => {
    dispatch(loginRequest(username, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  containerAbsolute: {
    position: 'absolute',
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
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});
