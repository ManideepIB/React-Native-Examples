import React, {Component} from 'react';
import {View, Text} from 'react-native';

class DataItem extends Component {
  render() {
    const {title, value} = this.props;
    return (
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
  }
}

export default DataItem;
