import React, { Component } from 'react';
import { View,
    Text,
    StyleSheet,
    TouchableOpacity,} from 'react-native';
import {Picker} from '@react-native-community/picker';
import { Dimensions } from "react-native";


const screenWidth = Dimensions.get("window").width;


const values = ["India", "ytrrf", "yuf", "jhvuyf","aaaaaaaaaaaaaaaaaaag"];

class BotScreenOne extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
            <View style={styles.infoCon}>
                <View style={{flexDirection: 'row',justifyContent: 'center',borderColor: 'black',borderWidth: 1,}}>
                <Picker
                    selectedValue={this.state.selectedValue}
                    style={styles.pickerView}
                    itemStyle={{fontSize: 30,marginLeft: 30,backgroundColor: 'red'}}
                    activeItemTextStyle={{fontSize: 30, fontWeight: 'bold'}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({selectedValue: itemValue})}
                    mode='dialog'
                    prompt='Select Region'>
                    {values.map((v,k)=><Picker.Item label={v} value={k} key={k} />)}
                </Picker>
                </View>
                <View><Text>Anurag</Text></View>
            </View>
            <DArtGraph />
          </>
        );
    }
}

const styles = StyleSheet.create({
    infoCon: {
        backgroundColor: 'rgba(235, 202, 73, 0.5)',
        borderRadius: 10,
        margin: 10,
        marginTop: 20,
        height: 120,
    },
    pickerView: {
        marginTop: 5,
        height: 50,
        width: 100,
        transform: [
            { scaleX: 1.5 }, 
            { scaleY: 1.5 },
         ],
    },
    pickerItem: {
        fontSize: 30,
        alignSelf: 'center',
    }
});

export default BotScreenOne;