import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params,
    };
  }

  socialMediaNavigation(link) {
    alert('navigating to', link);
  }
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.topStyle}>
          <View style={styles.back}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}>
              <Text>
                <Icon name="bars" size={25} color="black" />
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.about}>
            <Text style={styles.screenName}>About</Text>
          </View>
        </View>
        <View style={styles.storeInfo}>
          <Text>STORE INFORMATION</Text>
          <Text style={styles.child}>
            <Icon name="phone" size={25} color="black" /> 9596555222
          </Text>
          <Text style={styles.child}>
            <Icon name="envelope-o" size={25} color="black" /> hello@hi.com
          </Text>
          <Text style={styles.child}>
            <Icon name="location-arrow" size={25} color="black" />
            C-50,sector-65, Noida 201301
          </Text>
        </View>

        <Text>Social Media</Text>
        <View style={styles.social}>
          <Text style={styles.child}>
            <Icon name="facebook-official" size={25} color="black" />
          </Text>
          <Text style={styles.child}>
            <Icon name="instagram" size={25} color="black" />
          </Text>
          <Text style={styles.child}>
            <Icon name="linkedin" size={25} color="black" />
          </Text>
          <Text style={styles.child}>
            <Icon name="twitter" size={25} color="black" />
          </Text>
          <Text style={styles.child}>
            <Icon name="youtube" size={25} color="black" />
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  main: {
    marginTop: 0,
    backgroundColor: 'white',
    flex: 1,
  },
  storeInfo: {
    padding: 20,
    fontWeight: 'bold',
  },

  child: {
    padding: 10,
  },

  about: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 80,
  },

  screenName: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },

  topStyle: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#dcdde1',
  },
});

export default withNavigation(About);
