import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { View, Text, StyleSheet, Platform, TouchableOpacity, StatusBar, Image } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight

export default class Landing extends Component {
  render() {
    return (
      <View style={styles.main_wrapper} >
        <Image source={require('./../../assets/landing_logo.png')} style={styles.top} ></Image>
        <Text style={styles.title} >stumarkt</Text>
        <Text style={styles.subtitle} >Öğrenciden öğrenciye satış platformu</Text>
        <TouchableOpacity
          style={styles.register}
          onPress={() => {this.props.navigation.navigate('Register')}}
        >
          <Text style={styles.register_text} >Kaydol</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.login}
          onPress={() => {this.props.navigation.navigate('Login')}}
        >
          <Text style={styles.login_text} >Giriş Yap</Text>
        </TouchableOpacity>
        <Image source={require('./../../assets/landing_bottom.png')} style={styles.bottom} ></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_wrapper: {
    flex: 1, paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: "rgb(253, 252, 252)"
  },
  top: {
    width: "100%", resizeMode: "contain"
  },
  title: {
    color: "rgb(88, 0, 232)", fontWeight: "800", fontSize: 65,
    alignSelf: "center", marginTop: 20
  },
  subtitle: {
    color: "rgb(0, 0, 0)", fontWeight: "500", fontSize: 20,
    alignSelf: "center", marginTop: 5, textAlign: "center",
    marginLeft: 40, marginRight: 40
  },
  register: {
    justifyContent: "center", alignItems: "center",
    backgroundColor: "rgb(88, 0, 232)", borderRadius: 20,
    padding: 15, marginLeft: 40, marginRight: 40, marginTop: "auto",
    shadowColor: "rgb(0, 0, 0)", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.5
  },
  register_text: {
    color: "rgb(255, 255, 255)", fontSize: 22, fontWeight: "600"
  },
  login: {
    justifyContent: "center", alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)", borderRadius: 20,
    padding: 15, marginLeft: 40, marginRight: 40, marginTop: 30, marginBottom: 100,
    shadowColor: "rgb(0, 0, 0)", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.4,
    borderColor: "rgba(0, 0, 0, 0.3)", borderWidth: 0.4
  },
  login_text: {
    color: "rgb(88, 0, 232)", fontSize: 22, fontWeight: "600"
  },
  bottom: {
    width: "100%", position: "absolute", bottom: 0
  }
});

AppRegistry.registerComponent('Landing', () => Landing);
