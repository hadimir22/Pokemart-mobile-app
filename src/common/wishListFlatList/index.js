import React, {Component} from 'react';
import {
  Image,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colorWhite} from '../../constants';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import StarRatingComponent from '../starRating';

function Item({item}) {
  return (
    <View style={styles.info}>
      <View>
        <Image
          source={item.image}
          style={{height: 70, width: 70}}
          resizeMode="contain"
        />
      </View>
      <View style={{paddingHorizontal: 30}}>
        <Text style={[styles.title, {fontWeight: 'bold'}]}>{item.name}</Text>
        <StarRatingComponent rating={item.star} disabled={true} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={[styles.action, {borderColor: 'green'}]}
          activeOpacity={0.7}>
          <FeatherIcon name="shopping-cart" size={20} color="green" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.action, {borderColor: 'red'}]}
          activeOpacity={0.7}>
          <FeatherIcon name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

class WishListFlatListComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.props.favorites}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    paddingVertical: 2,
  },
  action: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  info: {
    backgroundColor: colorWhite,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginHorizontal: 10,
    elevation: 5,
    marginBottom: 20,
  },
});

export default WishListFlatListComponent;
