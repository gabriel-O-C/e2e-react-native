import React from 'react';
import { Text, View } from './Themed';


export default function Settings({ path }: { path: string }) {
  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      
      <Text style={{marginBottom: 20}}>Settings Page!</Text>
      <Text>{path}</Text>
    </View>
  );
}

