import React from 'react';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from '../../assets/home.svg'
import Search from '../../assets/search.svg'
import Header from '../Header';
import Feed from '../Fedd';



const BottomTab = createBottomTabNavigator();

export default function Tab() {
  return (
      <BottomTab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
        <BottomTab.Screen name="Home" component={Header} options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Feather  style={style.bottomTab} name="home" size={24} color="black" />
          ) 
        }}  />
        <BottomTab.Screen name="Search" component={Feed} options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Feather  style={style.bottomTab} name="search" size={24} color="black" />
          ) 
        }} />
        <BottomTab.Screen name="Add" component={Header} options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Feather  style={style.bottomTab} name="plus-square" size={24} color="black" />
          ) 
        }} />
        <BottomTab.Screen name="Heart" component={Feed} options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Feather style={style.bottomTab} name="heart" size={24} color="black" />
          ) 
        }}  />
        <BottomTab.Screen name="User" component={Header} options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Feather style={style.bottomTab} name="user" size={24} color="black" />
          ) 
        }}  />
      </BottomTab.Navigator>
  );
}

const style = StyleSheet.create({
  bottomTab: {
    marginTop: 15,
    textAlign: "center"
  }
})