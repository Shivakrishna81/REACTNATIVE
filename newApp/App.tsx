import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from "./src/components/Login";
import Home from './src/components/Home';
import Student from './src/components/Student';
import Parent from './src/components/Parent';
import StudentMarksView from './src/components/StudentMarksView';
import React from 'react'

const Stack=createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name="Login" component={Login}/>
           <Stack.Screen name="Home" component={Home}/>
           <Stack.Screen name="Student" component={Student}/>
           <Stack.Screen name="Parent"  component={Parent}/>
           <Stack.Screen name="StudentMarksView" component={StudentMarksView}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
