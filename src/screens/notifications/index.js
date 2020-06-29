import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {withNavigation, withNavigationFocus} from 'react-navigation';
import Empty from '../../common/emptyScreen';
import NotificationFlatListComponent from '../../common/notificationFlatList';
import AsyncStorage from '@react-native-community/async-storage';
import {backgroundColorPrimary} from '../../constants';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: null,
      loading: true,
    };
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextProps.isFocused) {
      this.getOrders();
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

  getOrders = async () => {
    let items = await this.getData('order');

    setTimeout(() => {
      this.setState({orders: items, loading: false}, () => {});
    }, 500);
  };

  componentDidMount() {
    this.getOrders();
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: backgroundColorPrimary}}>
        {this.state.loading ? (
          <View style={{marginVertical: '50%'}}>
            <ActivityIndicator size="large" color="tomato" />
          </View>
        ) : (this.state.orders && this.state.orders.length == 0) ||
          this.state.orders == null ? (
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

export default withNavigationFocus(Notifications);
