import React, { Component } from 'react';
import { View,
    Text,
    StyleSheet,} from 'react-native';

let data = [
    {"number":  8, "name": 'Fun activities'},
    {"number": 7, "name": 'Dog'},
    {"number": 16, "name": 'Food'},
    {"number": 23, "name": 'Car'},
    {"number": 42, "name": 'Rent'},
    {"number":  4, "name": 'Misc'},
    ];

let arcs = d3.shape.pie()
.value(this._value)
(this.props.data);

class DArtGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Text>
                    Anurag
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    test: {
        backgroundColor: 'red',
    },
});

export default DArtGraph;