import {StyleSheet} from 'react-native';
import {fonts} from '../../utils/helpers/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  formCont: {
    marginTop: 20,
  },
  inputCont: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    fontSize: 16,
  },
  label: {
    marginBottom: 5,
    fontFamily: fonts.Cairo,
    color: '#333',
    fontSize: 15,
  },
  submitBtn: {
    backgroundColor: 'gold',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    width: '100%',
  },
  submitText: {
    fontFamily: fonts.CairoBold,
    fontSize: 20,
  },
  title: {
    fontFamily: fonts.CairoBold,
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  note: {
    fontFamily: fonts.CairoLigh,
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
});
