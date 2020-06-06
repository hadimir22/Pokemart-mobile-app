import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import {
  emptyIconColor,
  fontPoppinsLight,
  colorBlack,
  colorWhite,
} from '../../constants/index';

class Empty extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.main}>
        <FeatherIcon name={this.props.icon} size={100} color={emptyIconColor} />
        <Text style={styles.text}>{this.props.text} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorWhite,
    padding: 50,
    elevation: 5,
    margin: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  text: {
    paddingVertical: 20,
    color: colorBlack,
    fontSize: 20,
    fontFamily: fontPoppinsLight,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default withNavigation(Empty);
