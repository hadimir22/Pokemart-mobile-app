import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
  Modal,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import Back from '../../common/backHeader';
import {backgroundColorPrimary, colorWhite} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';
import FeatherIcons from 'react-native-vector-icons/dist/Feather';
import {iconColorPrimary} from '../../constants';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.main}>
        <StatusBar
          backgroundColor={backgroundColorPrimary}
          barStyle="dark-content"
        />
        <Back screenName="Profile" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.userInfo}>
            <Image
              source={require('../../assets/logo.png')}
              style={styles.userImage}
              resizeMode="contain"
            />
            <Text
              style={{
                alignSelf: 'center',
                paddingVertical: 20,
                fontWeight: 'bold',
              }}>
              Halsey Mir
            </Text>
          </View>
          <View style={styles.userSetting}>
            <View style={styles.settingHead}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FeatherIcons
                    name="settings"
                    size={25}
                    color={iconColorPrimary}
                  />
                  <Text style={{paddingLeft: 10, fontWeight: 'bold'}}>
                    User Settings
                  </Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <FeatherIcons name="edit" size={25} color={iconColorPrimary} />
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.settingHead}>
                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FeatherIcons
                      name="user"
                      size={25}
                      color={iconColorPrimary}
                    />
                    <Text style={{paddingLeft: 10}}>Name</Text>
                  </View>
                </View>
                <Text>Helsey</Text>
              </View>
              <View style={styles.settingHead}>
                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FeatherIcons
                      name="mail"
                      size={25}
                      color={iconColorPrimary}
                    />
                    <Text style={{paddingLeft: 10}}>Email</Text>
                  </View>
                </View>
                <Text>helsey.mir@gmail.com</Text>
              </View>
              <View style={styles.settingHead}>
                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FeatherIcons
                      name="map-pin"
                      size={25}
                      color={iconColorPrimary}
                    />
                    <Text style={{paddingLeft: 10}}>Address</Text>
                  </View>
                </View>
                <Text>nowpora khanyar kashmir</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: backgroundColorPrimary,
  },
  userInfo: {
    backgroundColor: colorWhite,
    borderRadius: 15,
    padding: 10,
  },
  userImage: {
    height: 150,
    width: 150,
    borderRadius: 50,
    alignSelf: 'center',
  },
  userSetting: {
    marginVertical: 20,
    padding: 10,
    borderRadius: 15,
    backgroundColor: colorWhite,
  },
  settingHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  actions: {
    marginHorizontal: 20,
    textAlign: 'center',
    marginBottom: 20,
    borderRadius: 15,
    padding: 20,
    color: 'white',
  },
});

export default withNavigation(Profile);
