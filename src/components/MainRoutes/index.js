import React from 'react';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import { useTranslation } from 'react-i18next';
import Search from '../../screens/Search';
import Home from '../../screens/Home';
import UpComing from '../../screens/UpComing';
import { useColors } from '../../hooks';
import { Movie, TvShow, SearchIcon, Calendar } from '~/svgs';

const Tabs = AnimatedTabBarNavigator();

const MainRoutes = () => {
  const colors = useColors();
  const { t } = useTranslation();

  return (
    <Tabs.Navigator
      appearance={{
        floating: false,
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
          tabBarLabel: `${t(`MOVIES`)}`,
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
        component={Home}
        options={{
          tabBarLabel: `${t(`SERIES`)}`,
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
          tabBarLabel: `${t(`SEARCH_TAB`)}`,
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
        name="Soon"
        component={UpComing}
        options={{
          tabBarLabel: `${t(`SOON`)}`,
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

export default MainRoutes;
