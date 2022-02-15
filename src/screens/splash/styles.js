import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  splashBackground: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
