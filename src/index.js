import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import {createStackNavigator} from 'react-navigation-stack';
import CustomDrawer from './drawer';
import Profile from './screens/profile';
import Notifications from './screens/notifications';
import WishList from './screens/wishList';
//
import About from '../src/screens/about';
import Landing from '../src/screens/landing';
import Product from '../src/screens/product';
import Shop from '../src/screens/shop';

const StackNav = createStackNavigator(
  {
    CustomDrawer: {
      screen: CustomDrawer,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },

    Profile: {
      screen: Profile,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },

    Notifications: {
      screen: Notifications,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },

    WishList: {
      screen: WishList,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    //
    Landing: {
      screen: Landing,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },

    About: {
      screen: About,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },

    Shop: {
      screen: Shop,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },

    Product: {
      screen: Product,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
  },

  {
    initialRouteName: 'CustomDrawer',
  },
);

export default createAppContainer(StackNav);
