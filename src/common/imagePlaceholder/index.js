import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Loader from '../../assets/loading.png';

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {},
});
class ProgressiveImage extends React.Component {
  render() {
    const {source, style, ...props} = this.props;
    return (
      <View style={styles.container}>
        <Image {...props} source={Loader} style={style} />
        <Image
          {...props}
          source={source}
          style={[styles.imageOverlay, style]}
        />
      </View>
    );
  }
}
export default ProgressiveImage;
