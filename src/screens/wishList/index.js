import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
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
      <View style={styles.main}>
        <WishListFlatListComponent favorites={this.state.favorites} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: backgroundColorPrimary,
  },
});
export default withNavigation(WishList);
