import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button,TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';


export default function App() {
  const [text, setText] = useState('Hello, World!');


  const alertMyText = () => {
    Alert.alert(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder='Type Something Here'
      />
      <Text style={styles.textDisplay}>You wrote: {text}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={alertMyText}
        >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkgray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: '88%',
    borderWidth: 1,
    height: 50,
  },
  textDisplay: {
    marginTop: 20,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '38%',
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'salmon',
    fontSize: 16,
  },
});