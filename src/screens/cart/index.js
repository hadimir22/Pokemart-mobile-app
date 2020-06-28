import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  FlatListProps,
  FlatList,
  ToastAndroid,
  Image,
  Dimensions,
} from 'react-native';
import {withNavigation, withNavigationFocus} from 'react-navigation';
import Empty from '../../common/emptyScreen';
import Swipeout from 'react-native-swipeout';
import FeatherIcon from 'react-native-vector-icons/dist/Ionicons';
import {colorWhite} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {pokemons} from '../../constants/pokemons';
import {
  fontPoppinsLight,
  fontPoppinsBold,
  backgroundColorPrimary,
} from '../../constants';
import StarRatingComponent from '../../common/starRating';
import Modal from 'react-native-modal';

var swipeoutBtns = [
  {
    onPress: function() {
      alert('button pressed');
    },
    backgroundColor: 'brown',
    text: 'Remove',
    // component: (
    //   <TouchableOpacity
    //     activeOpacity={0.7}
    //     style={{
    //       backgroundColor: 'brown',
    //       flex: 1,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}>
    //     <FeatherIcon name="trash" size={25} color="white" />
    //   </TouchableOpacity>
    // ),
  },
];

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

class CartList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        // right={swipeoutBtns}
        // autoClose={true}
        // sensitivity={100}
        style={styles.list}>
        <View style={[styles.center, styles.main]}>
          <View style={{paddingVertical: 10}}>
            <Image
              source={this.props.pokemon.image}
              resizeMode="contain"
              style={{height: 80, width: 80}}
            />
          </View>

          <Text style={{fontFamily: fontPoppinsBold}}>
            {this.props.pokemon.name}
          </Text>
          <StarRatingComponent
            rating={this.props.pokemon.star}
            disabled={true}
          />
          <TouchableOpacity
            style={{padding: 10}}
            activeOpacity={0.7}
            onPress={() => this.props.removeFromCart(this.props.pokemon.id)}>
            <FeatherIcon
              name="ios-remove-circle-outline"
              size={25}
              color="black"
            />
          </TouchableOpacity>

          {/* <View style={styles.center}>
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
          </View> */}
        </View>
      </View>
    );
  }
}
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartdata: null,
      loading: true,
      modal: false,
    };
  }

  componentDidMount() {
    this.getCartItems();
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextProps.isFocused) {
      this.getCartItems();
      return true;
    }
  };

  getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  getCartItems = async () => {
    let items = await this.getData('cart');
    let filterdPokemons = pokemons.filter(pokemon => {
      if (items && items.includes(pokemon.id)) return true;
    });
    setTimeout(() => {
      this.setState({cartdata: filterdPokemons, loading: false}, () => {});
    }, 500);
  };

  removeFromCart = async id => {
    try {
      let existing = await this.getData('cart');
      let filterdIds = existing.filter(item => {
        return item !== id;
      });
      await AsyncStorage.setItem('cart', JSON.stringify(filterdIds));
      ToastAndroid.show('Removed', ToastAndroid.SHORT);
      this.getCartItems();
    } catch (e) {
      console.log(e);
    }
  };

  order = async () => {
    let count = this.state.cartdata.length;
    try {
      let existing = await this.getData('order');

      if (existing) {
        let newArr = [...existing, count];
        const value = JSON.stringify(newArr);
        await AsyncStorage.setItem('order', value);
      } else {
        let newVal = [count];
        const value = JSON.stringify(newVal);
        await AsyncStorage.setItem('order', value);
      }
      ToastAndroid.show('Order successful', ToastAndroid.SHORT);
      await AsyncStorage.removeItem('cart');

      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      this.setState({modal: false, cartdata: []});
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: backgroundColorPrimary}}>
        {this.state.loading ? (
          <View
            style={{
              marginVertical: '50%',
            }}>
            <ActivityIndicator size="large" color="tomato" />
          </View>
        ) : this.state.cartdata && this.state.cartdata.length == 0 ? (
          <Empty icon="shopping-cart" text="your cart is empty" />
        ) : (
          <View style={{flex: 1}}>
            <ScrollView style={{marginBottom: 125}}>
              <FlatList
                style={{marginVertical: 20}}
                showsVerticalScrollIndicator={false}
                data={this.state.cartdata}
                renderItem={({item}) => (
                  <CartList
                    pokemon={item}
                    removeFromCart={this.removeFromCart}
                  />
                )}
                keyExtractor={item => item.id}
              />
            </ScrollView>

            <View style={[styles.center, styles.checkoutView]}>
              <Text
                style={[
                  styles.checkoutTxt,
                  {fontSize: 15, fontFamily: fontPoppinsLight},
                ]}>
                {this.state.cartdata.length} Pokemon
              </Text>
              <TouchableOpacity
                style={styles.checkoutBtn}
                activeOpacity={0.7}
                onPress={() => this.setState({modal: !this.state.modal})}>
                <Text style={{color: colorWhite, fontFamily: fontPoppinsBold}}>
                  Get Now
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Modal
                isVisible={this.state.modal}
                avoidKeyboard={true}
                backdropOpacity={0.6}>
                <View style={styles.modal}>
                  <Text
                    style={{textAlign: 'center', fontFamily: fontPoppinsBold}}>
                    Enter address information
                  </Text>
                  <TextInput
                    value={this.state.name}
                    style={styles.inputBox}
                    placeholder="Name"
                  />
                  <TextInput
                    value={this.state.name}
                    style={styles.inputBox}
                    numberOfLines={5}
                    placeholder="Address"
                    multiline={true}
                  />
                  <TextInput
                    value={this.state.name}
                    style={styles.inputBox}
                    placeholder="Landmark"
                  />
                  <TextInput
                    value={this.state.name}
                    style={styles.inputBox}
                    keyboardType="number-pad"
                    placeholder="ZIP code"
                  />
                  <TouchableOpacity
                    onPress={() => this.order()}
                    activeOpacity={0.7}
                    style={styles.orderNow}>
                    <Text style={styles.orderText}>Order Now</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
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
    marginHorizontal: 10,
    borderRadius: 10,
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
    marginRight: -25,
  },
  inputBox: {
    marginTop: 10,
    fontFamily: fontPoppinsLight,
    paddingLeft: 15,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  modal: {
    flex: 1,
    backgroundColor: 'orange',
    borderRadius: 15,
    opacity: 0.9,
    padding: 20,
  },
  orderNow: {
    backgroundColor: 'black',
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 30,
  },
  orderText: {
    fontFamily: fontPoppinsBold,
    color: 'white',
    textAlign: 'center',
  },
});

export default withNavigationFocus(Cart);
