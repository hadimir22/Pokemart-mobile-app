import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';

class About extends Component {
  render() {
    return (
      <View>
        <Text>about ussss </Text>
      </View>
    );
  }
}

export default withNavigation(About);
