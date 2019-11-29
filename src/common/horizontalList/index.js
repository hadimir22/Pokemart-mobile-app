import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';

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

function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function HorizontalList() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Heading</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: 'green',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  title: {
    fontSize: 32,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingBottom: 10,
  },
});
