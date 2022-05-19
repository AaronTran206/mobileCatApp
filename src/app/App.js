import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../home/Home';
import CatFact from '../catFact/CatFact';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homeScreen">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Your Cat Fact" component={CatFact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
