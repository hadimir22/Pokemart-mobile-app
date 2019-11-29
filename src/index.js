import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import {createStackNavigator} from 'react-navigation-stack';
import CustomDrawer from './drawer';
import About from '../src/screens/about';
import Landing from '../src/screens/landing';

const StackNav = createStackNavigator(
  {
    CustomDrawer: {
      screen: CustomDrawer,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
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
  },

  {
    initialRouteName: 'CustomDrawer',
  },
);

export default createAppContainer(StackNav);
