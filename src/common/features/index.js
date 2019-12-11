import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Features extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {this.props.featuredData.map(item => {
          return (
            <View style={styles.child}>
              <Icon name={item.icon.slice(6)} size={20} color="teal" />
              <Text>{item.title}</Text>
              <Text>{item.subtitle}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mian: {
    backgroundColor: 'white',
  },
  child: {
    backgroundColor: 'white',
    textAlign: 'center',
    padding: 5,
    alignItems: 'center',
  },
});

export default Features;
