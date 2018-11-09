// import libraries for making a component 
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Create a component

class AlbumList extends Component {

    componentWillMount() {
        console.log('componentWillMount in AlbumList');
    }
    render() {
        return (
            <View>
                <Text>Album List!</Text>
            </View>
        );
    }

}

// Render the component to device (MUST REGISTER AT LEAST ONE COMPONENT)
export default AlbumList;
