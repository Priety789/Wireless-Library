import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SearchScreen extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>
                    Search
                </Text>
            </View>
        );
    }
}