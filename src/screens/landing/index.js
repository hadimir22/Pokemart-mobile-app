import React, {PureComponent} from 'react';
import {
  Text,
  Dimensions,
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
} from 'react-native';
import {
  backgroundColorPrimary,
  fontColorPrimary,
  tabIndicatorColor,
} from '../../constants';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import ProductCarousel from '../../common/carousel';
import {iconColorPrimary} from '../../constants/index';
import StarRatingComponent from '../../common/starRating';
import {pokemons} from '../../constants/pokemons';
import AsyncStorage from '@react-native-community/async-storage';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  addToCart = async id => {
    console.log('ok', id);
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);
    console.log(result);
    try {
      let existing = await this.getData('cart');

      if (existing) {
        console.log('ko', existing);
        if (existing.includes(id)) {
          return ToastAndroid.show('Already in cart', ToastAndroid.SHORT);
        }
        let newArr = [...existing, id];
        const value = JSON.stringify(newArr);
        await AsyncStorage.setItem('cart', value);
      } else {
        let ids = [id];
        const value = JSON.stringify(ids);
        await AsyncStorage.setItem('cart', value);
      }
      ToastAndroid.show('Added to cart', ToastAndroid.SHORT);
    } catch (e) {
      console.log(e);
    }
  };

  addToFavorites = async id => {
    console.log('ok', id);
    try {
      let existing = await this.getData('fav');

      if (existing) {
        console.log(existing);
        if (existing.includes(id)) {
          return ToastAndroid.show('Already in favorites', ToastAndroid.SHORT);
        }
        let newArr = [...existing, id];
        const value = JSON.stringify(newArr);
        await AsyncStorage.setItem('fav', value);
      } else {
        let ids = [id];
        const value = JSON.stringify(ids);
        await AsyncStorage.setItem('fav', value);
      }
      ToastAndroid.show('Added to favorites', ToastAndroid.SHORT);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <View style={styles.product}>
        <Image
          source={this.props.pokemon.image}
          style={{height: 50, width: 50}}
        />
        <Text>{this.props.pokemon.name}</Text>
        <View style={{marginVertical: 3}}>
          <StarRatingComponent
            rating={this.props.pokemon.star}
            disabled={true}
          />
        </View>

        <View style={{flexDirection: 'row', marginTop: 8}}>
          <TouchableOpacity
            onPress={() => this.addToCart(this.props.pokemon.id)}
            style={[styles.action, {borderColor: 'green'}]}
            activeOpacity={0.7}>
            <FeatherIcon name="shopping-cart" size={25} color="green" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.addToFavorites(this.props.pokemon.id)}
            style={[styles.action, {borderColor: 'red'}]}
            activeOpacity={0.7}>
            <FeatherIcon name="heart" size={25} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroller}>
          <ProductCarousel />
          <View
            style={{
              backgroundColor: 'white',
              paddingVertical: 50,
              marginVertical: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: tabIndicatorColor,
                paddingVertical: 20,
                flexDirection: 'row',
                width: '90%',
                borderRadius: 15,
                position: 'absolute',
                bottom: -15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                <FeatherIcon name="gift" size={45} color={iconColorPrimary} />
                <FeatherIcon
                  name="activity"
                  size={45}
                  color={iconColorPrimary}
                />
                <FeatherIcon name="anchor" size={45} color={iconColorPrimary} />
                <FeatherIcon
                  name="codesandbox"
                  size={45}
                  color={iconColorPrimary}
                />
              </View>
            </View>
          </View>
          <FlatList
            style={{marginVertical: 20}}
            showsVerticalScrollIndicator={false}
            data={pokemons}
            renderItem={({item}) => <Product pokemon={item} />}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColorPrimary,
    flex: 1,
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center',
  },
  action: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  product: {
    backgroundColor: 'white',
    margin: 5,
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 15,
  },
});
