import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 0,
  },
  text: {
    color: 'red',
  },
  container: {
    width: '100%',
    shadowColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',

  },
  appName: {
    width: '100%',
    marginTop: 140,
    marginBottom: 20,
    color: '#000',
    fontFamily: 'Cookie',
    fontSize: 40,
    textAlign: 'center',
  },
  list: {
    width: '100%',
  },
  primaryText: {
    fontFamily: 'Circular',
  },
  secondaryText: {
    fontFamily: 'Circular-Light',
  },
  card: {
    padding: 0,
    margin: 14,
    borderRadius: 4,
  },
  cardFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  download: {
    marginRight: 16,
  },
  likesWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileWrapper: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  profileTextWrapper: {
    marginLeft: 16,
  },
  image: {
    width: '100%',
    height: 200,
    padding: 0,
    margin: 0,
    borderRadius: 4,
  },
});

export default styles;
