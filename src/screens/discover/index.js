import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const Discover = ({navigation}) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Details')}>
        this is discover page
      </Text>
    </View>
  );
};

export default Discover;
