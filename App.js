import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeBaseProvider, useColorMode } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import HomeScreen from './src/screens/Homescreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ConfigScreen from './src/screens/ConfigScreen';
import TabTwoScreen from './src/screens/Badges';
import LoginScreen2 from './src/screens/Hooks';
import About from './src/screens/AboutScreen';
import Info from './src/screens/InfoScreen';
import customTheme from './src/theme/Theme';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNav(){
  const colors = customTheme.colors;
  const {colorMode}=useColorMode();
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Settings') {
         iconName = focused ? 'settings' : 'settings-outline'
        }else if (route.name === 'Info') {
          iconName = focused ? 'information-circle' : 'information-circle-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colorMode==='light'?colors.secondary[500]:colors.highlight[500],
      tabBarInactiveTintColor: colorMode==='light'?"gray":colors.darkHighlight[100],
      headerShown:false,
      tabBarStyle: {
        backgroundColor: colorMode === 'light' ? colors.highlight[500] : colors.darkSecondary[500],
        borderTopWidth: 0,
      },
    })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={ConfigScreen} />
      <Tab.Screen name="Info" component={Info} />
    </Tab.Navigator>
  );
}
 
function DrawerNav (){
  const colors = customTheme.colors;
  const {colorMode}=useColorMode();
  return(
    <Drawer.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        }else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }else if (route.name === 'About') {
          iconName = focused ? 'information-circle' : 'information-circle-outline';
        }else if (route.name === 'Badges') {
          iconName = focused ? 'pricetag' : 'pricetag-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      drawerActiveTintColor: colorMode==='light'?colors.secondary[500]:colors.accent[100],
      drawerInactiveTintColor: colorMode==='light'? colors.primary[700]:colors.highlight[500],
      headerStyle: {
        backgroundColor: colorMode === 'light' ? colors.highlight[500] : colors.darkSecondary[500],
        borderBottomWidth:0
      },
      headerTintColor: colorMode==='light'?colors.secondary[500]:colors.highlight[500],
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
      drawerStyle: {
        backgroundColor: colorMode === 'light' ?  colors.accent[100] : colors.secondary[600],
      },
      drawerType: 'front',
    }
  )}
    >
      <Drawer.Screen name="Home" component={TabNav} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Badges" component={TabTwoScreen} />
      <Drawer.Screen name="Hooks" component={LoginScreen2} />
    </Drawer.Navigator>
  );
}

function App(){
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return(
    
      <NativeBaseProvider theme={customTheme}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName={isAuthenticated ? "Drawer" : "Login"}
          screenOptions={Options => ({
            headerShown: false,
          })}
          >
            <Stack.Screen name="Login">
              {() => <LoginScreen setIsAuthenticated={setIsAuthenticated}/>}
            </Stack.Screen>
            <Stack.Screen name="Drawer" component={DrawerNav} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    
  );
}

export default App;
