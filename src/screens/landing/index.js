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
import Search from '../../common/search';
import axios from 'axios';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    let data = await axios.get(
      'http://kbeesolutions.co.in/api/get-homepage-data',
    );
    this.setState(data);
    console.log('data', data.data);
    console.log('data', data.data.landscapeProducts);
  };

  render() {
    return !this.state.data ? (
      <View>
        <Text>Loadding</Text>
      </View>
    ) : (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Search />
          <Carousel carouselData={this.state.data.slider} />
          {this.state.data.landscapeProducts ? (
            <HorizontalList
              featuredData={this.state.data.landscapeProducts}
              heading="Featured"
            />
          ) : null}
          {this.state.data.landscapeProducts ? (
            <HorizontalList
              featuredData={this.state.data.landscapeProducts}
              heading="On Sale"
            />
          ) : null}
          {this.state.data.landscapeProducts ? (
            <HorizontalList
              featuredData={this.state.data.landscapeProducts}
              heading="Top Rated"
            />
          ) : null}

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
