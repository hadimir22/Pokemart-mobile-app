import React, {PureComponent} from 'react';
import {Text, Image, Dimensions, StyleSheet, View} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

class Carousel extends PureComponent {
  constructor(props) {
    super(props);
    console.log('props', this.props.carouselData);
  }
  render() {
    return (
      <View style={styles.container}>
        <SwiperFlatList
          autoplay
          autoplayDelay={this.props.carouselData.autoplay_speed / 1000}
          autoplayLoop
          index={2}
          showPagination>
          {this.props.carouselData.slides.map(slide => {
            return (
              <View
                key={slide.id}
                style={[styles.child, {backgroundColor: 'orangered'}]}>
                <Image
                  source={{uri: slide.file.path}}
                  style={{
                    height: Dimensions.get('window').height / 2,
                    width: Dimensions.get('window').width,
                  }}
                  resizeMode="cover"
                />
                <View style={styles.captions}>
                  <Text style={styles.captionText}>{slide.caption_1}</Text>
                  <Text style={styles.captionText}>{slide.caption_2}</Text>
                  <Text style={styles.captionText}>{slide.caption_3}</Text>
                </View>
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
    //flex: 1,
    backgroundColor: 'white',
  },
  child: {
    height: 300,
    justifyContent: 'center',
    position: 'relative',
  },
  captionText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
  captions: {
    position: 'absolute',
    top: '50%',
  },
});

export default Carousel;
