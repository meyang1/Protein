// components/StartingPage.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import workoutImage from './workout.png'; // Correct path to the image

const StartingPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3776d' }}>
      <Text style={{ color: 'white', fontSize: 20 }}>Find people to workout with Protein.</Text>
      <Image source={workoutImage} style={{ width: 300, height: 300, marginVertical: 20 }} />
      <TouchableOpacity style={{ backgroundColor: '#6fcf97', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 25 }} onPress={() => console.log('Get Started')}>
        <Text style={{ color: 'white', fontSize: 16 }}>Get Started</Text>
      </TouchableOpacity>
      <Text style={{ color: 'white', marginTop: 10 }}>Already have an account? <Text style={{ color: '#6fcf97' }}>Login here!</Text></Text>
    </View>
  );
};

export default StartingPage;
