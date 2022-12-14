import React, { useState } from 'react'
import { ScrollView, StyleSheet,Text,TextInput, TouchableOpacity ,View} from "react-native"
import { titles, colors, btn1, hr80 } from '../../globals/style'
import { AntDesign } from '@expo/vector-icons'; 
import {Octicons } from '@expo/vector-icons'; 
import {MaterialCommunityIcons } from '@expo/vector-icons'; 
import {FontAwesome5 } from '@expo/vector-icons'; 

const LoginScreen = ({navigation}) => {
    const [ emailfocus, setEmailfocus] = useState(false);
    const [passwordfocus, setPasswordfocus] = useState(false);
    const [ showpassword, setShowPassword] = useState(false);

  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.head1}>Sign In</Text>
        <View style={styles.inputout}>
        <AntDesign name="user" size={24} color={emailfocus === true ? colors.text1 : colors.text2} />
            <TextInput style={styles.input} placeholder="Email Address"
            onFocus={() => {
                setEmailfocus(true)
                setPasswordfocus(false)
                setShowPassword(false)
            }} />
        </View>
        <View style={styles.inputout}>
          <MaterialCommunityIcons name="lock-outline" size={24} color={passwordfocus === true ? colors.text1 : colors.text2} />
            <TextInput style={styles.input} placeholder="Password"
                onFocus={() => {
                setEmailfocus(false)
                setPasswordfocus(true)
                }}

            secureTextEntry ={showpassword === false ?  true:false}
        />
            <Octicons name={showpassword == false ? "eye-closed" : "eye"} size={24} color="black" onPress={() => setShowPassword(!showpassword)} />
        </View>
        <TouchableOpacity style={btn1}>
         <Text style={{ color: colors.col1 ,fontSize: titles.btntxt, fontWeight: "bold"}} >Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.forgot}> Forgot Password ?</Text>
        <Text style={styles.or}> OR</Text>
        <Text style={styles.gftxt}> Sign In With</Text>


        <View style={styles.gf}>
           <TouchableOpacity>
            <View style={styles.gficon}>
            <AntDesign name='google' size={24} color="#EA4335" /></View>
           </TouchableOpacity>

           <TouchableOpacity>
            <View style={styles.gficon}>
            <FontAwesome5 name='facebook-f' size={24} color="#426782" /></View>
           </TouchableOpacity>
        </View>
        <View style={hr80}></View>
        <Text style={styles.signup}>Don't have an account ?
        <Text style={{ color: colors.text1}}  onPress={() => navigation.navigate('signup')}> Sign Up</Text>
        </Text>
        </View>
        </ScrollView>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    //justifyContent: 'center',
    alignItems: 'center',
    marginTop:180 ,
  },
  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    textAlign: 'center',
    marginVertical: 10,
  
  },
  inputout: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
    backgroundColor: colors.col1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignSelf: 'center',
    elevation: 20,
  },

  input: {
    fontSize: 18,
    marginLeft: 10,
    width: '80%',
  },
  forgot: {
    color: colors.text2,
    marginTop: 20,
    marginBottom: 10,
  },
  or: {
    color: colors.text1,
    marginVertical: 10,
    fontWeight: 'bold',
  
  },
  gftxt: {
    color: colors.text2,
    marginVertical: 10,
    fontSize: 25,
  
  },
  gf: {
   flexDirection: 'row',
  },
  gficon: {
    backgroundColor:'white',
    width: 50,
    margin:10,
    borderRadius: 10,
    padding:10,
    alignItems: 'center',
    elevation: 20,
  }
})
export default LoginScreen