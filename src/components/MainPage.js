import React from 'react';
import { View, ScrollView, Platform, Image, FlatList, TouchableOpacity, CameraRoll } from 'react-native';
import { Button, Text, Card, Avatar } from 'react-native-elements';
import _ from 'lodash';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { getImages, getMoreImages } from '../api/unsplash';
import styles from './MainPageStyle';

export default class MainPage extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#ffffff',
      borderBottomColor: '#fff',
      shadow: 'none',
    },
  };

  constructor(props) {
    super(props);
    this.renderImages = this.renderImages.bind(this);
    this.fetchMore = this.fetchMore.bind(this);
    this.downloadImage = this.downloadImage.bind(this);
    this.state = {
      imagesList: [],
    };
  }

  componentDidMount() {
    getImages((err, res) => {
      if (res) {
        console.log(res);
        this.setState({ imagesList: res });
      }
    });
  }

  fetchMore(page) {
    getMoreImages(page, (err, res) => {
      if (err) {
        console.log(`Error in getting more images${JSON.stringify(err)}`);
      } else {
        console.log(res);
        let newList = this.state.imagesList;
        newList = _.concat(newList, res);
        this.setState({ imagesList: newList });
      }
    });
  }

  downloadImage(imageUrl) {
    let fileName = '';
    if (Platform === 'android') {
      fileName += 'wallpapr/';
    }
    fileName += imageUrl.substring(imageUrl.indexOf('/photos/') + 8, imageUrl.indexOf('/download'));
    console.log(fileName);
    Expo.FileSystem.downloadAsync(
      imageUrl,
      `${Expo.FileSystem.documentDirectory}${fileName}.png`,
    )
      .then(({ uri }) => {
        console.log('Finished downloading to ', uri);
        CameraRoll.saveToCameraRoll(uri, 'photo');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderImages(image) {
    return (<View >
      <Card containerStyle={styles.card} >
        <Image resizeMode="cover" source={{ uri: image.urls.regular }} style={styles.image} />
      </Card>
      <View style={styles.cardFooter}>
        <View style={styles.profileWrapper}>
          <Avatar
            small
            rounded
            source={{ uri: image.user.profile_image.medium }}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
          />
          <View style={styles.profileTextWrapper}>
            <Text style={styles.primaryText}>{image.user.name}</Text>
            <View style={styles.likesWrapper}>
              <Ionicons name="ios-heart" size={16} color="red" style={{ marginRight: 4, paddingTop: 2 }} />
              <Text style={styles.primaryText}>{image.user.total_likes}</Text>
            </View>
          </View>
        </View>
        <View style={styles.download}>
          <TouchableOpacity onPress={() => this.downloadImage(image.links.download)}>
            <Entypo name="download" size={24} color="grey" style={{ marginRight: 4, paddingTop: 2 }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>Wallpapr</Text>
        <View style={styles.list}>
          <FlatList
            style={styles.list}
            data={this.state.imagesList}
            renderItem={({ item }) => this.renderImages(item)}
            onEndReachedThreshold={0.5}
            onEndReached={() => this.fetchMore((this.state.imagesList.length / 10) + 1)}
          />
        </View>
      </View>
    );
  }
}

