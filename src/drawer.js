import React, {Component} from 'react';

import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';

import {createAppContainer, NavigationActions} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from './screens/landing';
import About from './screens/about';
import logo from './assets/logo.png';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import axios from 'axios';

class CustomDrawer extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.closeDrawer();
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-around', marginTop: 50}}>
        <View style={{marginVertical: 50}}>
          <Image
            source={logo}
            style={{height: 100, width: 100}}
            resizeMode="contain"
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={this.navigateToScreen('Home')}>
            <Icon name="home" size={25} color="black" />
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={this.navigateToScreen('About')}>
            <Icon name="shopping-bag" size={25} color="black" />
            <Text style={styles.text}>Shop</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={this.navigateToScreen('About')}>
            <Icon name="shopping-cart" size={25} color="black" />
            <Text style={styles.text}>Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={this.navigateToScreen('About')}>
            <Icon name="user-circle-o" size={25} color="black" />
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={this.navigateToScreen('About')}>
            <Icon name="exchange" size={25} color="black" />
            <Text style={styles.text}>Compare</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={this.navigateToScreen('About')}>
            <Icon name="info-circle" size={25} color="black" />
            <Text style={styles.text}>About</Text>
          </TouchableOpacity>
        </View>

        <Text style={{textAlign: 'center'}}>
          Made with <Icon name="heart" size={20} color="red" /> v1.0
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    padding: 25,
    borderBottomWidth: 0.5,
  },
  topStyle: {
    alignSelf: 'center',
    borderColor: 'black',
  },
  text: {
    marginLeft: 10,
    fontSize: 15,
  },
});

const DrawerNav = {
  Home: {
    screen: Home,
  },

  About: {
    screen: About,
  },
  Now: {
    screen: About,
  },
};
const DrawerNavigatorConfig = {
  contentComponent: CustomDrawer,
  drawerType: 'slide',
  drawerWidth: 300,
};

export default createDrawerNavigator(DrawerNav, DrawerNavigatorConfig);
