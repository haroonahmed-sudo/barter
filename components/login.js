import React, { useState } from 'react'
import { View, Text, Image, Modal } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import firebase from '../config'
import { Entypo } from '@expo/vector-icons';
const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [email1, setEmail1] = useState('')
    const [pass1, setPass1] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [modal, setModal] = useState(false)
    const Loginn = () => {
        const auth = firebase.auth()
        auth.signInWithEmailAndPassword(email, pass).then(cred => {
            alert('You Are LoggedIn')
            navigation.navigate('exchange')
            setEmail('')
            setPass('')
        }).catch(err => {
            alert(err)
        })
    }

    const Signup = () => {
        const auth = firebase.auth()
        if (pass1 == confirmPass) {
            auth.createUserWithEmailAndPassword(email1, pass1).then(cred => {
                const db = firebase.firestore()
                db.collection('users').add({
                    name,
                    address,
                    number,
                    email: email1,
                    password: pass1
                }).then(res => {
                    alert("Signup Successfully")
                    navigation.navigate('exchange')
                    setNumber('')
                    setName('')
                    setAddress('')
                    setPass1('')
                    setEmail1('')
                    setConfirmPass('')
                    setModal(false)
                })
            })
        }
        else {
            alert("Password is incorrect")
        }
    }

    return (
        <View style={{ display: 'flex', alignItems: 'center' }}>

            <Modal visible={modal}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Entypo name="squared-cross" size={35} color="#483D8B" style={{ marginTop: 10 }} onPress={() => setModal(false)} />
                    <TextInput
                        label="Enter Your Name"
                        value={name}
                        onChangeText={text => setName(text)}
                        style={{ width: 300, marginTop: 18 }}
                    />
                    <TextInput
                        label="Enter Your Number"
                        value={number}
                        onChangeText={text => setNumber(text)}
                        style={{ width: 300, marginTop: 18 }}
                    />
                    <TextInput
                        label="Enter Your Address"
                        value={address}
                        onChangeText={text => setAddress(text)}
                        style={{ width: 300, marginTop: 18 }}
                    />
                    <TextInput
                        label="Enter Your Email"
                        value={email1}
                        onChangeText={text => setEmail1(text)}
                        style={{ width: 300, marginTop: 18 }}
                    />
                    <TextInput
                        label="Enter Your Password"
                        value={pass1}
                        onChangeText={text => setPass1(text)}
                        style={{ width: 300, marginTop: 18 }}
                    />
                    <TextInput
                        label="Confirm Password"
                        value={confirmPass}
                        onChangeText={text => setConfirmPass(text)}
                        style={{ width: 300, marginTop: 18 }}
                    />
                    <Button mode="contained" onPress={Signup} style={{ marginTop: 15, width: 200 }}>
                        Signup
            </Button>
                </View>

            </Modal>

            {/* <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4Hc0RWC6ZUtxfZ3FWrARuW8-dG5uCLkjSA&usqp=CAU'}} style={{width:200,height:200}} width='300' height='300'/> */}
            <Text style={{ fontSize: 30,marginTop:10 }}>Barter</Text>
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={{ width: 300, marginTop: 18 }}
            />
            <TextInput
                label="Password"
                value={pass}
                onChangeText={text => setPass(text)}
                style={{ width: 300, marginTop: 18 }}
            />
            <Button mode="contained" style={{ marginTop: 15, width: 200 }} onPress={Loginn}>
                Login
            </Button>
            <Button mode="contained" onPress={() => setModal(true)} style={{ marginTop: 15, width: 200 }}>
                Signup
            </Button>
        </View>
    )
}
export default Login