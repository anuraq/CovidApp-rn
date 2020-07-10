import React, { Component } from 'react';
import { View,
    Text,
    StyleSheet,
    TouchableOpacity} from 'react-native';
import StateInfo from './StateInfo';
import BotScreenOne from './BotScreenOne';

class BottomInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { screen : 1,};
    }
    render() {
        let condInfo;
        if (this.state.screen === 1) {
          condInfo = <BotScreenOne />;
        } 
        else if(this.state.screen === 2) {
          condInfo = <StateInfo sdata={this.props.sdata}/>;
        }
        return (
            <>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly',height: 80,paddingTop: 20,elevation: 4,backgroundColor: 'white',}}>
                <TouchableOpacity
                    onPress={() => this.setState({screen: 1})}>
                <View style={this.state.screen == 1 ? [styles.clicked, styles.bubCom]:[styles.unclicked, styles.bubCom]}>
                    <Text style={this.state.screen == 1 ? styles.opTextcl:styles.opTextun}>info 1</Text></View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.setState({screen: 2})}>
                <View style={this.state.screen == 2 ? [styles.clicked, styles.bubCom]:[styles.unclicked, styles.bubCom]}>
                    <Text style={this.state.screen == 2 ? styles.opTextcl:styles.opTextun}>info 2</Text></View>
                </TouchableOpacity>
            </View>
            {condInfo}
            </>
        );
    }
}

const styles = StyleSheet.create({
    unclicked: {

    },
    clicked: {
        height: 40,
        width: 70,
        paddingLeft: 10,
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        color: 'white',
        backgroundColor: 'black',
    },
    bubCom : {
        height: 40,
        width: 70,
        paddingLeft: 10,
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    },
    opTextun: {
        fontSize: 20,
    },
    opTextcl: {
        fontSize: 20,
        color: 'white',
    },
});

export default BottomInfo;