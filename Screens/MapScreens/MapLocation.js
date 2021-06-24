import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';


export async function MapLocation (){
 
  let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.High});
  console.log(location);
  return location;
  
}


// export default function MapLocation() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   handleMapRegionChange = (mapRegion) => {
//     this.setState({ mapRegion });
//   };

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS === 'android' && !Constants.isDevice) {
//         setErrorMsg(
//           'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
//         );
//         return;
//       }
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }
//       else{
//       this.setState({ hasLocationPermissions: true });
//       //  let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
//       const location = await Location.getCurrentPositionAsync({});
//       this.setState({ locationResult: JSON.stringify(location) });
//       // Center the map on the location we just fetched.
//       this.setState({
//         mapRegion: {
//           latitude: location.coords.latitude,
//           longitude: location.coords.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         },
//       });
//     }})();
//   }, []);

//   let text = 'Waiting..';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     return JSON.stringify(location);
//   }

//   return (
//     <View style={styles.container}>

//     <MapView
//           style={styles.mapStyle}
//           region={this.state.mapRegion}
//           onRegionChange={this.handleMapRegionChange}
//         />
//     </View> 
//   );
// }

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   //   padding: 20,
//   // },
//   paragraph: {
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   mapStyle: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   }
// });