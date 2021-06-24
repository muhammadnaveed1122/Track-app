import React, { Component, useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, {Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_KEY = 'AIzaSyBR2_b8a4Ea233gWog-X-PsdtBE7HdhCIw';


const Home = () =>{
  const [state, setState] = useState({
    pickupCords: {
      latitude: 31.5666,
      longitude: 74.291,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationCords: {
      latitude: 31.5766,
      longitude: 74.291,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  })
  const mapRef = useRef()

const { pickupCords, droplocationCords} = state

  return(
    <View style={styles.container}>
    <MapView
    ref={mapRef}
    style={StyleSheet.absoluteFill}
    initialRegion={pickupCords}
  >

  <Marker
   coordinate={pickupCords}
   />
   <Marker
   coordinate={droplocationCords}
   />
  <MapViewDirections
   
    origin={pickupCords}
    destination={droplocationCords}
    apikey={GOOGLE_MAPS_KEY}
    strokeWidth={3}
    strokeColor="hotpink"
    optimizeWaypoints ={true}
    onReady={result =>{
      mapRef.current.fitToCoordinates(result.fitToCoordinates, {
      edgePadding: {
        right: 30,
        bottom: 380,
        left: 30,
        top: 100,
      }
    })
    }}
  />
</MapView>
    </View>
  );

  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

export default Home;
