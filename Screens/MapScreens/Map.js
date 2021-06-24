import React from 'react'
import MapView from 'react-native-maps'
import {StyleSheet,Dimensions} from 'react-native'

const height = Dimensions.get('window').height

const Map = () => {
    return(
        <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
            latitude: 31.5666,
            longitude: 74.291,
            latitudeDelta: 0.015,
            longitudeDelta:0.0121
        }}
        >
        <MapView.Marker 
         coordinate={{
            latitude: 31.5666,
            longitude: 74.291,
         }}
         title={"Title 1"}
         description={"Description 1"}
        />
        <MapView.Marker 
         coordinate={{
            latitude: 31.5766,
            longitude: 74.291,
         }}
         title={"Title 2"}
         description={"Description 2"}
        />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map:{
        height
    }
})
export default Map;