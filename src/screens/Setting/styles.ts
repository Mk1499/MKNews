import {StyleSheet} from 'react-native';
import {fonts} from '../../utils/helpers/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  btn: {
    backgroundColor: 'gold',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.CairoBold,
  },
});
