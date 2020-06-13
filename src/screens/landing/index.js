import React, {PureComponent} from 'react';
import {
  Text,
  Dimensions,
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  backgroundColorPrimary,
  fontColorPrimary,
  tabIndicatorColor,
} from '../../constants';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import ProductCarousel from '../../common/carousel';
import {iconColorPrimary} from '../../constants/index';
import {from} from 'rxjs';

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
                position: 'absolute',
                bottom: -15,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
});
