import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MapDirectionsRenderer from './MapDirectionsRenderer';

const containerStyle = {
  width: '1500px',
  height: '800px',
  margin: 'auto'
};

const center = {
  lng: -0.575,
  lat: 54.250
};

function MyComponent() {
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const places = [
    {latitude:54.05119,longitude:-1.70597},
    {latitude:54.04889,longitude:-1.70413},
    {latitude:54.04446,longitude:-1.70771},
    {latitude:54.04115,longitude:-1.70835},
    {latitude:54.03521,longitude:-1.70634},
    {latitude:54.03164,longitude:-1.70523},
    {latitude:54.02517,longitude:-1.70509},
    {latitude:54.02417,longitude:-1.70196},
    {latitude:54.01982,longitude:-1.70131},
    {latitude:54.00951,longitude:-1.6965},
    {latitude:54.0142,longitude:-1.71006},
    {latitude:54.00809,longitude:-1.72475},
    {latitude:53.99362,longitude:-1.71632},
    {latitude:54.00171,longitude:-1.75684},
    {latitude:54.01606,longitude:-1.76242},
    {latitude:54.02819,longitude:-1.75321},
    {latitude:54.03196,longitude:-1.74892},
    {latitude:54.03314,longitude:-1.74413},
    {latitude:54.03681,longitude:-1.73823},
    {latitude:54.04151,longitude:-1.72638},
    {latitude:54.04423,longitude:-1.7086},
    {latitude:54.04702,longitude:-1.70589},
    {latitude:54.05169,longitude:-1.7043}
    //...
  ]

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      <MapDirectionsRenderer places={places} travelMode="DRIVING" />
     </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
