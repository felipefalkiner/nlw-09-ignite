import { useRef } from 'react';
import { StatusBar } from 'react-native';
import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
 } from '@expo-google-fonts/inter';
 import { Subscription } from 'expo-modules-core'

import { Routes } from './src/routes'; 
import { Loading } from './src/components/Loading';
import { Background } from './src/components/Background';

import './src/services/notificationConfigs';
import { getPushNotificationToken } from './src/services/getPushNotificationToken';

// const getNotificationListener = useRef<>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      { fontsLoaded ? <Routes /> : <Loading />}

    </Background>
  );
}
