import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import Search from '../src/common/search';
import MainTab from './tabs';
import {backgroundColorPrimary} from './constants/index';
class Main extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: backgroundColorPrimary,
          flex: 1,
        }}>
        <StatusBar
          backgroundColor={backgroundColorPrimary}
          barStyle="dark-content"
        />
        <Search />
        <MainTab />
      </View>
    );
  }
}

export default Main;
