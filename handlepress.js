import {
StyleSheet,
Text,
View,
TouchableHighlight,
TouchableNativeFeedback,
TouchableOpacity,
TouchableWithoutFeedback
} from 'react-native';


export default class App extends React.Component {

handlePress=()=>{
    alert('hello')
}

  render(){
    const reviews=getReviews();

//    touchable native feedback
    return (
      <View style={styles.container}>
<TouchableHighlight onPress={this.handlePress} underlayColor='#d4271b'> 
<Text>
    Touchable Highlight
</Text>
</TouchableHighlight>


<TouchableOpacity onPress={this.handlePress} > 
<Text>
    Touchable Opacity
</Text>
</TouchableOpacity>


      </View>
    )
  }
}

const styles = StyleSheet.create({
container:{
  flex:1
}
});
