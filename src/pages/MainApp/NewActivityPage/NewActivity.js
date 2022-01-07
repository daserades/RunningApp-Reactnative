import React, { useState, useEffect, useRef, useContext } from 'react'
import { View, Text, SafeAreaView, Alert } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import { Timer } from 'react-native-element-timer';
import Button from '../../../components/Button/Button'


export default function NewActivity() {


    const [currentLongitude, setCurrentLongitude] = useState(36.9)
    const [currentLatitude, setCurrentLatitude] = useState(30.7)
    const [coords, setCoords] = useState([])
    const [meters, setMeters] = useState(0)
    const [time, setTime] = useState(0)
    const [speed, setSpeed] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    const timerRef = useRef(null);


    useEffect(() => {
        Geolocation.getCurrentPosition(
            position => {

                setCurrentLatitude(position.coords.latitude);
                setCurrentLongitude(position.coords.longitude);
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
        );
    }, [handleUserLocationChange])



    function handleActivityStart() {
        setHasStarted(true)
        timerRef.current.start();
        setCoords([]);
        setMeters(0);
    }

    function handleActivityStop() {
        timerRef.current.stop();
        setCoords([]);
        setSpeed((meters / time).toFixed(2))


        setMeters(0);
        setHasStarted(false)
    }
 

    function handleUserLocationChange(coordinate) {
        if (hasStarted) {
            setCoords((oldCoords) => [...oldCoords, {
                latitude: coordinate.latitude,
                longitude: coordinate.longitude,
            }])
        }
        else {
            setCoords(() => [{
                latitude: coordinate.latitude,
                longitude: coordinate.longitude,
            }])
        }

        if (coords.length >= 2) {
            setMeters((meters) => (meters + getDistanceFromLatLonInKm(coords[coords.length - 1].latitude, coords[coords.length - 1].longitude, coords[coords.length - 2].latitude, coords[coords.length - 2].longitude)))
        }
       
    }

    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c * 1000; // Distance in km *1000
        var d = Math.floor(d);
        return d;
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView style={{ flex: 1 }}
                region={{
                    latitude: currentLatitude,
                    longitude: currentLongitude,
                    latitudeDelta: 0.0122,
                    longitudeDelta: 0.0121,
                }}
                showsUserLocation={true}
                userLocationPriority='high'
                userLocationFastestInterval={1000}
                onUserLocationChange={(cor) => handleUserLocationChange(cor.nativeEvent.coordinate)}
            >
                {!hasStarted == false ? (<Polyline
                    coordinates={coords}
                    strokeColor="#34ee34" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={6}
                />) : null}
            </MapView>
            <View style={{ flex: 1 }}>
                <View>
                    {!hasStarted == false ? <Text>{meters}</Text> : null}
                    <Timer ref={timerRef}
                        onTimes={e => { setTime(e) }}
                    />
                </View>
                <View style={{ marginHorizontal: 100 }}>
                    {!hasStarted == true ?
                        <Button label='start' onPress={handleActivityStart} />
                        : <Button label='stop' theme='outline' onPress={handleActivityStop} />
                    }
                    
                </View>
            </View>
        </SafeAreaView>
    )
}
