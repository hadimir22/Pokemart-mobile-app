import React, {PureComponent} from 'react';
import {Text, Image, Dimensions, StyleSheet, View} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

class ProductCarousel extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination>
          {this.props.carouselData.slides.map(slide => {
            return (
              <View key={slide.id} style={styles.child}>
                <Image
                  source={{uri: slide.file.path}}
                  style={{
                    height: Dimensions.get('window').height / 2,
                    width: Dimensions.get('window').width,
                  }}
                  resizeMode="cover"
                />
              </View>
            );
          })}
        </SwiperFlatList>
      </View>
    );
  }
}

export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  child: {
    height: 300,
    justifyContent: 'center',
    position: 'relative',
  },
});

export default ProductCarousel;
