import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  useFonts,
  Montserrat_400Regular as Montserrat400Regular,
  Montserrat_500Medium as Montserrat500Medium,
  Montserrat_600SemiBold as Montserrat600SemiBold,
  Montserrat_700Bold as Montserrat700Bold,
} from '@expo-google-fonts/montserrat';

import Home from 'src/components/Home';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const App = () => {
  useFonts({
    Montserrat400Regular,
    Montserrat500Medium,
    Montserrat600SemiBold,
    Montserrat700Bold,
  });
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
