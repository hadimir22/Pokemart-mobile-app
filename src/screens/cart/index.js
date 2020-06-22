import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  FlatListProps,
  FlatList,
  ToastAndroid,
  Image,
  Dimensions,
} from 'react-native';
import {withNavigation} from 'react-navigation';
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
      <Swipeout
        right={swipeoutBtns}
        autoClose={true}
        sensitivity={100}
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
      </Swipeout>
    );
  }
}
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartdata: null,
      loading: true,
      modal: true,
    };
    const {navigation} = this.props;
    this.focusListener = navigation.addListener('didFocus', async () => {
      // this.setState({loading: true, cartdata: null});
      // this.getCartItems();
      // alert('focused');
    });
  }

  componentDidMount() {
    this.getCartItems();
  }

  // componentWillUnmount() {
  //   this.focusListener.remove();
  // }

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('cart');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  getCartItems = async () => {
    let items = await this.getData();
    console.log('cat items', items);
    let filterdPokemons = pokemons.filter(pokemon => {
      if (items.includes(pokemon.id)) return true;
    });
    this.setState({cartdata: filterdPokemons});
  };

  removeFromCart = async id => {
    try {
      let existing = await this.getData();
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

  render() {
    return (
      <View style={{flex: 1, backgroundColor: backgroundColorPrimary}}>
        {!this.state.cartdata ? (
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
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'orange',
                    borderRadius: 15,
                    opacity: 0.9,
                    padding: 20,
                  }}>
                  <Text style={{textAlign: 'center'}}>
                    Enter address information
                  </Text>
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
});

export default withNavigation(Cart);
