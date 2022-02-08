import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Menu from '../../assets/images/svg/menu.svg';
import Person from '../../assets/images/png/person.png';
import discoverCategoriesData from '../../assets/data/discoverCategoriesData';
import colors from '../../assets/colors/colors';
import discoverData from '../../assets/data/diccoverData';
import Location from '../../assets/images/svg/location.svg';
import activitiesData from '../../assets/data/activitiesData';
import learnMoreData from '../../assets/data/learnMoreData';

const Discover = ({navigation}) => {
  const renderItem = ({item}) => (
    console.log({item}),
    (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {item: item})}>
        <ImageBackground
          style={[
            styles.discoverItem,
            {marginLeft: item.id === 'discover-1' ? 0 : 20},
          ]}
          imageStyle={{borderRadius: 20}}
          source={item.image}>
          <View style={styles.discoverContentWrapper}>
            <Text style={styles.discoverTitle}>{item.title}</Text>

            <View style={styles.locationWrapper}>
              <Location style={styles.discoverLocationIcon} height={15} />
              <Text style={styles.discoverLocation}>{item.location}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  );

  const renderActivityItem = ({item}) => {
    const {Image} = item;
    return (
      <View
        style={[
          styles.activityItemWrapper,
          {marginLeft: item.id === 'activities-1' ? 0 : 20},
        ]}>
        <Image height={30} />
        <Text style={{marginTop: 5}}>{item.title}</Text>
      </View>
    );
  };

  const learnMoreItem = ({item}) => (
    <ImageBackground
      source={item.image}
      imageStyle={{borderRadius: 20}}
      style={[
        styles.learnMoreImage,
        {marginLeft: item.id === 'learnMore-1' ? 0 : 20},
      ]}>
      <Text style={styles.learnMoreTitlte}>{item.title}</Text>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerWrapper}>
          <Menu />
          <Image source={Person} />
        </View>
        <Text style={styles.discoverTxt}>Discover</Text>

        <View style={styles.discoverCategoriesWrapper}>
          {discoverCategoriesData.map(item => (
            <Text
              style={[
                styles.itemText,
                {
                  color:
                    item.id === 'discover-categories-1'
                      ? colors.orange
                      : colors.gray,
                },
              ]}
              key={item.id}>
              {item.text}
            </Text>
          ))}
        </View>

        <View style={styles.discoverListWrapper}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={discoverData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>

        {/* Activities */}
        <View style={styles.activitesWrapper}>
          <Text style={styles.activityTitle}>Activities</Text>
          <View style={styles.activitiesListWrapper}>
            <FlatList
              data={activitiesData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={renderActivityItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>

        {/* learn more */}
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoretitle}>Learn More</Text>
          <View style={styles.LearnMoreListWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={learnMoreItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Discover;
