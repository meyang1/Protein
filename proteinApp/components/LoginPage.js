// components/LoginPage.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3776d' }}>
      <Text style={{ color: 'white', fontSize: 20 }}>Sign in</Text>
      <TextInput style={{ width: '80%', maxWidth: 300, padding: 15, marginVertical: 10, borderRadius: 10, backgroundColor: 'white' }} placeholder="Username" />
      <TextInput style={{ width: '80%', maxWidth: 300, padding: 15, marginVertical: 10, borderRadius: 10, backgroundColor: 'white' }} placeholder="Password" secureTextEntry={true} />
      <TouchableOpacity style={{ width: '80%', maxWidth: 300, backgroundColor: '#6fcf97', paddingVertical: 15, borderRadius: 25, marginTop: 10, justifyContent: 'center', alignItems: 'center' }} onPress={() => console.log('Submit')}>
        <Text style={{ color: 'white', fontSize: 16 }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
