import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import Empty from '../../common/emptyScreen';
import OrderFlatListComponent from '../../common/orderFlatList';

class Orders extends Component {
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
          <Empty icon="gift" text="No orders" />
        ) : (
          <View style={{flex: 1}}>
            <OrderFlatListComponent notifications={this.state.orders} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default withNavigation(Orders);
