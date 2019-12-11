import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import Empty from '../../common/emptyScreen';
import WishListFlatListComponent from '../../common/wishListFlatList';

class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: null,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.orders ? (
          <Empty icon="heart" text="Wish List Empty" />
        ) : (
          <View style={{flex: 1}}>
            <WishListFlatListComponent notifications={this.state.orders} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default withNavigation(WishList);
