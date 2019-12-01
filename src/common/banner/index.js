import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';

function Item({item}) {
  return (
    <ImageBackground
      source={{uri: item.image.path}}
      style={styles.item}
      resizeMode="stretch">
      <View style={styles.info}>
        <Text style={styles.title}>{item.caption_1}</Text>
        <Text style={styles.title}>{item.caption_2}</Text>
      </View>
    </ImageBackground>
  );
}

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.bannerData,
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.image.id}
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
    overflow: 'hidden',
    height: 200,
    alignSelf: 'center',
    width: Dimensions.get('window').width - 50,
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

export default Banner;
