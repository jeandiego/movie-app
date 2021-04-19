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
import { Movie, TvShow, SearchIcon, Calendar } from '~/svgs';
import { navigationRef } from './RootNavigation';

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
          tabBarIcon: ({ focused }) => (
            <Movie
              width={24}
              height={24}
              color={focused ? colors.white : null}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Series"
        component={Series}
        options={{
          tabBarLabel: 'Series',
          tabBarIcon: ({ focused }) => (
            <TvShow
              width={24}
              height={24}
              color={focused ? colors.white : null}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ focused }) => (
            <SearchIcon
              width={24}
              height={24}
              color={focused ? colors.white : null}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={Search}
        options={{
          tabBarLabel: 'Em breve',
          tabBarIcon: ({ focused }) => (
            <Calendar
              width={24}
              height={24}
              color={focused ? colors.white : null}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
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
