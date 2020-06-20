import React, { Component } from 'react';
import { AppRegistry, TouchableNativeFeedbackComponent } from 'react-native';
import { AsyncStorage, View, Text, TextInput, StyleSheet, Platform, TouchableOpacity, ScrollView, StatusBar, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faEdit, faMapMarkerAlt, faStore, fCamera, faCamera } from '@fortawesome/free-solid-svg-icons';
import { faClock, faHeart } from '@fortawesome/free-regular-svg-icons';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;


export default class User extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: this.props.route.params.user,
      id: this.props.route.params.id,
      user: {
        name: "Yunus Gürlek",
        school: "Üsküdar Amerikan Lisesi",
        profilePhoto: "https://res.cloudinary.com/dvnac86j8/image/upload/v1566558525/stumarkt/defaultUserPicture.png",
        school: "Üsküdar Amerikan Lisesi",
        birth_time: {
          day: 7,
          month: 4,
          year: 2003
        },
        class: "10",
        phone: "+905412196012"
      },
      name: "Yunus Gürlek",
      school: "Üsküdar Amerikan Lisesi",
      school_id: null,
      birth_time: {
        day: 7,
        month: 4,
        year: 2003
      },
      class: "10",
      phone: "+905412196012"
    };
  };

  render() {
    return (
      <View style={styles.main_wrapper} >
        <View style={styles.static_header} >
          <TouchableOpacity onPress={() => {this.props.navigation.goBack()}} >
            <FontAwesomeIcon icon={faArrowLeft} color="rgb(28, 28, 28)" size={23} />
          </TouchableOpacity>
          <Image source={require('../../assets/logo.png')} style={styles.header_logo} ></Image>
        </View>
        <View style={styles.content_wrapper} >
          <Text style={styles.content_title} >Bilgilerini Düzenle:</Text>
          <View style={styles.each_input_line} >
            <Text style={styles.each_input_title} >Ad Soyad</Text>
            <TextInput style={styles.each_input} >{this.state.name}</TextInput>
          </View>
          <View style={styles.each_input_line} >
            <Text style={styles.each_input_title} >Okul</Text>
            <TextInput style={styles.each_input} >{this.state.school}</TextInput>
          </View>
          <View style={styles.each_input_line} >
            <Text style={styles.each_input_title} >Doğum Tarihi</Text>
            <View style={{flexDirection: "row", flex: 1}} >
              <TextInput style={styles.each_input} >{this.state.birth_time.day}</TextInput>
              <TextInput style={styles.each_input} >{this.state.birth_time.month}</TextInput>
              <TextInput style={styles.each_input} >{this.state.birth_time.year}</TextInput>
            </View>
          </View>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_wrapper: {
    flex: 1, backgroundColor: "rgb(254, 254, 254)"
  },
  static_header: {
    height: 100, paddingTop: STATUSBAR_HEIGHT, backgroundColor: "rgb(254, 254, 254)",
    paddingLeft: 20, paddingRight: 20,
    flexDirection: "row", justifyContent: "space-between", alignItems: "center"
  },
  header_logo: {
    width: 70, height: 40, resizeMode: "contain"
  },
  content_wrapper: {
    alignItems: "center", marginBottom: 30
  }
});

AppRegistry.registerComponent('User', () => User);
