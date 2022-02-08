import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {flex: 1, color: colors.white},
  headerWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  discoverTxt: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.black,
    marginTop: 20,
    marginLeft: 20,
  },
  discoverCategoriesWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  itemText: {
    color: colors.gray,
    fontFamily: 'Lato-Regular',
    fontWeight: '600',
  },
  discoverListWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    borderRadius: 20,
    justifyContent: 'flex-end',
    paddingVertical: 15,
  },
  discoverContentWrapper: {
    marginLeft: 10,
  },
  discoverTitle: {
    color: colors.white,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discoverLocationIcon: {},
  discoverLocation: {
    color: colors.white,
    marginLeft: 8,
    fontFamily: 'Lato-Regular',
    fontSize: 10,
  },
  activitesWrapper: {
    marginLeft: 20,
    marginTop: 30,
  },
  activityTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  activitiesListWrapper: {
    marginTop: 20,
  },
  activityItemWrapper: {
    alignItems: 'center',
  },

  learnMoreWrapper: {
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 10,
  },
  learnMoretitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.black,
  },
  LearnMoreListWrapper: {
    marginTop: 20,
  },
  learnMoreImage: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  learnMoreTitlte: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
});
export default styles;
