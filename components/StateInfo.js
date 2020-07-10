import React, { Component, useState } from 'react';
import {
    View,
    StyleSheet,
    Text} from 'react-native';
import {Picker} from '@react-native-community/picker';
import { ScrollView } from 'react-native-gesture-handler';

class StateInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {data: this.props.sdata}
    }

    sortData(i) {
        let sdata = [...this.props.sdata];
        if(i == 0)
            this.setState({data: sdata})
        else {
            sdata.sort(function(a, b) {return Number(b[i+1]) - Number(a[i+1])});
            this.setState({data: sdata});
        }
            
    }
    
    render() {
        if(this.state.data != null){
            return (
                <>
                <SortFilter sortFunc={this.sortData.bind(this)}/>
                    {this.state.data.map((x) => <StateCard info={x} key={x[0]}/>)}
                </>
            );}
        else{
            return (
                <View style={styles.LoadingView}>
                    <Text style={styles.LoadingText}>Loading</Text>
                </View>
            );
        }
    }
}

function SortFilter(props){
        const [selectedValue, setSelectedValue] = useState(0);
        const values = ["A - Z","Active Cases","Discharged","Deaths","Total"];
        return (
          <View style={styles.sortView}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => {
                    setSelectedValue(itemValue);
                    props.sortFunc(itemValue);}}
              mode='dropdown'>
              {values.map((v,k)=><Picker.Item label={v} value={k} key={k} />)}
            </Picker>
          </View>
        );
      
}

function StateCard(props) {
    if(props.info[0] != 8) {
    return (
        <View style={styles.card}>
            <Text style={styles.stateTitle}>{props.info[1]}</Text>
            <View style={styles.infos}>
                <View style={[styles.textinside, {flex: 1.3}]}>
                    <Text style={styles.statTitle}>Active Cases</Text>
                    <Text style={styles.statNumber}>{props.info[2]}</Text>
                </View>
                <View style={[styles.textinside, {flex: 1.8}]}>
                    <Text style={styles.statTitle}>Discharged Cases</Text>
                    <Text style={styles.statNumber}>{props.info[3]}</Text>
                </View>
                <View style={[styles.textinside, {flex: 0.9}]}>
                    <Text style={styles.statTitle}>Deaths</Text>
                    <Text style={styles.statNumber}>{props.info[4]}</Text>
                </View>
                <View style={[styles.textinside, {flex: 1.1}]}>
                    <Text style={styles.statTitle}>Total</Text>
                    <Text style={styles.statNumber}>{props.info[5]}</Text>
                </View>
            </View>
        </View>
    );}
    else {
        return (
            <View style={styles.card}>
                <Text style={styles.stateTitle}>{props.info[1]}</Text>
                <View style={styles.infosDDD}>
                    <View style={[styles.textinside, {flex: 1.3}]}>
                        <Text style={styles.statTitle}>Active Cases</Text>
                        <Text style={styles.statNumber}>{props.info[2]}</Text>
                    </View>
                    <View style={[styles.textinside, {flex: 1.8}]}>
                        <Text style={styles.statTitle}>Discharged Cases</Text>
                        <Text style={styles.statNumber}>{props.info[3]}</Text>
                    </View>
                    <View style={[styles.textinside, {flex: 1}]}>
                        <Text style={styles.statTitle}>Deaths</Text>
                        <Text style={styles.statNumber}>{props.info[4]}</Text>
                    </View>
                    <View style={[styles.textinside, {flex: 1}]}>
                        <Text style={styles.statTitle}>Total</Text>
                        <Text style={styles.statNumber}>{props.info[5]}</Text>
                    </View>
                </View>
            </View>
        );}
}

const styles = StyleSheet.create({
    card: { 
        backgroundColor: 'rgba(111, 181, 109, 0.5)',
        marginLeft: 20,
        marginTop: 10,
        height: 110,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    stateTitle: {
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 5,
    },
    textinside: {
        flex: 1,
    },
    infos: {
        paddingTop: 15,
        paddingLeft: 20,
        flexDirection: 'row',
        flex: 4,
    },
    statNumber: {
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    infosDDD: {
        paddingLeft: 20,
        flexDirection: 'row',
        flex: 4,
    },
    statTitle: {
        fontStyle: 'italic',
        alignSelf: 'center',
    },
    LoadingView: {
        marginLeft: 20,
        marginTop: 10,
        height: 110,
        alignSelf: 'center',
    },
    LoadingText : {
        fontSize: 25,
    },
    sortView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});

export default StateInfo;