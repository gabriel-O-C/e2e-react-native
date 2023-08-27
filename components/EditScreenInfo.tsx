import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput } from 'react-native';
import { Text, View } from './Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function EditScreenInfo({ path }: { path: string }) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValid, setIsValid] = useState(false);

  function handleSubmit() {
    if(email === 'gabriel@mail.com' && password === '123') {
      setIsValid(true);
    }else {
    Alert.alert('user or password invalid!')
    }
  }
  return (
    <View style={{ width: '100%' }}>
      <View style={{ alignItems: 'center' }}>
        <TextInput style={styles.input} placeholder='E-mail' value={email} onChangeText={(value) => setEmail(value)} />
      </View>
      <View style={{ alignItems: 'center' }} >
        <TextInput style={styles.input} placeholder='Password' secureTextEntry value={password} onChangeText={(value) => setPassword(value)} />
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      {isValid &&
        <View style={{width: '100%', alignItems: 'center', marginVertical: 20}}>
          <Text style={{color: 'green'}} testID='valid-text'>Acesso liberado!</Text>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e2e2e2',
    width: '90%',
    height: 32,
    borderRadius: 4,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: '#c2c2c2',
    marginBottom: 10,
  },
  button: {
    width: '90%',
    borderColor: '#000',
    backgroundColor: '#000',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    minHeight: 30,
    alignSelf: 'center'
  }

});
