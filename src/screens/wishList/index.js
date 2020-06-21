import React, {Component} from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
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

  render() {
    return (
      <View style={{flex: 1}}>
        <WishListFlatListComponent favorites={this.state.favorites} />
      </View>
    );
  }
}

export default withNavigation(WishList);
