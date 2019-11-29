import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Search from '../src/common/search';
import Landing from './screens/landing';

class Main extends Component {
  render() {
    return (
      <>
        <Search />
        <Landing />
      </>
    );
  }
}

export default Main;
