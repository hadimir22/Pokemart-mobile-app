import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import StackNav from './src';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <StackNav />;
  }
}

export default App;
