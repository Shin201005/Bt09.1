import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#ff7a00',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
          paddingTop: 6,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home-outline';

          if (route.name === 'Home') {
            iconName = 'compass-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Explorer' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Account' }}
      />
    </Tab.Navigator>
  );
}