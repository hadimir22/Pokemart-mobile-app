import React, {Component} from 'react';
import {
  Image,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colorWhite} from '../../constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    product: 'Mac Book ',
    productQuant: '1 unit',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    product: 'One Plus',
    productQuant: '2 units',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    product: 'Hero Go Pro  8',
    productQuant: '1 unit',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad535abb28ba',
    product: 'Backpack',
    productQuant: '5 units',
  },
  {
    id: 'bd7acbea-c1b1-461c2-aed5-3ad535abb28ba',
    product: 'Backpack',
    productQuant: '1 units',
  },
  {
    id: 'bd7acbea-c1b1-46c22-aed5-3ad535abb28ba',
    product: 'Backpack',
    productQuant: '2 units',
  },
];

function Item({item}) {
  return (
    <View style={styles.info}>
      <View>
        <Image
          source={require('../../assets/images/mac.jpeg')}
          style={{height: 70, width: 70}}
          resizeMode="contain"
        />
      </View>
      <View style={{paddingHorizontal: 30}}>
        <Text style={[styles.title, {fontWeight: 'bold'}]}>{item.product}</Text>
        <Text style={styles.title}>{item.productQuant}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={[styles.action, {borderColor: 'green'}]}>
          <Text>Add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.action, {borderColor: 'red'}]}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

class WishListFlatListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.tabData,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    paddingVertical: 2,
  },
  action: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  info: {
    backgroundColor: colorWhite,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    elevation: 5,
    marginBottom: 20,
  },
});

export default WishListFlatListComponent;
