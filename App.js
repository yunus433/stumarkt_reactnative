import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './components/index/Landing';
import Loading from './components/index/Loading';
import Index from './components/index/Index';

import Details from './components/buy/Details';

import Register from './components/auth/Register';
import Login from './components/auth/Login';

import Profile from './components/user/Profile';

import Favorites from './components/favorites/Favorites';

import New from './components/sell/New';

import Chat from './components/messages/Chat';
import Message from './components/messages/Message';

import User from './components/edit/User';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Loading"
        headerMode = "none"
        screenOptions={{animationEnabled: false}}
      >
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="New" component={New} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Chat" component={Chat} ></Stack.Screen>
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
