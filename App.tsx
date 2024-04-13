/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Login from './src/Login.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './src/Signup.tsx';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: props => (
              <View style={styles.topBar}>
                <View>
                  <TouchableOpacity style={styles.searchButton}>
                    <Text style={styles.searchText}>جستجوی کتاب</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={{...styles.pageTitle, ...styles.LoginTitle}}>
                    ورود به حساب کاربری
                  </Text>
                </View>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerTitle: props => (
              <View>
                <Text style={{...styles.pageTitle, ...styles.SignupTitle}}>
                  ایجاد حساب کاربری
                </Text>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  pageTitle: {
    marginTop: 5,
    alignSelf: 'flex-end',
    fontFamily: 'IRANSansMobile-Bold',
    fontSize: 18,
  },
  LoginTitle: {
    marginEnd: 30,
  },
  SignupTitle: {
    marginTop: 0,
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchButton: {
    borderRadius: 25,
    marginBottom: 5,
    backgroundColor: '#ffde4d',
    padding: 9,
  },
  searchText: {
    color: '#444',
    fontFamily: 'IRANSansMobile-Medium',
    fontSize: 15,
  },
});
export default App;
