import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/dist/Feather';
import {withNavigation, NavigationActions} from 'react-navigation';
import {iconColorPrimary} from '../../constants';

class Back extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.screenName}>{this.props.screenName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenName: {
    paddingVertical: 9,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default withNavigation(Back);
