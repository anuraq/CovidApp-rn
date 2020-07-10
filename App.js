/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import HomePage from './components/HomePage'
import BottomInfo from './components/BottomInfo'
import FormScreen from './components/FormScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

class App extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
        <>
          <NavigationContainer>
            <Stack.Navigator
                    screenOptions={{
                      headerStyle: styles.navBar,
                      headerTintColor: '#000',
                      headerTitleStyle: styles.appTitle,
                    }}
            >
              <Stack.Screen
                name="Home"
                component={HomePage}
                options={{
                  title: 'CovidApp',
                  headerTitleStyle: {
                    alignSelf: 'center',
                    fontSize: 26,
                  },
                }} />
              <Stack.Screen
                name="Form"
                component={FormScreen} 
                options={{
                  title: 'Form'}}/>
            </Stack.Navigator>
          </NavigationContainer>
        </>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
  navBar: {
    backgroundColor: 'white',
    height: 55,
  },
  appTitle: {
    color: 'black',
    fontSize: 26,
  },
});

export default App;
