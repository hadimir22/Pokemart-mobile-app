import React, {PureComponent} from 'react';
import {
  Text,
  Dimensions,
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Carousel from './carousel';
import HorizontalList from '../../common/horizontalList';

export default class App extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Carousel />
          <HorizontalList />
          <View style={styles.banner}>
            <Text>Here is an offer</Text>
          </View>
          <HorizontalList />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginBottom: 70,
    backgroundColor: 'white',
  },
  child: {
    height: height * 0.5,
    width,
    justifyContent: 'center',
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center',
  },
  banner: {
    backgroundColor: 'teal',
    margin: 30,
    padding: 70,
    textAlign: 'center',
    borderRadius: 15,
  },
});
