import React from 'react'
import {View, Text, Stylehseet, Image, TextInput, TouchableOpacity} from 'react-native'
export default class Loginscreen extends React.Component{
    constructor(){
        super ()
        this.state = {
            EmailID: '',
            Password: ''
        }
    }
    login = async (email,Password) =>{
        if (email && Password){
            try{
              const response = await firebase.auth.signInEithEmailAndPassword(email,Password)
              if (response){
                 this.props.navigation.navigate("Transaction") 
              }
            }
            catch(error){
                console.log()
            }
        }
    }
    render(){
        return(
            <View>
               <Image source = {require("../assets/booklogo.jpg")} style = {{width: 200, height:200}}></Image>
               <Text style = {{textAlign:"center",fontSize:30}}>Whiley</Text>
               <TextInput style = {styles.login}placeholder = "Email ID" keyboardType = 'email.address' onChangeText = {text=>{this.setState({EmailID: text})}}></TextInput>
               <TextInput style = {styles.login}placeholder = "Password" secureTextEntry = {true} onChangeText = {text=>{this.setState({Password: text})}}></TextInput>
               <TouchableOpacity style = {{height: 30, width: 90, borderWidth:1, marginTop: 20, backgroundColor:'green'}} onPress = {()=>{this.login(this.state.EmailID,this.state.Password)}}><Text>Login</Text></TouchableOpacity>
            </View>
        )
    }
}
const styles = Stylesheet.create({
    login:{
        width: 200,
        height: 30,
        borderWidth:1.5,
        fontSize: 20,
        margin: 10,
        backgroundColor: 'blue'
    }
})