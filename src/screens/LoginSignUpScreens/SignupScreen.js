import React, { useState } from 'react'
import { ScrollView, StyleSheet,Text,TextInput, TouchableOpacity ,View} from "react-native"
import { titles, colors, btn1, hr80 } from '../../globals/style'
import { AntDesign } from '@expo/vector-icons'; 
import {Octicons } from '@expo/vector-icons'; 
import {MaterialCommunityIcons } from '@expo/vector-icons'; 
import {FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 


const SignupScreen = ({navigation}) => {
    const [namefocus, setNamefocus] = useState('false');
    const [ emailfocus, setEmailfocus] = useState(false);
    const [ phonefocus, setPhonefocus] = useState(false);
    const [passwordfocus, setPasswordfocus] = useState(false);
    const [ showpassword, setShowPassword] = useState(false);
    const [ showcpassword, setShowcPassword] = useState(false);
    const [cpasswordfocus, setcPasswordfocus] = useState(false);

  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.head1}>Sign Up</Text>
        <View style={styles.inputout}>
        <AntDesign name="user" size={24} color={namefocus === true ? colors.text1 : colors.text2} />
            <TextInput style={styles.input} placeholder="Name" 
               onFocus={() => {
                setPhonefocus(false)
                setNamefocus(true)
                setEmailfocus(false)
                setPasswordfocus(false)
                setShowPassword(false)
            }} 
            />
        </View>







    
    {/* Name ends */}

        <View style={styles.inputout}>
        
        <MaterialIcons name="email" size={24} color={emailfocus === true ? colors.text1 : colors.text2} />
            <TextInput style={styles.input} placeholder="Email Address"
             onFocus={() => {
                setPhonefocus(false)
                setNamefocus(false)
                setEmailfocus(true)
                setPasswordfocus(false)
                setShowPassword(false)
            }} />
        </View>

{/* Email ends */}

<View style={styles.inputout}>
<Feather name="smartphone" size={24}  color={phonefocus === true ? colors.text1 : colors.text2} />
            <TextInput style={styles.input} placeholder="Phone Number" 
                onFocus={() => {
                setPhonefocus(true)
                setNamefocus(false)
                setEmailfocus(false)
                setPasswordfocus(false)
                setShowPassword(false)
            }} 
            />
        </View>



{/* password starts */}

        <View style={styles.inputout}>
          <MaterialCommunityIcons name="lock-outline" size={24} color={passwordfocus === true ? colors.text1 : colors.text2} />
            <TextInput style={styles.input} placeholder="Password"
               
            secureTextEntry ={showpassword === false ?  true:false} 
            onFocus={() => {
                setPhonefocus(false)
                setNamefocus(false)
                setEmailfocus(false)
                setPasswordfocus(true)
                setShowPassword(false)
            }} 
            />
            <Octicons name={showpassword == false ? "eye-closed" : "eye"} size={24} color="black" onPress={() => setShowPassword(!showpassword)} />
        </View>

{/* password ends */}

{/* conform password starts */}

        
        <View style={styles.inputout}>
          <MaterialCommunityIcons name="lock-outline" size={24} color={cpasswordfocus === true ? colors.text1 : colors.text2} />
            <TextInput style={styles.input} placeholder="Confirm Password"
               
            secureTextEntry ={showcpassword === false ?  true:false}  
            onFocus={() => {
                setPhonefocus(false)
                setNamefocus(false)
                setEmailfocus(false)
                setPasswordfocus(false)
                setShowPassword(false)
                setcPasswordfocus(true)
            }} 
            />
            <Octicons name={showcpassword == false ? "eye-closed" : "eye"} size={24} color="black" onPress={() => setShowcPassword(!showcpassword)} />
        </View>

{/* confirm password ends */}


        <Text style={styles.address}> Please enter your address</Text>
        <View style={styles.inputout}>
            <TextInput style={styles.input1} placeholder=" Enter your Address" />
        </View>

        <TouchableOpacity style={btn1}>
         <Text style={{ color: colors.col1 ,fontSize: titles.btntxt, fontWeight: "bold"}} >Sign Up</Text>
        </TouchableOpacity>

        {/*<Text style={styles.forgot}> Forgot Password ?</Text> */}
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
        <Text style={styles.signup}>Already have an account ?
        <Text style={{ color: colors.text1}}  onPress={() => navigation.navigate('login')}> Sign In</Text>
        </Text>
        </View>
     </ScrollView>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
   // justifyContent: 'center',
    alignItems: 'center',
    marginTop:60 ,
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
    marginBottom:10,
    fontSize: 25,
  
  },
  gf: {
   flexDirection: 'row',
  },
  gficon: {
    backgroundColor:'white',
    width: 50,
    marginHorizontal:10,
    borderRadius: 10,
    padding:10,
    alignItems: 'center',
    elevation: 20,
  },
 signup:{
     color: colors.text1,
  },
  address: {
    fontSize: 18,
    color: colors.text2,
    textAlign: 'center',
    marginTop: 20,
  }
})
export default SignupScreen