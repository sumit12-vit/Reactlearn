import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Login } from '../Login';

export function Topview(){
    return(
        <View style={styles.container}>
          <Text style={{color: 'black'}}> Sumit Chandna</Text>
          <Image
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            style={{width: 200,height: 200}}
            />
        
        </View>
      );
}
const styles=StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })