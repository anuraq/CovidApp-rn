import React, { Component, useState } from 'react';
import { View,
    Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const symptoms = ['Cough','Sore Throat','Feeling Weakness','Breathing Difficulty','Drowsiness Problem','Pain in Chest','Blood Pressure','Change in Appetide'];

class FormChecks extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
                <Text style={[this.props.sty, {marginBottom: 10}]}>Check Symptoms :</Text>
                {symptoms.map((x, y)=> <CheckRow text={x} key={y} />)}
            </>
        );
    }
}

function CheckRow(props) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    
    return(
        <View style={{flexDirection: 'row',}}>
        <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={() => toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)}
      />
      <Text style={{fontSize: 17, paddingTop: 3,}}>{props.text}</Text>
      </View>
    )
};

export default FormChecks;