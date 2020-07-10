import React, { Component } from 'react';
import { View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView} from 'react-native';
import BottomInfo from './BottomInfo';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {data: null}
    }

    componentDidMount(){
      fetch('https://covid-su.herokuapp.com/', {method: 'GET'})
      .then(response => response.json())
      .then(json =>  this.setState({data: json.data}))
      .catch(err => alert(err))
    }

    render() {
        return (
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
            <TouchableOpacity
              onPress={()=> this.props.navigation.navigate('Form')}>
              <View style={styles.testTitle}>
                <Text style={styles.testText}>Take the Test</Text>
              </View>
            </TouchableOpacity>
            <BottomInfo sdata={this.state.data}/>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    testTitle: {
      height: 180,
      backgroundColor: '#e1e1e1',
    },
    testText: {
      fontSize: 35,
      alignSelf: 'center',
      paddingTop: 60,
    },
  });

export default HomePage;