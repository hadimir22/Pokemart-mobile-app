import React, {PureComponent} from 'react';
import {
  Text,
  Dimensions,
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  backgroundColorPrimary,
  fontColorPrimary,
  tabIndicatorColor,
} from '../../constants';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import ProductCarousel from '../../common/carousel';
import {iconColorPrimary} from '../../constants/index';
import StarRatingComponent from '../../common/starRating';

const pokemon = [
  {
    id: 1,
    name: 'Pikachu',
    star: 5,
    image: require('../../assets/pokemons/pokeball.png'),
  },
  {
    id: 2,
    name: 'One Plus',
    star: 5,
    image: require('../../assets/pokemons/pokeball.png'),
  },
  {
    id: 3,
    name: 'Hero Go Pro',
    star: 2,
    image: require('../../assets/pokemons/pokeball.png'),
  },
  {
    id: 4,
    name: 'Backpack',
    image: require('../../assets/pokemons/pokeball.png'),
  },
  {
    id: 5,
    name: 'Backpack',
    star: 1,
    image: require('../../assets/pokemons/pokeball.png'),
  },
  {
    id: 6,
    name: 'Backpack',
    star: 4,
    image: require('../../assets/pokemons/pokeball.png'),
  },
  {
    id: 7,
    name: 'Mac Book',
    star: 3,
    image: require('../../assets/pokemons/pokeball.png'),
  },
  {
    id: 8,
    name: 'One Plus',
    star: 5,
    image: require('../../assets/pokemons/pokeball.png'),
  },
  {
    id: 9,
    name: 'Hero Go Pro',
    star: 5,
    image: require('../../assets/pokemons/pokeball.png'),
  },
  {
    id: 10,
    name: 'Backpack',
    star: 5,
    image: require('../../assets/pokemons/pokeball.png'),
  },
];

class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: 'grey',
          margin: 2,
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
          borderRadius: 15,
        }}>
        <Image
          source={this.props.pokemon.image}
          style={{height: 50, width: 50}}
        />
        <Text>{this.props.pokemon.name}</Text>
        <View style={{marginVertical: 3}}>
          <StarRatingComponent
            rating={this.props.pokemon.star}
            disabled={true}
          />
        </View>

        <View style={{flexDirection: 'row', marginTop: 8}}>
          <TouchableOpacity
            style={[styles.action, {borderColor: 'green'}]}
            activeOpacity={0.7}>
            <FeatherIcon name="shopping-cart" size={25} color="green" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.action, {borderColor: 'red'}]}
            activeOpacity={0.7}>
            <FeatherIcon name="heart" size={25} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroller}>
          <ProductCarousel />
          <View
            style={{
              backgroundColor: 'white',
              paddingVertical: 50,
              marginVertical: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: tabIndicatorColor,
                paddingVertical: 20,
                flexDirection: 'row',
                width: '90%',
                borderRadius: 15,
                position: 'absolute',
                bottom: -15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                <FeatherIcon name="gift" size={45} color={iconColorPrimary} />
                <FeatherIcon
                  name="activity"
                  size={45}
                  color={iconColorPrimary}
                />
                <FeatherIcon name="anchor" size={45} color={iconColorPrimary} />
                <FeatherIcon
                  name="codesandbox"
                  size={45}
                  color={iconColorPrimary}
                />
              </View>
            </View>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={pokemon}
            renderItem={({item}) => <Product pokemon={item} />}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColorPrimary,
    flex: 1,
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center',
  },
  action: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
});
