import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import Empty from '../../common/emptyScreen';
import AsyncStorage from '@react-native-community/async-storage';
import WishListFlatListComponent from '../../common/wishListFlatList';
import {pokemons} from '../../constants/pokemons';

class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: null,
    };
  }

  componentDidMount() {
    this.getFavItems();
  }

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('fav');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  getFavItems = async () => {
    let items = await this.getData();
    let filterdPokemons = pokemons.filter(pokemon => {
      if (items.includes(pokemon.id)) return true;
    });
    this.setState({favorites: filterdPokemons});
  };
  render() {
    return (
      <View style={{flex: 1}}>
        {!this.state.favorites ? (
          <Empty icon="heart" text="Wish List Empty" />
        ) : (
          <View style={{flex: 1}}>
            <WishListFlatListComponent favorites={this.state.favorites} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default withNavigation(WishList);
