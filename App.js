import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import MainPage from './src/components/MainPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Circular-Bold': require('./src/assets/fonts/CircularStd-Bold.otf'),
      Circular: require('./src/assets/fonts/CircularStd-Medium.otf'),
      'Circular-Light': require('./src/assets/fonts/CircularStd-Book.otf'),
      'Calibre-Light': require('./src/assets/fonts/Calibre-Light.ttf'),
      Cookie: require('./src/assets/fonts/Cookie-Regular.ttf'),
      Kaushan: require('./src/assets/fonts/KaushanScript-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ?
          <MainPage />
        : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontFamily: 'Circular',
  },
});
