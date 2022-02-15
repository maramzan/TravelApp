import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Location from '../../assets/images/svg/location.svg';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors/colors';

const Details = props => {
  const {navigation} = props;
  const {item} = props.route.params;
  console.log({item});

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground style={styles.detailImageBg} source={item.imageBig}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.goBack()}>
            <Entypo name="chevron-thin-left" size={32} color={colors.white} />
          </TouchableOpacity>
          <View>
            <Text style={styles.detailsTitle}>{item.title}</Text>
            <View></View>
            <View style={styles.detailsLocationWrapper}>
              <Location style={styles.detailsLocationIcon} height={20} />
              <Text style={styles.detailsLocation}>{item.location}</Text>
            </View>
          </View>
        </ImageBackground>
        {/* lower Portion */}
        <View style={styles.descriptionWrapper}>
          <View style={styles.heartWrapper}>
            <Entypo name="heart" size={32} color={colors.orange} />
          </View>

          <View>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionDetails}>{item.description}</Text>
          </View>
          {/* info */}
          <View style={styles.infoWrapper}>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>Price</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{`$${item.price}`}</Text>
                <Text style={styles.infoSubText}>/person</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>Rating</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{`${item.rating}`}</Text>
                <Text style={styles.infoSubText}>/5</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>Duration</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{`${item.duration} `}</Text>
                <Text style={styles.infoSubText}>hours</Text>
              </View>
            </View>
          </View>
          {/* button */}
          <TouchableOpacity style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

// <Text onPress={() => navigation.goBack()}>this is details page</Text>
