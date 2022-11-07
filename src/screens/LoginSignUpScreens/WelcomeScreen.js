
import React from 'react'
import { StyleSheet,Text,View, Image, TouchableOpacity} from "react-native"
import logo from '../../../assets/logo.png';

import  { colors, hr80 } from '../../globals/style';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}> WELCOME </Text>
      
        <View style={styles.logoout}>
            <Image source={logo} style ={styles.logo}/>
        </View>
        <View style={hr80} /> 
       <Text style={styles. text}> Life Isn't Perfect But Your Outfit Can Be...!!</Text>
       <View style={hr80} /> 

<View style={styles.btnout}>
<TouchableOpacity onPress={() => navigation.navigate('signup')}>
    <Text style={styles.btn}>Sign up</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('login')}>
    <Text style={styles.btn}>Log In</Text>
</TouchableOpacity>



</View>

</View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c7b299',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

title: {
    
    fontSize: 40,
    color: '#800000',
    textAlign: 'center',
    marginVertical:8,
    fontWeight:'240',
},
logoout : {
    width: '100%',
    height: '58%',
    elevation: 10,
    alignItems: 'center',
},
logo: {
    width: '100%',
    height: '105%',
    elevation: 10,
},
text:{
    
    fontSize: 22,
    width:'90%',
    color:`#8b0000`,
    textAlign:'center',

},
btnout:{
    flexDirection:'row',
},

btn: {
    fontSize: 20,
    textAlign:'center',
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: '700',
    backgroundColor: '#cd853f',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
}

    
})


export default WelcomeScreen


