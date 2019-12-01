import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Search from '../../common/search';
import StarRatingComponent from '../../common/starRating';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import ProductCarousel from '../../common/carousel';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params,
    };
  }

  render() {
    return (
      <View>
        <Search />
        <View style={styles.row}>
          <Text>Product Name</Text>
          <StarRatingComponent disabled={true} rating={3} />
        </View>
        {/* <ProductCarousel /> */}
        <View style={styles.row}>
          <Text>$50000</Text>
          <TouchableOpacity>
            <EvilIcons name="cart" size={30} color="#0984e3" />
          </TouchableOpacity>
        </View>
        <View>
          <Text>
            canon's press material for the EOS 5D states that it 'defines (a)
            new D-SLR category', while we're not typically too concerned with
            marketing talk this particular statement is clearly pretty accurate.
            The EOS 5D is unlike any previous digital SLR in that it combines a
            full-frame (35 mm sized) high resolution sensor (12.8 megapixels)
            with a relatively compact body (slightly larger than the EOS 20D,
            although in your hand it feels noticeably 'chunkier'). The EOS 5D is
            aimed to slot in between the EOS 20D and the EOS-1D professional
            digital SLR's, an important difference when compared to the latter
            is that the EOS 5D doesn't have any environmental seals. While Canon
            don't specifically refer to the EOS 5D as a 'professional'
          </Text>
        </View>
        <View>
          <Text>Reviews hrere</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default withNavigation(Product);
