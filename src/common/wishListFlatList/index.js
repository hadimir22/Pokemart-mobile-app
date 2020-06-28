import React, {Component} from 'react';
import {
  Image,
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {colorWhite} from '../../constants';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import StarRatingComponent from '../starRating';
import {withNavigation, withNavigationFocus} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {pokemons} from '../../constants/pokemons';
import Empty from '../../common/emptyScreen';

function Item({item, addToCart, removeFromFav}) {
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
          onPress={() => addToCart(item.id)}
          style={[styles.action, {borderColor: 'green'}]}
          activeOpacity={0.7}>
          <FeatherIcon name="shopping-cart" size={20} color="green" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => removeFromFav(item.id)}
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

    this.state = {
      loading: true,
      favorites: null,
    };
  }

  componentDidMount() {
    this.getFavItems();
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextProps.isFocused) {
      this.getFavItems();
      return true;
    } else {
      return false;
    }
  };

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
    try {
      let existing = await this.getData('cart');
      if (existing) {
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

  getFavItems = async () => {
    let items = await this.getData('fav');
    let filterdPokemons = pokemons.filter(pokemon => {
      if (items && items.includes(pokemon.id)) return true;
    });
    setTimeout(() => {
      this.setState({favorites: filterdPokemons, loading: false});
    }, 500);
  };

  removeFromFav = async id => {
    try {
      let existing = await this.getData('fav');
      let filterdIds = existing.filter(item => {
        return item != id;
      });
      await AsyncStorage.setItem('fav', JSON.stringify(filterdIds));
      ToastAndroid.show('Removed', ToastAndroid.SHORT);
      this.getFavItems();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <View style={{marginVertical: '50%'}}>
            <ActivityIndicator size="large" color="tomato" />
          </View>
        ) : this.state.favorites && this.state.favorites.length == 0 ? (
          <Empty icon="heart" text="No favorites added" />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.favorites}
            renderItem={({item}) => (
              <Item
                item={item}
                addToCart={this.addToCart}
                removeFromFav={this.removeFromFav}
              />
            )}
            keyExtractor={item => item.id}
          />
        )}
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

export default withNavigationFocus(WishListFlatListComponent);
