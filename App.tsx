import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import NavegadorBottom from './navigations/BottonTab';
import NavegadorPrincipal from './navigations/MainNavigator';

export default function App() {
  return (
    <>
       <>
      <NavegadorPrincipal /> 
      
      <StatusBar style="auto" />
    </>
    </>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    }
});
