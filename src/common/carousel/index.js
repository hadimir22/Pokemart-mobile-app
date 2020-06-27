import React, {PureComponent} from 'react';
import {
  Text,
  Image,
  Dimensions,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {fontPoppinsBold} from '../../constants';

export const carouselData = [
  {
    image: require('../../assets/images/group.png'),
    title: 'Buy your favorite Pokemons',
    color: 'tomato',
  },
  {
    image: require('../../assets/images/badges.jpg'),
    title: 'Collect the gym badges',
    color: 'purple',
  },
  {
    image: require('../../assets/images/group2.webp'),
    title: 'Grow your team stronger',
    color: 'pink',
  },
];

const WIDTH = Dimensions.get('window').width;

class ProductCarousel extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderItemWithParallax({item, index}, parallaxProps) {
    return (
      <View style={{paddingVertical: 25, backgroundColor: item.color}}>
        <ImageBackground
          source={item.image}
          style={{height: 200, width: WIDTH}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: fontPoppinsBold,
                color: 'white',
                fontSize: 20,
                marginTop: -26,
              }}>
              {item.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Carousel
          ref={c => (this._slider1Ref = c)}
          data={carouselData}
          renderItem={item => this._renderItemWithParallax(item)}
          sliderWidth={500}
          itemWidth={500}
          hasParallaxImages={true}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          // inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}

          // onSnapToItem={index => this.setState({slider1ActiveSlide: index})}
        />
      </View>
    );
  }
}

export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {},
  child: {
    height: 300,
    justifyContent: 'center',
    position: 'relative',
  },
  slider: {
    overflow: 'visible', // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 0, // for custom animation
  },
});

export default ProductCarousel;
