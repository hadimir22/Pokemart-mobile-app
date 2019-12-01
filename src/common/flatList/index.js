import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';

function Item({item}) {
  return (
    <ImageBackground source={{uri: item.files[0].path}} style={styles.item}>
      <View style={styles.info}>
        <Text style={styles.title}>{item.slug}</Text>
        <Text style={styles.title}>{item.price.formatted}</Text>
      </View>
    </ImageBackground>
  );
}

class FlatListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.tabData,
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>{this.props.heading}</Text>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  item: {
    padding: 25,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    overflow: 'hidden',
    height: 200,
    width: 150,
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

export default FlatListComponent;
