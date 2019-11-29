import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  componentDidMount() {}
  handleSearch = async searchTerm => {};

  render() {
    return (
      <View style={styles.main}>
        {/* <View style={styles.ham}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Text>
            <Icon name="bars" size={25} color="#0984e3" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <TextInput
          value={this.state.searchTerm}
          style={styles.inputBox}
          onChangeText={text => this.setState({searchTerm: text})}
        />
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => this.handleSearch(this.state.searchTerm)}>
          <EvilIcons name="search" size={30} color="#0984e3" />
        </TouchableOpacity>
      </View> */}
        <View style={styles.ham}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Text>=</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
          <TextInput
            value={this.state.searchTerm}
            style={styles.inputBox}
            onChangeText={text => this.setState({searchTerm: text})}
          />
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => this.handleSearch(this.state.searchTerm)}>
            <Text>@</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cart}>
          <Text>+</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    paddingLeft: 5,
    paddingVertical: 20,
    maxHeight: 70,
  },

  ham: {
    paddingLeft: 5,
  },

  cart: {
    paddingRight: 5,
  },
  search: {
    backgroundColor: 'white',
    color: 'black',
    borderColor: '#bdc3c7',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    paddingRight: 40,
    height: 40,
  },

  searchBtn: {
    position: 'absolute',
    right: 8,
    top: 0,
  },

  inputBox: {
    paddingLeft: 15,
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default Search;
