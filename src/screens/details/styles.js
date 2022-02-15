import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  detailImageBg: {
    height: height * 0.6,
    justifyContent: 'space-between',
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 30,
    width: 30,
  },
  detailsTitle: {
    marginLeft: 20,
    color: colors.white,
    fontFamily: 'Lato-Bold',
    fontSize: 32,
  },
  detailsLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 7,
    marginBottom: 40,
  },
  detailsLocationIcon: {
    color: colors.white,
  },
  detailsLocation: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    marginLeft: 10,
    color: colors.white,
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  heartWrapper: {
    height: 64,
    width: 64,
    borderRadius: 64,
    backgroundColor: colors.white,
    marginTop: -64 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  descriptionDetails: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
    marginTop: 20,
  },
  infoWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {},
  infoTitle: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: colors.gray,
    textTransform: 'capitalize',
  },
  infoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  infoText: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.orange,
  },
  infoSubText: {
    color: colors.gray,
    fontFamily: 'Lato-Regular',
  },
  buttonWrapper: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.orange,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: 'Lato-Regular',
    color: colors.white,
    fontSize: 18,
    marginVertical: 16,
  },
});
export default styles;
