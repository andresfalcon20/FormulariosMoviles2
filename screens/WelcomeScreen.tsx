import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface WelcomeScreenProps {
  navigation: any;
}

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  return (
    <View> 
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')} 
      />
    </View> 
  );
}

const styles = StyleSheet.create({}); 