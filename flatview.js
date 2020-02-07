import React from 'react';
import {
StyleSheet,
Text,
View,
Image,
// ScrollView,
FlatList
} from 'react-native';

import getReviews from './reviews'


function Review({name,text,avatar}){
  return (
    <View>
      <Image  source={{uri:avatar}} style={styles.avatar} />
//   source={require('./abc.png)}
    <View>
        <Text>
          {name}
          </Text>
          <Text>
            {text}
        </Text>
      </View>
    </View>
  )
}

export default class App extends React.Component {

componentDidMount(){
  console.log("started");
}

renderItem=({item})=>{
  return <Review {...item}/>

}



  render(){
    const reviews=getReviews();

   
    return (
      <View style={styles.container}>
        <FlatList
        
        data={reviews}
        renderItem={this.renderItem}
        />
  
      </View>
    )
  }
}

const styles = StyleSheet.create({
container:{
  flex:1
},
avatar:{
  height:50,
  width:50,
  borderRadius:25
}
});
