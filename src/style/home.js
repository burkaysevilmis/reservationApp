import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'gray',
  },
  reservationList: {
    flex: 0.9,
  },
  total: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 21,
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 8,
  },
  loading: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
