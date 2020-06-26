import React, {Component} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import {
  colorWhite,
  iconColorPrimary,
  colorBlack,
  fontPoppinsBold,
  fontPoppinsLight,
} from '../../constants';

function Item({item}) {
  return (
    <View style={styles.info}>
      <View>
        <FeatherIcon name="check-circle" size={35} color="green" />
      </View>
      <View style={{paddingHorizontal: 30}}>
        <Text style={[styles.title, {fontFamily: fontPoppinsBold}]}>
          {item} Pokemon ordered
        </Text>
        <Text style={[styles.title, {fontFamily: fontPoppinsLight}]}>
          {item > 1 ? 'Pokemons' : 'Pokemon'} on {item > 1 ? 'their' : 'its'}{' '}
          way
        </Text>
      </View>
    </View>
  );
}

class NotificationFlatListComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.props.orders}
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
  info: {
    backgroundColor: colorWhite,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 10,
    elevation: 5,
    marginBottom: 20,
  },
});

export default NotificationFlatListComponent;
