import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TextInput,
    TouchableOpacity,} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import FormChecks from './FormChecks';
import FormRadio from './FormRadio';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

var genderRadio = [
    {label: 'Male', value: 0 },
    {label: 'Female', value: 1 }
  ];

  var trhisRadio = [
    {label: 'No history', value: 0 },
    {label: 'Yes Visited Other Countries', value: 1 }
  ];
  var symptomsRadio = [
    {label: 'No Progress', value: 0 },
    {label: 'Yes, Progressing Continuously', value: 1 }
  ];

class FormScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ScrollView style={styles.scroll}>
                <View style={styles.bubbleView}>
                    <Text style={styles.formTitle}>
                    COVID-19 Self-Test
                    </Text>
                    <View>
                        <View style={styles.formContainer}>
                        <Text style={styles.formText}>Enter your Name:</Text>
                        <TextInput
                            style={styles.formBox}
                            placeholder="name" />
                        <Text style={styles.formText}>Enter your Age:</Text>
                        <TextInput
                            style={styles.formBox}
                            placeholder="age" />
                        <Text style={styles.formText}>Enter your Body Temperature:</Text>
                        <TextInput
                            style={styles.formBox}
                            placeholder="temp" />
                        <Text style={[styles.formText ,{marginBottom: 10}]}>Gender:</Text>
                        <FormRadio rlabels={genderRadio} />
                        <FormChecks sty={styles.formText}/>
                        <Text style={[styles.formText ,{marginBottom: 10}]}>Travel history(In last 3 months)</Text>
                        <FormRadio rlabels={trhisRadio} />
                        <Text style={[styles.formText ,{marginBottom: 10}]}>Symptoms Progressed</Text>
                        <FormRadio rlabels={symptomsRadio} />
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={()=> alert('Form')}>
                        <View style={styles.submitBtn}>
                            <Text style={styles.submitTxt}>
                                Submit
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formTitle: {
        fontSize: 30,
        alignSelf: 'center',
        flexDirection: 'row',
        color: 'black',
        borderBottomWidth: 1,
        marginBottom: 23,
    },
    bubbleView: {
        alignSelf: 'center',
        width: screenWidth - 20,
        backgroundColor: 'rgba(76, 135, 230, 0.6)',
        borderRadius: 30,
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 30,
    },
    scroll : {
        paddingTop: 10,
    },
    formBox : {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingLeft: 10,
        height: 40,
        width: 300,
    },
    formContainer : {
        alignSelf: 'center',
    },
    formText : {
        fontSize: 20,
        marginTop: 10, 
        marginBottom: 2,
    },
    formsubText: {
        fontSize: 15,
    },
    submitBtn : {
        marginTop: 30,
        backgroundColor: '#0069D9',
        alignSelf: 'center',
        height: 40,
        width: 100,
        borderRadius: 40,
    },
    submitTxt : {
        fontSize: 25,
        alignSelf: 'center',
        color: 'black',
    },
});

export default FormScreen;