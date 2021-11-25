import React from "react";
import { createStackNavigator } from '@react-navigation/stack'


import Home from "../Screens/Home";
import Store from '../Screens/Store'
import DetailStore from '../Screens/DetailStore'
import LogIn from "../Screens/LogIn";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return(
        <Stack.Navigator >
            <Stack.Screen name = "Principal" component={Home} />
            <Stack.Screen name = "Iniciar" component={LogIn} />
        </Stack.Navigator>
    );
}

const StoreStackNavigation = () => {
    return(
        <Stack.Navigator >
            <Stack.Screen name = "Tienda" component={Store} />
            <Stack.Screen name = "Detail" component={DetailStore} />
        </Stack.Navigator>
    );
}

export {MainStackNavigator , StoreStackNavigation };