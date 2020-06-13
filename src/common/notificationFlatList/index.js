import React, {Component} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import {colorWhite, iconColorPrimary, colorBlack} from '../../constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    notification: 'Mac Book ',
    notificationDetails: 'delivered',
    time: '2 min ago',
    icon: 'check-circle',
    color: 'green',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    notification: 'One Plus',
    notificationDetails: 'Cancelled',
    time: '10 min ago',
    icon: 'alert-triangle',
    color: 'red',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    notification: 'Hero Go Pro  8',
    notificationDetails: 'Shipped',
    time: '40 min ago',
    icon: 'gift',
    color: 'purple',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad535abb28ba',
    notification: 'Backpack',
    notificationDetails: 'On its way',
    time: '50 min ago',
    icon: 'compass',
    color: 'brown',
  },
];

function Item({item}) {
  return (
    <View style={styles.info}>
      <View>
        <FeatherIcon name={item.icon} size={35} color={item.color} />
      </View>
      <View style={{paddingHorizontal: 30}}>
        <Text style={[styles.title, {fontWeight: 'bold'}]}>
          {item.notification}
        </Text>
        <Text style={styles.title}>{item.notificationDetails}</Text>
        <Text style={styles.title}>{item.time}</Text>
      </View>
    </View>
  );
}

class NotificationFlatListComponent extends Component {
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
