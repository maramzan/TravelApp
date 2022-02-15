import {View, Text, SafeAreaView, ImageBackground, Button} from 'react-native';
import React from 'react';
import styles from './styles';
import splashBackground from '../../assets/images/png/splash.png';

const Splash = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.splashBackground}
        source={splashBackground}>
        <Text>Travel App</Text>
        <Button>
          <Text>Let's Begin</Text>
        </Button>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Splash;
