import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({item}) {
  return (
    <ImageBackground
      source={{uri: item.files[0].path}}
      style={[styles.item, {height: 200, width: 150}]}>
      <View style={styles.info}>
        <Text style={styles.title}>{item.slug}</Text>
        <Text style={styles.title}>{item.price.formatted}</Text>
      </View>
    </ImageBackground>
  );
}

class HorizontalList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.featuredData,
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {console.log('listtt', this.props)}
        <Text style={styles.heading}>{this.props.heading}</Text>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: 'green',
    padding: 25,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  info: {
    position: 'absolute',
    bottom: 0,
    width: 150,
    backgroundColor: 'white',
    opacity: 0.7,
  },
});

export default HorizontalList;
