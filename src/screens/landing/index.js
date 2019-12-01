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
import Banner from '../../common/banner';
import FlatListComponent from '../../common/flatList';
import Loader from '../../common/loader';
import Features from '../../common/features';

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
    // console.log('orignal', data.data);
    // console.log('sliderBanners', this.state.data.sliderBanners);
  };

  render() {
    return !this.state.data ? (
      <View>
        <Loader />
      </View>
    ) : (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroller}>
          <Search />

          <Carousel carouselData={this.state.data.slider} />

          {this.state.data.features ? (
            <Features featuredData={this.state.data.features} />
          ) : null}

          {this.state.data.landscapeProducts ? (
            <HorizontalList
              listData={this.state.data.landscapeProducts}
              heading="Featured"
            />
          ) : null}

          {this.state.data.bannerSectionOneBanners ? (
            <Banner bannerData={this.state.data.bannerSectionOneBanners} />
          ) : null}

          {this.state.data.landscapeProducts ? (
            <HorizontalList
              listData={this.state.data.recentProducts}
              heading="Recent Products"
            />
          ) : null}

          {this.state.data.recentlyViewedProducts.length > 0 ? (
            <HorizontalList
              listData={this.state.data.recentlyViewedProducts}
              heading="Recently Viwed  Products"
            />
          ) : null}

          {this.state.data.bannerSectionThreeBanners ? (
            <Banner bannerData={this.state.data.bannerSectionThreeBanners} />
          ) : null}

          {this.state.data.landscapeProducts ? (
            <HorizontalList
              listData={this.state.data.landscapeProducts}
              heading="On Sale"
            />
          ) : null}

          {this.state.data.landscapeProducts ? (
            <HorizontalList
              listData={this.state.data.landscapeProducts}
              heading="Top Rated"
            />
          ) : null}

          {/* tabs start here */}
          {this.state.data.tabProducts.map(tab => {
            return <FlatListComponent tabData={tab} heading="Tab" />;
          })}

          {this.state.data.carouselProducts ? (
            <HorizontalList
              listData={this.state.data.carouselProducts}
              heading="Carosel Products"
            />
          ) : null}

          {this.state.data.sliderBanners.length > 0 ? (
            <Banner bannerData={this.state.data.sliderBanners} />
          ) : null}

          {this.state.data.threeColumnCarouselProducts.map(tab => {
            return (
              <FlatListComponent
                tabData={tab}
                heading="threeColumnCarouselProducts"
              />
            );
          })}

          {this.state.data.twoColumnCarouselProducts.map(tab => {
            return (
              <FlatListComponent
                tabData={tab}
                heading="twoColumnCarouselProducts"
              />
            );
          })}

          <HorizontalList />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center',
  },
  scroller: {},
});
