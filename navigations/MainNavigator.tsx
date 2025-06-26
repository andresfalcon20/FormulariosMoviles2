import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { NavigationContainer } from "@react-navigation/native"


import LoginScreen from "../screens/LoginScreen"
import WelcomeScreen from "../screens/WelcomeScreen"
import CalculadoraScreen from "../screens/CalculadoraScreen"
import IMCScreen from "../screens/IMCScreen"
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FormularioScreen from "../screens/FormularioScreen"
import FormularioUsuarioScreen from "../screens/FormularioUsuarioScreen"
import FormularioDireccionScreen from "../screens/FormularioDireccionScreen"
import EncuestaScreen from "../screens/EncuestaScreen"
import ListaLocalScreen from "../screens/ListaLocalScreen"
import ListaExternaScreen from "../screens/ListaExternaScreen"


const Stack = createStackNavigator()

function MyStack(){
    return(
        <Stack.Navigator 
        initialRouteName="Login">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Tabs" component={MyTab} />
        </Stack.Navigator>
    )
}


const Tab = createBottomTabNavigator()

function MyTab(){
    return(
        <Tab.Navigator 
        initialRouteName="Top"
        screenOptions={{headerShown: false}}>
            <Tab.Screen name="Calculadora" component={CalculadoraScreen} options={{
                tabBarIcon: ()=>(<Ionicons name="calculator" size={24} color="black" />)
                }}/>
            <Tab.Screen name="IMC" component={IMCScreen} />
            <Tab.Screen name="Formulario" component={FormularioScreen} />
            <Tab.Screen name="Registro" component={FormularioUsuarioScreen} options={{
                tabBarIcon: ()=>(<AntDesign name="user" size={24} color="black" />)
                }}/>
            <Tab.Screen name="Direcciones" component={FormularioDireccionScreen} options={{
                tabBarIcon: ()=>(<MaterialCommunityIcons name="google-maps" size={24} color="black" />)
                }}/>
            <Tab.Screen name="Encuesta" component={EncuestaScreen} options={{
                tabBarIcon: ()=>(<AntDesign name="form" size={24} color="black" />)
                }}/>

            <Tab.Screen name="Top" component={MyTop} />
        </Tab.Navigator>
    )
}

const Top = createBottomTabNavigator()
function MyTop(){
    return(
    <Top.Navigator>
        <Top.Screen name="Top" component={ListaLocalScreen} />
        <Top.Screen name="Externa" component={ListaExternaScreen} />
    </Top.Navigator>
)
}
export default function NavegadorPrincipal(){
    return(
        <NavigationContainer>
            <MyTab />
        </NavigationContainer>
    )
}