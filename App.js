import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Search from './components/search';
import CharactersNavigation from './components/characterNavigation';
import EpisodesNavigation from './components/episodeNavigation';

const AppTabs = createBottomTabNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <AppTabs.Navigator
      screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					switch (route.name) {
						case 'Rechercher un personnage':
							iconName = 'search'
							break;
            case 'Liste des épisodes':
              iconName = 'list'
              break;
            default:
              iconName ="menu"
					}
					return iconName
						? <Ionicons name={iconName} size={size} color={color} />
						: null;
				},
			})}
		>
    <AppTabs.Screen name="Rechercher un personnage" component={CharactersNavigation}  options={{headerShown: false}} />
    <AppTabs.Screen name="Liste des épisodes" component={EpisodesNavigation}  options={{headerShown: false}} />
    </AppTabs.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
