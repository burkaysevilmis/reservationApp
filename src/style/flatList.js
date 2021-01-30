import {StyleSheet, Dimensions} from 'react-native';
const height = Dimensions.get('window').height;
export default StyleSheet.create({
  screen: {
    flex: 1,
  },
  box: {
    flexDirection: 'row',
    height: height / 3.6,
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageBox: {
    flex: 0.8,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  counterBox: {
    flex: 0.2,
    backgroundColor: 'white',
  },
  positive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  negative: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  textBoxText: {
    fontSize: 20,
  },
  priceAndName: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  hotelName: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  price: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 20,
  },
});
