import React from 'react'
import { StyleSheet } from 'react-native'
import SignIn from './pages/SignIn'
import SoilSenseF from './pages/SoilSense 1'
import SoilSenseS from './pages/SoilSense 2'
import SoilSenseT from './pages/SoilSense 3'
import SignUp from './pages/SignUp'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase/app';
import TemperatureLevel from './pages/Temperature'
import HumidityLevel from './pages/Humidity'
import LightingLevel from './pages/Lighting'
import SensorLocation from './pages/SensorLocation'
import MaxWaterLevel from './pages/MaxWater'
import WaterPump from './pages/WaterPump'
import CurrencyFormatting from './pages/CurrencyFormatting'
import Sensors from './pages/Sensors'
// import Auth from './pages/Auth'

const App = () => {


  // const [jwt, setJwt] = useState({
  //   jwt: '',
  //   loading: true
  // })

  // const newJWT = (jwt) => {
  //   setJwt({
  //     jwt: jwt
  //   });
  // }  

  //   if (!jwt.jwt) {
  //     return <Auth newJWT={newJWT}/>
  //   }
  var firebaseConfig = {
    apiKey: 'AIzaSyBmMQzZDPK8WoRFsXZwEikglgPh8fdbRfU',
    authDomain: 'moonlit-premise-268014.firebaseapp.com',
    databaseURL: 'https://project-483449585526.firebaseio.com',
    projectId: 'moonlit-premise-268014'
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }


  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CurrencyFormatting">
        {/* <Stack.Screen name="SoilSenseF" component={SoilSenseF} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Temperature" component={TemperatureLevel} />
        <Stack.Screen name="HumidityLevel" component={HumidityLevel} />
        <Stack.Screen name="LightingLevel" component={LightingLevel} />
        <Stack.Screen name="MaxWaterValue" component={MaxWaterLevel} />
        <Stack.Screen name="SensorLocation" component={SensorLocation} />
        <Stack.Screen name="WaterPump" component={WaterPump} /> */}
        <Stack.Screen name="CurrencyFormatting" component={CurrencyFormatting} />
        <Stack.Screen name="Sensors" component={Sensors} />
        {/* <Stack.Screen name="SoilSenseS" component={SoilSenseS} />
        <Stack.Screen name="SoilSenseT" component={SoilSenseT} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
})

export default App
