import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import Home from './src/screens/Home';
import AddTrip from './src/screens/AddTrip';
import TripDetails from './src/screens/TripDetails';
import MapScreen from './src/screens/Mapscreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ title: 'Sign Up' }} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AddTrip" component={AddTrip} options={{ title: 'Add New Trip' }} />
                <Stack.Screen name="TripDetails" component={TripDetails} options={{ title: 'Trip Details' }} />
                <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Map View' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
