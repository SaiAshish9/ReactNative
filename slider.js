import React from 'react';
import {
StyleSheet,
Text,
View,
Slider
} from 'react-native';


export default class App extends React.Component {

componentDidMount(){
  console.log("started");
}

state={
  value:0
}

  render(){
    return (
      <View style={styles.container}>
         <Text>
           Slider
         </Text>
         <Slider
         value={this.state.value}
         onValueChange={(value)=>this.setState(()=>({value}))}
         step={1}
         minimumValue={-100}
         maximumValue={100}
         width={200}
         />
         <Text>
           {this.state.value}
         </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#FFF',
  alignItems:'center',
  justifyContent:'center'
}
});
