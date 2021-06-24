import React, { useState, useEffect, Component } from 'react';

import { Platform,Dimensions, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { MapLocation } from './MapLocation';



const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 31.55525;
const LONGITUDE =  74.2893974;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyBR2_b8a4Ea233gWog-X-PsdtBE7HdhCIw'

class Mapview extends Component {

  constructor(props) {
    super(props);

    // AirBnB's Office, and Apple Park
    this.state = {
      temp: "hello",
      coordinates: [
                {
                  latitude: 37.3317876,
                  longitude: -122.0054812, 
                },
                {
                  latitude: 37.771707,
                  longitude: -122.4053769,
                },
              ],
    };

    this.mapView = null;
    this.updateLocation();
  }

  updateLocation =async  () => {
    let location= await MapLocation();
    this.setState({
      coordinates:[
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        },
        {
          latitude:  31.56555,
          longitude: 74.2893974
        }
      ]
    }, () => {
      console.log("temp => ",this.state.coordinates);
    })
    return
    // try {
    //   let location= await MapLocation();
    //  console.log("location => ",location)
    //  let userlocation = {
    //     latitude: location.coords.latitude,
    //     longitude: location.coords.longitude
    //  }
    //  let newArr = [userlocation , 
    //   {
    //     latitude: 31.5796,
    //     longitude: 74.291,
    //   },
    // ]
    // console.log('newArr => ', newArr)
    //  this.setState({
    //    coordinate:[],
    //    hello: "wow",
    //  }, () => {
    //  console.log("",this.state.temp);
    //      })
    // }catch(e){
    //   alert(e)
    // }
   
  }

  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  }

  render() {
    return (

      <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        showsUserLocation={true}
        showsMyLocationButton = {true}
        style={StyleSheet.absoluteFill}
        ref={c => this.mapView = c}
        onPress={this.onMapPress}
      

      >
      

        {this.state.coordinates.map((coordinate, index) =>
          (
          <View key={index} style={{borderWidth:2, heigth:50, width:50}}>
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
          </View>
          )
          
        )}
        
        {(this.state.coordinates.length >= 2) && (
          <MapViewDirections
            origin={this.state.coordinates[0]}
            waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): []}
            destination={this.state.coordinates[this.state.coordinates.length-1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            optimizeWaypoints={true}
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={result => {
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min.`)

              this.mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: (width / 20),
                  bottom: (height / 20),
                  left: (width / 20),
                  top: (height / 20),
                }
              });
            }}
            onError={(errorMessage) => {
              console.log('GOT AN ERROR');
            }}
          />
          
         )
      }   
      </MapView>

    );
  }
}

export default Mapview;
//  this.state = {
//       coordinates: [
//         {
//           latitude: 37.3317876,
//           longitude: -122.0054812, 
//         },
//         {
//           latitude: 37.771707,
//           longitude: -122.4053769,
//         },
//       ],
//     };