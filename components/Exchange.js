import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput, Button, Appbar } from 'react-native-paper';
import firebase from '../config'
import { Entypo,AntDesign } from '@expo/vector-icons';

function HomeScreen(props) {
  const [items, setItems] = useState([])
  useEffect(() => {
    const db = firebase.firestore()
    db.collection('items').onSnapshot(data => {
      setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    })
  }, [])

  return (
    <View>
      <Appbar.Header style={{ backgroundColor: '#fff',marginRight:30  }}>
      <AntDesign
              name="menuunfold"
              size={24}
              color="black"
              style={{ marginLeft: 20 }}
              onPress={() => props.navigation.openDrawer()}
            />
        <Appbar.Content title="Home" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
      </Appbar.Header>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={items}
          renderItem={({ item, index }) => (
            <View style={{ marginTop: 10, textAlign: 'justify' }}>
              <Text >{item.item}</Text>
            </View>

          )}
        />
      </View>
    </View>
  );
}

function SettingsScreen(props) {
  const [item, setItem] = useState('')
  const [desc, setDesc] = useState('')
  const Add = () => {
    const db = firebase.firestore()
    db.collection('items').add({
      item,
      desc
    }).then(result => {
      setItem('')
      setDesc('')
      alert('Added Successfully')
    })



  }
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: '#fff',marginRight:30 }}>
      <AntDesign
              name="menuunfold"
              size={24}
              color="black"
              style={{ marginLeft: 20 }}
              onPress={() => props.navigation.openDrawer()}
            />
        <Appbar.Content title="Home" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
      </Appbar.Header>
    <View style={{ display: 'flex', alignItems: 'center', justifyContent: "center", marginTop: 30 }}>
      <TextInput
        label="Item Name"
        value={item}
        onChangeText={text => setItem(text)}
        style={{ width: 300, marginTop: 18 }}
      />
      <TextInput
        label="Description"
        value={desc}
        onChangeText={text => setDesc(text)}
        style={{ width: 300, marginTop: 18 }}
        multiline={true}
      />
      <Button mode="contained" style={{ marginTop: 15, width: 300, padding: 5 }} onPress={Add}>
        Add Item
            </Button>
    </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Exchangge() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Exchange" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

