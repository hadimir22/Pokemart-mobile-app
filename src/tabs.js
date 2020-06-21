import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {withNavigation} from 'react-navigation';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import Home from './screens/landing';
import Cart from './screens/cart';
import Notifications from './screens/notifications';
import WishList from './screens/wishList';

import {
  tabBackgroundColor,
  tabIndicatorColor,
  tabLabelColor,
  tabIconColor,
} from './constants';

class MainTab extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'Home', icon: 'home'},
      {key: 'Notifications', icon: 'bell'},
      {key: 'WishList', icon: 'heart'},
      {key: 'Cart', icon: 'shopping-cart'},
    ],
  };

  renderIcon = ({route}) => {
    return <FeatherIcon name={route.icon} size={24} color={tabIconColor} />;
  };

  renderTabBar = props => (
    <TabBar
      {...props}
      renderIndicator={this._renderIndicator}
      tabStyle={styles.tab}
      style={styles.tabBar}
      renderIcon={this.renderIcon}
      indicatorStyle={styles.indicatorStyle}
      labelStyle={styles.labelStyle}
    />
  );

  renderScene = ({route}) => {
    switch (route.key) {
      case 'WishList':
        return <WishList />;
      case 'Home':
        return <Home />;
      case 'Cart':
        return <Cart />;
      case 'Notifications':
        return <Notifications />;
      default:
        return null;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TabView
          navigationState={this.state}
          renderTabBar={this.renderTabBar}
          renderScene={this.renderScene}
          onIndexChange={index => this.setState({index})}
          initialLayout={{width: Dimensions.get('window').width}}
          tabBarPosition="bottom"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: tabBackgroundColor,
    overflow: 'hidden',
    elevation: 0,
  },
  tab: {
    paddingVertical: 20,
  },
  indicatorStyle: {
    backgroundColor: tabIndicatorColor,
    height: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginVertical: -10,
  },
  labelStyle: {
    fontSize: 14,
    color: tabLabelColor,
  },
});

export default withNavigation(MainTab);
