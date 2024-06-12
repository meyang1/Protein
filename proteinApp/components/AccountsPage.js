// components/AccountsPage.js
import React from 'react';
import { View, Text } from 'react-native';

const AccountsPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3776d' }}>
      <Text style={{ color: 'white', fontSize: 20 }}>Find Matches</Text>
      <View style={{ marginTop: 50 }}>
        <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#ddd', margin: 0, alignSelf: 'center' }} />
        <Text style={{ marginTop: 10, fontSize: 18, color: '#333' }}>Blake Antony</Text>
      </View>
    </View>
  );
};

export default AccountsPage;
