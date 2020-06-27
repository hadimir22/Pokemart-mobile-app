import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {withNavigation} from 'react-navigation';
import Empty from '../../common/emptyScreen';
import NotificationFlatListComponent from '../../common/notificationFlatList';
import AsyncStorage from '@react-native-community/async-storage';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: null,
      loading: true,
    };

    const {navigation} = this.props;
    this.focusListener = navigation.addListener('didFocus', async () => {
      // this.setState({loading: true, cartdata: null});
      // this.getCartItems();
      // alert('focused');
    });
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

  getOrders = async () => {
    let items = await this.getData('order');
    console.log('cat items', items);

    setTimeout(() => {
      this.setState({orders: items, loading: false}, () => {
        console.log('orders', this.state);
      });
    }, 500);
  };

  componentDidMount() {
    this.getOrders();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.loading ? (
          <View style={{marginVertical: '50%'}}>
            <ActivityIndicator size="large" color="tomato" />
          </View>
        ) : (this.state.orders && this.state.orders.length == 0) ||
          !this.state.orders ? (
          <Empty icon="gift" text="No orders" />
        ) : (
          <View style={{flex: 1}}>
            <NotificationFlatListComponent orders={this.state.orders} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default withNavigation(Notifications);
