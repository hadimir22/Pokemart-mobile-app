import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid} from 'react-native';

let getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

let addToCart = async id => {
  console.log('ok', id);
  const keys = await AsyncStorage.getAllKeys();
  const result = await AsyncStorage.multiGet(keys);
  console.log(result);
  try {
    let existing = await this.getData('cart');

    if (existing) {
      console.log('ko', existing);
      if (existing.includes(id)) {
        return ToastAndroid.show('Already in cart', ToastAndroid.SHORT);
      }
      let newArr = [...existing, id];
      const value = JSON.stringify(newArr);
      await AsyncStorage.setItem('cart', value);
    } else {
      let ids = [id];
      const value = JSON.stringify(ids);
      await AsyncStorage.setItem('cart', value);
    }
    ToastAndroid.show('Added to cart', ToastAndroid.SHORT);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  addToCart,
};
