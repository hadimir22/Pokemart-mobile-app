import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Profile from './screens/profile';
import About from './screens/about';
import Shop from './screens/shop';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import Main from './main';
import {
  drawerBackgroundColor,
  drawerIconColor,
  drawerSectionTextColor,
  drawerTextColor,
  drawerHeaderColor,
  fontPoppinsLight,
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

  render() {
    return (
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.logo}>
            <Image
              source={require('./assets/images/userImg.png')}
              style={{height: 100, width: 100}}
              resizeMode="contain"
            />
            <Text style={styles.name}>Hello, Ash</Text>
          </View>

          <View style={{paddingVertical: 15}}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btn}
              onPress={this.navigateToScreen('Home')}>
              <FeatherIcon name="home" size={25} color={drawerIconColor} />
              <Text style={styles.text}>Home</Text>
            </TouchableOpacity>

            <Text style={styles.section}>Menu</Text>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btn}
              onPress={this.navigateToScreen('Cart')}>
              <FeatherIcon
                name="shopping-cart"
                size={25}
                color={drawerIconColor}
              />
              <Text style={styles.text}>Cart</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btn}
              onPress={this.navigateToScreen('Notifications')}>
              <FeatherIcon name="gift" size={25} color={drawerIconColor} />
              <Text style={styles.text}>Orders</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btn}
              onPress={this.navigateToScreen('WishList')}>
              <FeatherIcon name="heart" size={25} color={drawerIconColor} />
              <Text style={styles.text}>Favorites</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btn}
              onPress={this.navigateToScreen('Profile')}>
              <FeatherIcon name="user" size={25} color={drawerIconColor} />
              <Text style={styles.text}>Profile</Text>
            </TouchableOpacity>

            <Text style={styles.section}>App preferences</Text>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btn}
              onPress={this.navigateToScreen('About')}>
              <FeatherIcon name="info" size={25} color={drawerIconColor} />
              <Text style={styles.text}>About</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.madewith}>
            Made with{' '}
            <Image
              source={require('./assets/images/pokeball.png')}
              style={{
                height: 20,
                width: 20,
              }}
              resizeMode="contain"
            />{' '}
            v 1.0
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: drawerBackgroundColor,
  },
  madewith: {
    textAlign: 'center',
    color: drawerTextColor,
    fontFamily: fontPoppinsLight,
  },
  name: {
    fontFamily: fontPoppinsLight,
    marginTop: 10,
    fontWeight: '500',
    color: 'tomato',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  section: {
    fontFamily: fontPoppinsLight,
    fontSize: 15,
    fontWeight: 'bold',
    padding: 13,
    color: drawerSectionTextColor,
  },
  text: {
    fontFamily: fontPoppinsLight,
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
