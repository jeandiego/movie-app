import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import Detail from '../screens/Detail';
import Series from '../screens/Series';
import Search from '../screens/Search';
import { useColors } from '../hooks';
import { Add } from '~/svgs';

const Stack = createStackNavigator();
const Tabs = AnimatedTabBarNavigator();

const MainRoutes = () => {
  const colors = useColors();

  return (
    <Tabs.Navigator
      appearance={{
        floating: true,
        tabBarBackground: colors.secondary,
        whenActiveShow: 'both',
        whenInactiveShow: 'icon-only',
      }}
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.white,
        activeBackgroundColor: colors.primary,
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Filmes',
          tabBarIcon: () => <Add width={24} height={24} />,
        }}
      />
      <Tabs.Screen
        name="Series"
        component={Series}
        options={{
          tabBarLabel: 'Series',
          tabBarIcon: () => <Add width={24} height={24} />,
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: () => <Add width={24} height={24} />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={Search}
        options={{
          tabBarLabel: 'Em breve',
          tabBarIcon: () => <Add width={24} height={24} />,
        }}
      />
    </Tabs.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainRoutes} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
