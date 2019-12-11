import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/dist/Feather';
import {withNavigation, NavigationActions} from 'react-navigation';
import {iconColorPrimary} from '../../constants';

class Back extends Component {
  constructor(props) {
    super(props);
  }

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'MainTab',
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.main}>
        <TouchableOpacity onPress={() => this.navigateToScreen()}>
          <FeatherIcons
            name="chevron-left"
            size={30}
            color={iconColorPrimary}
          />
        </TouchableOpacity>
        <Text style={styles.screenName}>{this.props.screenName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    paddingVertical: 15,
    flexDirection: 'row',
  },
  screenName: {
    paddingVertical: 9,
    paddingLeft: 50,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default withNavigation(Back);
