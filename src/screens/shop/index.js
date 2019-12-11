import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Search from '../../common/search';
import axios from 'axios';
import ProgressiveImage from '../../common/imagePlaceholder';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {}

  handleReaderselection() {
    alert('hi');
  }

  offsetInc() {
    alert('end');
  }

  render() {
    return (
      <View>
        <Search />
        {!this.state.data ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            <TouchableOpacity style={styles.catagories}>
              <Icon name="filter" size={25} color="white" />
              <Text>Catagories</Text>
            </TouchableOpacity>
            <View>
              <Text>Total {this.state.data.count} items</Text>
            </View>
            <View style={{flex: 1, backgroundColor: 'pink'}}>
              <FlatList
                data={this.state.data.products.data}
                renderItem={({item}) => (
                  <>
                    <TouchableOpacity
                      activeOpacity={1}
                      style={styles.GridViewContainer}
                      key={item.id}
                      onPress={() => this.handleReaderselection(item)}>
                      <ProgressiveImage
                        source={{
                          uri: item.files[0].path,
                        }}
                        resizeMode="contain"
                        style={styles.img}
                      />
                    </TouchableOpacity>
                    <Text>hee</Text>
                  </>
                )}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  this.offsetInc();
                }}
                numColumns={2}
                keyExtractor={item => item.id}
              />
            </View>
          </>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  catagories: {
    backgroundColor: 'grey',
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
  },
  img: {
    height: 200,
    width: 140,
  },
  GridViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    margin: 10,
    paddingVertical: 15,
  },
});

export default withNavigation(Shop);
