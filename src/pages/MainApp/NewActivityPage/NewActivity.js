import React, { useState, useEffect, useRef, useContext } from 'react'
import { View, Text, SafeAreaView, Alert } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import { Timer } from 'react-native-element-timer';
import Button from '../../../components/Button/Button'
import styles from './NewActivity.styles'
import Distance from '../../../functions/Distance'
import HandleData from '../../../functions/HandleData';
//import SendActivity from '../../../functions/SendActivity';

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
        setSpeed((meters / time).toFixed(2))
        console.log('sa')
    }, [time])


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
        setMeters(0);
        setSpeed(0);
        setCoords([]);
        setMeters(0);
    }

    function handleActivityStop() {
        timerRef.current.stop();
        HandleData(meters,speed,time)
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
            setMeters((meters) => (meters + Distance(coords[coords.length - 1].latitude, coords[coords.length - 1].longitude, coords[coords.length - 2].latitude, coords[coords.length - 2].longitude)))
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
                <Polyline
                    coordinates={coords}
                    strokeColor="#34ee34"
                    strokeWidth={6}
                />
            </MapView>
            <View style={styles.dataContainer}>
                <View style={styles.data}>
                    <Text style={styles.Text}>METER  {meters}</Text>
                    <Text style={styles.Text}>SPEED   {speed} m/s</Text>
                    <View style={styles.timerContainer}>
                        <Text style={styles.Text}>TIMER   </Text>
                        <Timer ref={timerRef}
                            onTimes={e => { setTime(e) }}
                        />
                    </View>
                </View>
                <View style={{ flex: 1 }}>

                </View>
            </View>
            <View style={styles.buttonContainer}>
                {!hasStarted == true ?
                    <Button label='Start Activity' theme='start' onPress={handleActivityStart} />
                    : <Button label='Stop Activity' theme='stop' onPress={handleActivityStop} />
                }
            </View>
        </SafeAreaView>
    )
}
