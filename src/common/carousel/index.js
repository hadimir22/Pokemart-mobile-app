import React, {PureComponent} from 'react';
import {Text, Image, Dimensions, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export const carouselData = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
  },
  {
    title: 'Earlier this morning, NYC',
  },
  {
    title: 'White Pocket Sunset',
  },
];

class ProductCarousel extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderItemWithParallax({item, index}, parallaxProps) {
    return (
      <View style={{paddingVertical: 100, backgroundColor: 'teal'}}>
        <Text>{item.title}</Text>
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
