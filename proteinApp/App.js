// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens/components
import StartingPage from './components/StartingPage';
import LoginPage from './components/LoginPage';
import AccountsPage from './components/AccountsPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartingPage">
        <Stack.Screen name="StartingPage" component={StartingPage} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="AccountsPage" component={AccountsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
