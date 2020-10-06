import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import logo from './logo.svg';
import './App.css';

const containerStyle = {
  width: '1500px',
  height: '800px',
  margin: 'auto'
};

const center = {
  lng: -0.575,
  lat: 51.250
};

function MyComponent() {
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    //const bounds = new window.google.maps.LatLngBounds();
    //map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
