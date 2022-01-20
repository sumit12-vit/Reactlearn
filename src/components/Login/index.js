import React from 'react';
import { TextInput, Text, StyleSheet,Image, View, username, password} from 'react-native';

export function Login(props){
    return(
        <View style={styles.container}>
            <Image
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            style={{width: 200,height: 200}}
            />
            <Text style={{color: 'green'}}> Hello Coders</Text>
            <TextInput
            placeholder="Username"
            style={styles.login}
            username={username}
            maxLength={16}
            />
    
            <TextInput
            placeholder="Password"
            style={styles.login}
            username={password}
            secureTextEntry={true}
            maxLength={16}
            />
      </View>
    );
}

const styles = StyleSheet.create({
    login: {
      color: '#000',
      height: 50,
      margin: 10,
      borderWidth: 2,
      borderColor: 'green',
      borderRadius: 18,
      padding: 14,
      width: '85%',
    },
  
    container: {
      borderColor: 'green',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });