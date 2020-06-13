import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';

export default class Loader extends React.Component {
  render() {
    return (
      <View style={styles.loaderBG}>
        <View style={styles.loader}>
          <Bubbles size={10} color="#FFF" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loaderBG: {
    width: '100%',
    height: '100%',
    backgroundColor: 'orange',
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -50}, {translateY: -50}],
  },
});
