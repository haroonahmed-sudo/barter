// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Bottom from './components/bottom'
// export default function App() {
//   return (
//     <View>
//       {/* <Bottom/> */}
//     </View>
//   );
// }


import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login'
import Exchange from './components/Exchange'
import { AntDesign } from '@expo/vector-icons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="login" component={Login} />
//       <Stack.Screen name="exchange" component={Exchange} />

//     </Stack.Navigator>
//   );
// }


function MyDrawer(props) {
  const Mystack = (props) => (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: 'Items',
          headerTitleStyle: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 20,
            marginRight: 60,

          },
          headerLeft: () => (
            <AntDesign
              name="menuunfold"
              size={24}
              color="black"
              style={{ marginLeft: 20 }}
              onPress={() => props.navigation.openDrawer()}
            />
          ),
        }}
      />

    </Stack.Navigator>

  );
  const Drawer = createDrawerNavigator();
  return (
    // drawerContent={(props) => <CustomNavigator {...props} />}
    <Drawer.Navigator >
      <Drawer.Screen
        name="Home1"
        component={Mystack}
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="exchange"
        component={Exchange}
        options={{
          title: 'MyBarters',
        }}
      />

    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}