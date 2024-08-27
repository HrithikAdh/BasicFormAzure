import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { azurefetch, initAzureCosmos } from 'react-native-azure-cosmos/azurecosmos'

import WriteReview from './WriteReview';
import ReadReview  from './ReadReview';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
 return(

  <NavigationContainer>
<Stack.Navigator initialRouteName="WriteReview">
        <Stack.Screen
          name="WriteReview"
          component={WriteReview}
         options={{headerShown:false}}
        />
        <Stack.Screen name="ReadReview" component={ReadReview}  options={{headerShown:false}}/>
      </Stack.Navigator>


  </NavigationContainer>
 )

}