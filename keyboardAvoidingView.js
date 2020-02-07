
import React from 'react'

import {
StyleSheet,
Text,
View,
KeyboardAvoidingView,
Switch,
TextInput
} from 'react-native';


export default class App extends React.Component {

state={
    input:'sdfghjkl',
    showInput:false
}

handleToggle=()=>{
    this.setState((state)=>({
        showInput:!state.showInput
    }))
}

handleChange=(input)=>{
    this.setState((state)=>({
          input
    }))
}


  render(){
const {input,showInput} = this.state
    return (
      <View style={styles.container}>
      
      <KeyboardAvoidingView behaviour="padding"  >

       <Switch
       value={showInput}
       onValueChange={this.handleToggle}       
       />
{showInput===true&&(
    <TextInput
    value={input}
    onChange={this.handleChange}    
    
    
    />
)}

</KeyboardAvoidingView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
container:{
  flex:1
}
});
