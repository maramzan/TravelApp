import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const Details = ({navigation}) => {
  return (
    <View>
      <Text onPress={() => navigation.goBack()}>this is details page</Text>
    </View>
  );
};

export default Details;
