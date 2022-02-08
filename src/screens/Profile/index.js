import {View, Text} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View>
      <Text onPress={() => navigation.goBack()}>Hello this is Profile</Text>
    </View>
  );
};

export default Profile;
