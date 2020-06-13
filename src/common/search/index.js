import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import FeatherIcons from 'react-native-vector-icons/dist/Feather';
import {withNavigation, NavigationActions} from 'react-navigation';
import {colorBlack, colorWhite} from '../../constants';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  componentDidMount() {}
  handleSearch = async searchTerm => {};

  render() {
    return (
      <View style={{marginBottom: 25, paddingHorizontal: 20}}>
        <View style={styles.main}>
          <View style={styles.menuBtn}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}
              activeOpacity={0.7}>
              <FeatherIcons name="list" size={25} color={colorBlack} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{fontWeight: '700', color: 'tomato'}}>Pokemart</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={this.navigateToScreen('Profile')}
              activeOpacity={0.7}>
              <FeatherIcons name="user" size={25} color={colorBlack} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.search}>
          <TextInput
            value={this.state.searchTerm}
            style={styles.inputBox}
            placeholder="Search"
            onChangeText={text => this.setState({searchTerm: text})}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.searchBtn}
            onPress={() => this.handleSearch(this.state.searchTerm)}>
            <EvilIcons name="search" size={30} color={colorBlack} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },

  search: {
    alignSelf: 'center',
    backgroundColor: colorWhite,
    color: colorBlack,
    borderRadius: 10,
    elevation: 10,
    width: '100%',
    height: 40,
  },

  searchBtn: {
    position: 'absolute',
    right: 8,
    top: 5,
  },

  inputBox: {
    paddingLeft: 15,
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default withNavigation(Search);
