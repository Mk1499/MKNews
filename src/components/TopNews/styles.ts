import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  listCont: {
    marginTop: 10,
  },
  cardCont: {
    flexDirection: 'row',
    gap: 10,
    borderWidth: 1,
    borderColor: 'red',
    paddingEnd: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  cardArticleName: {
    textAlign: 'left',
    flex: 1,
    marginTop: 10,
  },
  cardArticelImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
