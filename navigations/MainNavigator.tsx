import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CalculadoraScreen from '../screens/CalculadoraScreen';
import IMCScreen from '../screens/IMCScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import FormularioScreen from '../screens/FormularioScreen';
import EncuestaScreen from '../screens/EncuestaScreen';
import FormularioDireccionScreen from '../screens/FormularioDireccionScreen';
import FormularioUsuarioScreen from '../screens/FormularioUsuarioScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Formulario' >
      <Tab.Screen name="Encuesta" component={EncuestaScreen} options={{tabBarIcon: ()=>(<AntDesign name="checkcircle" size={24} color="black" />)}}/>
      <Tab.Screen name="Formulario de Usuario" component={FormularioUsuarioScreen} />
      <Tab.Screen  name='Formulario de Direccion' component={FormularioDireccionScreen}/>
    </Tab.Navigator>
  );
}


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Calculadora" component={MyTabs} />
    </Stack.Navigator>
  );
}


export default function NavegadorPrincipal() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}