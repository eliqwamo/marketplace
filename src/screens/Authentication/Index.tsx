import React, {useState, useEffect} from 'react'
import styles from '../../services/styles'
import {auth} from '../../services/firebase-config'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Alert
} from 'react-native'
import colors from '../../services/colors'

const Authentication = () => {


    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const login = async() => {
        setIsLoading(true)
        try {
            await signInWithEmailAndPassword(auth,email,password)
            .then(user => {
                console.log(user);  
                setIsLoading(false) 
            })
        } catch (error) {
            setIsLoading(false)
            Alert.alert("Login", error.message)
        }
    }

  return (
    <View style={styles.container}>

        <View style={styles.logo_container}>
            <Text style={styles.title}>Market<Text style={{color:'#ffffff'}}>Place</Text></Text>
        </View>

        <View style={styles.btn_container}>
            <TouchableOpacity style={styles.btn} onPress={() => setIsLogin(true)}>
                <Text style={styles.btn_txt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsLogin(false)} style={[styles.btn, {backgroundColor:colors.bone}]}>
                <Text style={styles.btn_txt}>Signup</Text>
            </TouchableOpacity>
        </View>

        {
            isLogin ? (
            <>
            <View style={styles.form_container}>

                <Text style={styles.sub_title}>LOGIN</Text>

                <TextInput
                    placeholder='Email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    style={styles.input}
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                />

                <TextInput
                    autoCapitalize='none'
                    keyboardType='default'
                    secureTextEntry={true}
                    placeholder='Password'
                    style={styles.input}
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                />

                {
                    isLoading ? (<>
                        <ActivityIndicator color={colors.blue} size='large' />
                    </>) : (<>
                    <TouchableOpacity style={styles.login_btn} onPress={login}>
                        <Text style={styles.btn_txt}>Login</Text>
                    </TouchableOpacity>
                    </>)
                }

            </View>
            </>) : 
            (<>
            <View style={styles.form_container}>
                <Text style={styles.title}>SIGNUP</Text>
            </View>
            </>)
        }

      
    </View>
  )
}


export default Authentication