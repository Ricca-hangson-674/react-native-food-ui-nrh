import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
  useFonts,
  Montserrat_400Regular as Montserrat400Regular,
  Montserrat_500Medium as Montserrat500Medium,
  Montserrat_600SemiBold as Montserrat600SemiBold,
  Montserrat_700Bold as Montserrat700Bold,
} from '@expo-google-fonts/montserrat';

import { Text } from 'react-native';

// import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import Home from 'src/components/Home';
import Details from 'src/components/Details';

const medium = require('src/assets/fonts/Montserrat_500Medium.ttf');
const bold = require('src/assets/fonts/Montserrat_700Bold.ttf');
const regular = require('src/assets/fonts/Montserrat_400Regular.ttf');
// const semiBold = require('src/assets/fonts/Montserrat_600SemiBold.ttf');
const semiBold = require('src/assets/fonts/Montserrat-SemiBold.ttf');

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded, error] = useFonts({
    Montserrat400Regular,
    Montserrat500Medium,
    Montserrat600SemiBold,
    Montserrat700Bold,
  });

  const [fontsLoadedBase, errorBase] = Font.useFonts({
    'Montserrat-SemiBold': semiBold,
    'Montserrat-Bold': bold,
    'Montserrat-Medium': medium,
    'Montserrat-Regular': regular,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'Montserrat-SemiBold': semiBold,
          'Montserrat-Bold': bold,
          'Montserrat-Medium': medium,
          'Montserrat-Regular': regular,
        });
      } catch (e) {
        console.warn('loadAsync', e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  //  true null
  console.log('App', fontsLoaded, appIsReady, error, fontsLoadedBase, errorBase);

  if (!fontsLoaded || !appIsReady) {
    return <Text>Load</Text>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
