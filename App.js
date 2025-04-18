import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneStyle: {backgroundColor: '#3f2f25'},
      
    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
            
          }}>

          <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={ {
            headerShown: false
          } } />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailScreen} />

        </Stack.Navigator>
        
      </NavigationContainer>
      
    </>
   
  );
}

