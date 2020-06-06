import React, {PureComponent} from 'react';
import {Text, Image, Dimensions, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export const entries = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg',
  },
];

class CarouselComponent extends PureComponent {
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

export default CarouselComponent;
