import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import CartScreen from './screens/CartScreen';
import AcceptingOrderScreen from './screens/AcceptingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';


export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
          <Stack.Screen name="Cart"
           component={CartScreen}
           options={{presentation:'modal', headerShown:false}}
           />
          <Stack.Screen name="AcceptingOrder"
           component={AcceptingOrderScreen}
           options={{headerShown:false}}
           />
          <Stack.Screen name="Delivery"
           component={DeliveryScreen}
           options={{headerShown:false}}
           />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

