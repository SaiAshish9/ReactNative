import React from 'react';
import {
StyleSheet,
Text,
View,

} from 'react-native';

import {Ionicons} from '@expo/vector-icons'
// npm i react-native-vector-icons

export default class App extends React.Component {


  render(){
    const reviews=getReviews();

   
    return (
      <View style={styles.container}>
       <Ionicons name='ios-pizza' color='red' /> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
container:{
  flex:1
}
});
