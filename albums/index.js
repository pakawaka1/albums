// Import a library to create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component

const App = () => (
    <Header headerText={'Albums'} />            // Same as <Header></Header>
);
// Render the component to device (MUST REGISTER AT LEAST ONE COMPONENT)

AppRegistry.registerComponent('albums', () => App);
