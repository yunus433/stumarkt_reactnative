import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity, StatusBar, Image, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const apiRequest = require('../../utils/apiRequest');

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  };

  addUserToAsyncStorage = async (email, password, callback) => {
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      callback();
    } catch (error) {
      alert("Hesabınız kaydedilemedi, lütfen daha sonra tekrar deneyin.");
    }
  };

  loginPostController = () => {
    Keyboard.dismiss();

    if (!this.state.email || !this.state.password)
      return this.setState({ error: "Lütfen tüm bilgileri girin." });

    apiRequest({
      method: "POST",
      url: "/auth/login",
      body: {
        email: this.state.email,
        password: this.state.password
      }
    }, (err, data) => {
      if (err) return this.setState({ error: "Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin." });

      if (data.error && data.error == 'bad request')
        return this.setState({ error: "Lütfen tüm bilgileri girin." });

      if (data.error && data.error == 'user not found')
        return this.setState({ error: "E-Posta hesabınız ya da şifreniz yanlış." });

      this.addUserToAsyncStorage(this.state.email, this.state.password, () => {
        this.props.navigation.navigate('Index', { id: data.user._id });
      });
    });
  }

  render() {
    return (
      <View style={styles.main_wrapper} >
        <Image source={require('./../../assets/login_logo.png')} style={styles.top} ></Image>
        <View style={styles.each_input_wrapper} >
          <FontAwesomeIcon icon={faEnvelope} size={17} color="rgb(0, 0, 0)" />
          <TextInput
            placeholder="E-Posta"
            style={styles.each_input}
            onChangeText={text => {this.setState({ email: text })}}
          >{this.state.email}</TextInput>
        </View>
        <View style={styles.each_input_wrapper} >
          <FontAwesomeIcon icon={faKey} size={17} color="rgb(0, 0, 0)" />
          <TextInput
            placeholder="Şifre"
            secureTextEntry={true}
            style={styles.each_input}
            onChangeText={text => {this.setState({ password: text })}}
          >{this.state.password}</TextInput>
        </View>
        <Text style={styles.error_text} >{this.state.error}</Text>
        <TouchableOpacity
          style={styles.register}
          onPress={() => {this.loginPostController()}}
        >
          <Text style={styles.register_text} >Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.login}
          onPress={() => {this.props.navigation.navigate('Register')}}
        >
          <Text style={styles.login_text} >Hesabın yok mu? Hemen üye ol!</Text>
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
  each_input_wrapper: {
    flexDirection: "row", alignItems: "center",
    marginLeft: 40, marginRight: 40, marginTop: 20,
    borderColor: "rgb(236, 236, 236)", borderWidth: 2,
    backgroundColor: "rgb(248, 248, 248)", paddingLeft: 15, paddingRight: 15, height: 50, borderRadius: 30
  },
  each_input: {
    color: "rgb(15, 15, 15)", fontSize: 17, fontWeight: "500",
    marginLeft: 10, flex: 1
  },
  error_text: {
    marginTop: "auto", marginLeft: 40, marginRight: 40, textAlign: "center",
    fontSize: 16, color: "red", fontWeight: "500", alignSelf: "center"
  },
  register: {
    justifyContent: "center", alignItems: "center",
    backgroundColor: "rgb(88, 0, 232)", borderRadius: 30,
    padding: 15, marginLeft: 40, marginRight: 40, marginTop: 20, marginBottom: 20,
    shadowColor: "rgb(0, 0, 0)", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.5
  },
  register_text: {
    color: "rgb(255, 255, 255)", fontSize: 22, fontWeight: "600"
  },
  login: {
    marginBottom: 100, alignSelf: "center"
  },
  login_text: {
    color: "rgb(0, 0, 0)", fontSize: 17, fontWeight: "500",
  },
  bottom: {
    width: "100%", position: "absolute", bottom: 0
  }
});

AppRegistry.registerComponent('Login', () => Login);
