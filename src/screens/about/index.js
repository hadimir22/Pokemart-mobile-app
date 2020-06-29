import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Back from '../../common/backHeader';
import {backgroundColorPrimary} from '../../constants';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params,
    };
  }

  render() {
    return (
      <View style={styles.main}>
        <Back screenName="About" />
        <View style={styles.storeInfo}>
          <Text style={styles.child}>
            This is a dummy e-commerce app where you can buy Pokémon if your
            imagination is strong enough{' '}
            <Icons name="grin-tongue-wink" size={25} color="brown" />
          </Text>
        </View>
        <View style={styles.storeInfo}>
          <Text style={styles.child}>
            Dont forget to give us 5 <Icon name="star" color="yellow" /> on Play
            store
          </Text>
        </View>
        <View style={styles.storeInfo}>
          <Text
            style={{
              textAlign: 'center',
              paddingVertical: 30,
              fontWeight: '700',
              color: 'tomato',
              fontSize: 25,
            }}>
            Have fun!!
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  social: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  main: {
    marginTop: 0,
    backgroundColor: backgroundColorPrimary,
    flex: 1,
  },
  storeInfo: {
    padding: 20,
    fontWeight: 'bold',
  },

  child: {
    padding: 10,
  },
});

export default withNavigation(About);
