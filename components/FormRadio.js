import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

class FormRadio extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    onPress(v) {
        alert(v)
    }

    render() {
        return (
            <RadioForm
                formHorizontal={false}
                animation={true}
>
  {/* To create radio buttons, loop through your array of options */}
  {
    this.props.rlabels.map((obj, i) => (
      <RadioButton labelHorizontal={true} key={i} >
        {/*  You can set RadioButtonLabel before RadioButtonInput */}
        <RadioButtonInput
          obj={obj}
          index={i}
          isSelected={this.state.value3Index === i}
          onPress={(value) => {this.setState({value3Index: value})}}
          borderWidth={1}
          buttonInnerColor={'#000000'}
          buttonOuterColor={this.state.value3Index === i ? '#000' : '#000'}
          buttonSize={10}
          buttonOuterSize={20}
          buttonStyle={{}}
          buttonWrapStyle={{marginLeft: 10}}
        />
        <RadioButtonLabel
          obj={obj}
          index={i}
          labelHorizontal={true}
          onPress={(value) => {this.setState({value3Index: value})}}
          labelStyle={{fontSize: 17, color: 'black'}}
          labelWrapStyle={{}}
        />
      </RadioButton>
    ))
  }  
</RadioForm>
        );
    }
}

const styles = StyleSheet.create({
    
});

export default FormRadio;