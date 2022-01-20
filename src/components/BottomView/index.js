import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Login } from '../Login';

export function Bottomview(){
    return(
        <View style={styles.container}>
          <Text style={{color: 'pink'}}> Sumit Chandna</Text>
          <Image
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            style={{width: 200,height: 200}}
          />
          <TextInput placeholder='enter here'/>
        </View>
      );
}
const styles=StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
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