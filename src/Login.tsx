import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Divider, Icon, Input} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
const Login: React.JSX.Element = ({navigation}) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View>
              <Text style={styles.formTitle}>مشخصات خود را وارد کنید</Text>
              <Text style={styles.formDescription}>
                برای استفاده از امکانات کتاب یاران لطفا اطلاعات خود را وارد
                کنید.
              </Text>
              <TextInput
                maxLength={15}
                style={styles.input}
                autoComplete="username"
                placeholder="نام کاربری"
                keyboardType="default"
              />
              <TextInput
                secureTextEntry={true}
                maxLength={15}
                style={styles.input}
                autoComplete="password"
                placeholder="رمز عبور"
                keyboardType="default"
              />
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => {
                  navigation.navigate('Signup');
                }}>
                <Text style={styles.registerText}>حساب کاربری ندارید؟</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={[styles.formDescription, {color: 'darkred'}]}>
              شرایط استفاده از خدمات{' '}
              <Text style={[styles.formDescription, {color: 'black'}]}>و </Text>
              <Text style={styles.formDescription}>حریم خصوصی</Text>
              <Text style={[styles.formDescription, {color: 'black'}]}>
                {' '}
                کتاب یاران را می پذیرم.
              </Text>
            </Text>
            <Divider style={styles.pageTitleDivider} />
            <Button
              titleStyle={styles.loginText}
              buttonStyle={styles.loginButton}>
              ورود
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: deviceHeight - deviceHeight / 5,
  },
  topContainer: {},
  bottomContainer: {},

  formTitle: {
    marginTop: 35,
    marginEnd: 15,
    alignSelf: 'flex-end',
    fontFamily: 'IRANSansMobile-Medium',
    fontSize: 20,
  },
  formDescription: {
    marginTop: 35,
    marginBottom: 10,
    marginEnd: 15,
    textAlign: 'right',
    alignSelf: 'flex-end',
    fontFamily: 'IRANSansMobile-Light',
    fontSize: 17,
    lineHeight: 35,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    textAlign: 'right',
    fontFamily: 'IRANSansMobile-Medium',
    borderRadius: 7,
  },
  loginButton: {
    marginTop: 15,
    width: (deviceWidth * 7) / 8,
    borderRadius: 7,
    alignSelf: 'center',
    backgroundColor: '#0033ff',
  },
  loginText: {
    fontFamily: 'IRANSansMobile-Medium',
  },
  registerButton: {
    marginEnd: 20,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  registerText: {
    fontSize: 15,
    color: 'darkblue',
    fontFamily: 'IRANSansMobile-Medium',
  },
});
export default Login;
