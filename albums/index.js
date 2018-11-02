// Import a library to create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component

const App = () => (
    <Text> Some Fucking Text </Text>
);
// Render the component to device (MUST REGISTER AT LEAST ONE COMPONENT)

AppRegistry.registerComponent('albums', () => App);
