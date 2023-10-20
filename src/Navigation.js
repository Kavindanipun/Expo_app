import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Search from './Screens/Exercise';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PlusButton from './Screens/Tutorial';
import Photo from './Screens/Photo';
import User from './Screens/User';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: '',
        }}>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Fontisto name="home" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Days"
          component={Search}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="calendar" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Tutorial"
          component={PlusButton}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="video-camera" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="photo"
          component={Photo}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="photo" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="user-secret" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
