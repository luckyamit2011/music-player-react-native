import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import AudioProvider from './app/context/AudioProvider';
import color from './app/misc/color';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: color.APP_BG,
  },
};
const styles = StyleSheet.create({
  midBannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    
  }, 
  title: {
    color: "red",
  }, 
});
export default function App() {
  return (
      <AudioProvider>
        <View style={styles.midBannerContainer}>
        <Text style={styles.title}>Amit Gupta Manikpur</Text>
        </View>
      <NavigationContainer theme={MyTheme}>
        
        <AppNavigator />
      </NavigationContainer>
    </AudioProvider>
  );


}
