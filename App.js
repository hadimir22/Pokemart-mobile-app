import React, {Component} from 'react';
import {Image, View, Dimensions, Text, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import StackNav from './src';
import Splash from './src/assets/images/splash.jpeg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSplash: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({showSplash: false});
    }, 2500);
  }

  render() {
    return this.state.showSplash ? (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} />
        <Image
          source={Splash}
          style={{
            alignSelf: 'center',
            height: '100%',
            width: '100%',
          }}
          resizeMode="stretch"
        />
      </View>
    ) : (
      <StackNav />
    );
  }
}

export default App;
