import React, {Component} from 'react';
import {AppRegistry, View, ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const apiRequest = require('../../utils/apiRequest');

export default class Loading extends Component{
  static navigationOptions = {
    header: null
  };

  componentDidMount = async () => {
    try {
      const email = await AsyncStorage.getItem('email');
      const password = await AsyncStorage.getItem('password');

      if (email != null && password != null) {
        apiRequest({
          method: "POST",
          url: "/auth/login",
          body: { email, password }
        }, (err, data) => {
          if (err || !data || data.error || !data.user) return this.props.navigation.navigate('Landing');

          this.props.navigation.navigate('Index', { id: data.user._id });
        });
      } else {
        this.props.navigation.navigate('Landing');
      }
    } catch (error) {
      this.props.navigation.navigate('Landing');
    }
  }

  render() {
    return (
      <View style={styles.main_wrapper}>
        <ActivityIndicator size="large" color="rgb(88, 0, 232)" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_wrapper: {
    flex: 1, backgroundColor: "rgb(253, 252, 252)",
    justifyContent: "center", alignItems: "center"
  }
});


AppRegistry.registerComponent('Loading', () => Loading);
