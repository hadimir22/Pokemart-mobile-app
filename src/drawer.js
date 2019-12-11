import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {createAppContainer, NavigationActions} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Profile from './screens/profile';
import Orders from './screens/orders';
import NOtifications from './screens/notifications';
import Logo from '../src/assets/logo.png';
import Home from './screens/landing';
import About from './screens/about';
import Product from './screens/product';
import MainTab from './tabs';
import Shop from './screens/shop';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import Main from './main';
import {
  drawerBackgroundColor,
  drawerIconColor,
  drawerSectionTextColor,
  drawerTextColor,
  drawerHeaderColor,
  fontPoppins,
} from './constants';

class CustomDrawer extends Component {
  constructor(props) {
    super(props);
  }
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.closeDrawer();
  };

  componentDidMount() {}

  render() {
    return (
      <View style={{flex: 1, backgroundColor: drawerBackgroundColor}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.logo}>
            {/* <Image
            source={Logo}
            style={{height: 100, width: 100}}
            resizeMode="contain"
          /> */}
            <FeatherIcon name="user" size={50} color={drawerIconColor} />
            <Text style={{fontFamily: fontPoppins}}>Hello, user</Text>
          </View>

          <View style={{paddingVertical: 15}}>
            <TouchableOpacity
              style={styles.btn}
              onPress={this.navigateToScreen('Home')}>
              <FeatherIcon name="home" size={25} color={drawerIconColor} />
              <Text style={styles.text}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={this.navigateToScreen('Shop')}>
              <FeatherIcon
                name="shopping-bag"
                size={25}
                color={drawerIconColor}
              />
              <Text style={styles.text}>Shop</Text>
            </TouchableOpacity>

            <Text style={styles.section}>Products</Text>

            <TouchableOpacity
              style={styles.btn}
              onPress={this.navigateToScreen('About')}>
              <FeatherIcon
                name="shopping-cart"
                size={25}
                color={drawerIconColor}
              />
              <Text style={styles.text}>Cart</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={this.navigateToScreen('Profile')}>
              <FeatherIcon name="user" size={25} color={drawerIconColor} />
              <Text style={styles.text}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={this.navigateToScreen('Orders')}>
              <FeatherIcon name="box" size={25} color={drawerIconColor} />
              <Text style={styles.text}>Orders</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={this.navigateToScreen('About')}>
              <FeatherIcon name="heart" size={25} color={drawerIconColor} />
              <Text style={styles.text}>Wish list</Text>
            </TouchableOpacity>

            <Text style={styles.section}>App preferences</Text>

            <TouchableOpacity
              style={styles.btn}
              onPress={this.navigateToScreen('About')}>
              <FeatherIcon name="info" size={25} color={drawerIconColor} />
              <Text style={styles.text}>About</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={this.navigateToScreen('About')}>
              <FeatherIcon name="settings" size={25} color={drawerIconColor} />
              <Text style={styles.text}>Setting</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={this.navigateToScreen('About')}>
              <FeatherIcon name="log-out" size={25} color={drawerIconColor} />
              <Text style={styles.text}>Logout</Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              textAlign: 'center',
              color: drawerTextColor,
              fontFamily: fontPoppins,
            }}>
            Made with <FeatherIcon name="heart" size={20} color="red" /> v1.0
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  section: {
    fontFamily: fontPoppins,
    fontSize: 15,
    fontWeight: 'bold',
    padding: 13,
    color: drawerSectionTextColor,
  },
  text: {
    fontFamily: fontPoppins,
    marginLeft: 10,
    fontSize: 15,
    color: drawerTextColor,
  },
  logo: {
    backgroundColor: drawerHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    borderBottomWidth: 0.5,
  },
});

const DrawerNav = {
  Home: {
    screen: Main,
  },
  Profile: {
    screen: Profile,
  },
  Orders: {
    screen: Orders,
  },
  About: {
    screen: About,
  },
  Shop: {
    screen: Shop,
  },
};
const DrawerNavigatorConfig = {
  contentComponent: CustomDrawer,
  drawerType: 'slide',
  drawerWidth: 300,
};

export default createDrawerNavigator(DrawerNav, DrawerNavigatorConfig);
