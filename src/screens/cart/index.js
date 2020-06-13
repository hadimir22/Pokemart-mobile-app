import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import Empty from '../../common/emptyScreen';
import Swipeout from 'react-native-swipeout';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import {colorWhite} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';

var swipeoutBtns = [
  {
    component: (
      <View
        style={{
          backgroundColor: 'brown',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FeatherIcon name="trash" size={25} color="white" />
      </View>
    ),
  },
];

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cartdata: null,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.Cartdata ? (
          <Empty icon="shopping-cart" text="your cart is empty" />
        ) : (
          <View style={{flex: 1}}>
            <ScrollView style={{marginBottom: 125}}>
              <Swipeout
                right={swipeoutBtns}
                autoClose={true}
                sensitivity={1}
                style={styles.list}>
                <View style={[styles.center, styles.main]}>
                  <Image
                    source={require('../../assets/images/mac.jpeg')}
                    resizeMode="contain"
                    style={{height: 100, width: 100}}
                  />
                  <Text>mac book pro</Text>
                  <View style={styles.center}>
                    <TouchableOpacity
                      style={{paddingHorizontal: 10}}
                      activeOpacity={0.7}>
                      <FeatherIcon name="minus-square" size={25} />
                    </TouchableOpacity>
                    <Text style={{fontSize: 20}}>1</Text>
                    <TouchableOpacity
                      style={{paddingHorizontal: 10}}
                      activeOpacity={0.7}>
                      <FeatherIcon name="plus-square" size={25} />
                    </TouchableOpacity>
                  </View>
                </View>
              </Swipeout>
              <Swipeout
                right={swipeoutBtns}
                autoClose={true}
                sensitivity={1}
                style={styles.list}>
                <View style={[styles.center, styles.main]}>
                  <Image
                    source={require('../../assets/images/mob.jpeg')}
                    resizeMode="contain"
                    style={{height: 100, width: 100}}
                  />
                  <Text>one plus 7</Text>
                  <View style={styles.center}>
                    <TouchableOpacity
                      style={{paddingHorizontal: 10}}
                      activeOpacity={0.7}>
                      <FeatherIcon name="minus-square" size={25} />
                    </TouchableOpacity>
                    <Text style={{fontSize: 20}}>1</Text>
                    <TouchableOpacity
                      style={{paddingHorizontal: 10}}
                      activeOpacity={0.7}>
                      <FeatherIcon name="plus-square" size={25} />
                    </TouchableOpacity>
                  </View>
                </View>
              </Swipeout>
            </ScrollView>

            <View style={[styles.center, styles.checkoutView]}>
              <Text style={[styles.checkoutTxt, {fontSize: 15}]}>2 Items</Text>
              <Text style={[styles.checkoutTxt, {fontSize: 20}]}>$580</Text>
              <TouchableOpacity style={styles.checkoutBtn} activeOpacity={0.7}>
                <Text style={{color: colorWhite}}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  list: {
    backgroundColor: 'white',
    elevation: 15,
    marginBottom: 15,
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkoutTxt: {
    fontWeight: 'bold',
    paddingLeft: 30,
  },
  checkoutView: {
    paddingVertical: 30,
    backgroundColor: colorWhite,
    justifyContent: 'space-between',
    width: WIDTH,
    elevation: 1,
    position: 'absolute',
    bottom: 10,
  },
  checkoutBtn: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 50,
    marginRight: -15,
  },
});

export default withNavigation(Cart);
