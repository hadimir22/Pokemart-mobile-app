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
import Landing from './screens/landing';
import About from './screens/about';
//import idrak from '../assets/idrak.png';

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
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <View style={styles.topStyle}>
          {/* <Image
            source={idrak}
            style={{height: 100, width: 100}}
            resizeMode="contain"
          /> */}
        </View>

        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={this.navigateToScreen('Landing')}>
            <Text>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={this.navigateToScreen('About')}>
            <Text>About</Text>
          </TouchableOpacity>
        </View>

        <Text style={{paddingLeft: 120}}> shoply v2.0</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    textAlign: 'center',
    height: 50,
    padding: 25,
    borderBottomWidth: 0.5,
  },
  topStyle: {
    alignSelf: 'center',
    borderColor: 'black',
  },
});

const DrawerNav = {
  Landing: {
    screen: Landing,
  },

  About: {
    screen: About,
  },
};
const DrawerNavigatorConfig = {
  drawerType: 'slide',
  drawerWidth: 300,
};

export default createDrawerNavigator(DrawerNav, DrawerNavigatorConfig);
//export default createAppContainer(DrawerNav);
