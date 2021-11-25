

import * as React from 'react'

import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
    
    PlantDetail
} from './src/screens/'

import Tabs from './src/navigation/tabs'


const Stack = createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer >
      <Stack.Navigator
      screenOptions={{
          headerShown:false
      }}
      initialRouteName={'Tabs'}
      >
        <Stack.Screen  name='Tabs' component={Tabs} />

        <Stack.Screen  name='PlantDetail' component={PlantDetail} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <App/>
}