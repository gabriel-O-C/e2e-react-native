import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Text, View } from './Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View style={{ width: '100%' }}>
      <View style={{ alignItems: 'center' }}>
        <TextInput style={styles.input} placeholder='E-mail' />
      </View>
      <View style={{ alignItems: 'center' }} >
        <TextInput style={styles.input} placeholder='Password' secureTextEntry />
      </View>

      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
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
