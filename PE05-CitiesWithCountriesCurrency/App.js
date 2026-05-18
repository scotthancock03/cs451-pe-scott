import React, { useState } from 'react';
import { View, Text } from 'react-native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Cities from './src/Cities/Cities';
import AddCity from './src/AddCity/AddCity';

import Countries from './src/Countries/Countries';
import AddCountries from './src/AddCountries/AddCountries';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStackScreen({ cities }) {
  function CityPlaceholder() {
    return (
      <View>
        <Text>City Details Placeholder</Text>
      </View>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities">
        {(props) => <Cities {...props} cities={cities} />}
      </Stack.Screen>
      <Stack.Screen name="City" component={CityPlaceholder} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [cities, setCities] = useState([]);
  // 1. Added country state tracking
  const [countries, setCountries] = useState([]); 

  const addCity = (city) => {
    setCities((prevCities) => [...prevCities, city]);
  };

  // 1. Added addCountry state updater function
  const addCountry = (country) => {
    setCountries((prevCountries) => [...prevCountries, country]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CitiesNav">
          {(props) => <CitiesStackScreen {...props} cities={cities} />}
        </Tab.Screen>
        <Tab.Screen name="AddCity">
          {(props) => <AddCity {...props} addCity={addCity} />}
        </Tab.Screen>
        
        {/* 2. Added new tabs for Countries and AddCountries tracking */}
        <Tab.Screen name="Countries">
          {(props) => <Countries {...props} countries={countries} />}
        </Tab.Screen>
        <Tab.Screen name="AddCountry">
          {(props) => <AddCountries {...props} addCountry={addCountry} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}