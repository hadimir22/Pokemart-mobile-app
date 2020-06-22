import React, {Component} from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import {withNavigation} from 'react-navigation';
import WishListFlatListComponent from '../../common/wishListFlatList';
import {backgroundColorPrimary} from '../../constants';

class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: null,
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingVertical: 10,
          backgroundColor: backgroundColorPrimary,
        }}>
        <WishListFlatListComponent favorites={this.state.favorites} />
      </View>
    );
  }
}

export default withNavigation(WishList);
