import React from 'react';
import { SafeAreaView,StyleSheet, Text, View, Image, TextInput } from 'react-native';

import { Login } from './src/components/Login';
//import { MainScreen } from './src/screens/MainScreen';
export default function App(){
  return(
    //<View style={styles.container}>
    //  <Text style={{color: 'yellow'}}> Sumit Chandna</Text>
    //<Image
    //    source={{
      //    uri: 'https://reactnative.dev/img/tiny_logo.png',
     //   }}
     //   style={{width: 200,height: 200}}
     //   />
     //   <TextInput placeholder='enter the password'/>
    //</View>
    <>
    
    <Login />
    </>
  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: 'black'
  },
  text1: {
    color: 'blue'
  }
})