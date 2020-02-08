import React, { Component } from 'react'

import {
    Text,
    View,
    StyleSheet
} from 'react-native'

import {AppLoading} from 'expo'


export default class History extends Component{
state={
    ready:false
}

componentDidMount(){
    fetch()
    setTimeout(()=>this.setState(()=>({
        ready:true
    })),2000);

}


render(){

    if(this.state.ready===false){
        return <AppLoading/>
    }

    return(
          <View style={styles.container}>
              <Text>
                  hello world
              </Text>
          </View>
    )
}

}

const styles=StyleSheet.create({
container:{
    display:'flex'
}
})
