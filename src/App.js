import React from 'react';
import { GoogleMap, LoadScript, Polyline, Marker, InfoWindow } from '@react-google-maps/api';
import { FaAnchor } from 'react-icons/fa';

const containerStyle = {
  width: '1500px',
  height: '1000px',
  margin: 'auto'
};

const center = {
  lng: -1.000,
  lat: 50.000
};

function MyComponent() {
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const path1 = [{lat:51.1000000,lng:-1.1000000},{lat:51.2000000,lng:-1.2000000}];
  const path2 = [{lat:51.2000000,lng:-1.2000000},{lat:51.3000000,lng:-1.3000000}];
  const path3 = [{lat:51.3000000,lng:-1.3000000},{lat:51.4000000,lng:-1.4000000}];
  const path4 = [{lat:51.4000000,lng:-1.4000000},{lat:51.5000000,lng:-1.5000000}];
  const path5 = [{lat:51.5000000,lng:-1.5000000},{lat:51.6000000,lng:-1.6000000}];
  const path6 = [{lat:51.6000000,lng:-1.6000000},{lat:51.7000000,lng:-1.7000000}];

  const marker1 = {lat:51.1000000,lng:-1.1000000}
  const marker2 = {lat:51.2000000,lng:-1.2000000}
  const marker3 = {lat:51.3000000,lng:-1.3000000}
  const marker4 = {lat:51.4000000,lng:-1.4000000}
  const marker5 = {lat:51.5000000,lng:-1.5000000}
  const marker6 = {lat:51.6000000,lng:-1.6000000}

  const options = {
    strokeColor: '#FF5000',
    strokeOpacity: 0.8,
    strokeWeight: 5,
    fillColor: '#FF5000',
    fillOpacity: 0.5,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    paths: [],
    zIndex: 1
  };

  return (
    <div>
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        z-index='1'
      >
     <Polyline path={path1} options={options} />
     <Marker position={marker1}>
     { <InfoWindow>
      <div>
      <tr><span><b>Heart Rate </b></span><td>100bpm</td></tr>
      <tr><span><b>Calories </b></span><td>900</td></tr>
      <tr><span><b>Distance </b></span><td>22.00km</td></tr>
      <tr><span><b>Elevation </b></span><td>300m</td></tr>
      <tr><span><b>Elapsed Time</b>&nbsp;&nbsp;&nbsp;</span><td>1:30:00</td></tr>
      <tr><span><b>Device </b></span><td> Garmin </td></tr>
      </div>
      </InfoWindow>}
     </Marker>
     <Polyline path={path2} options={options} />
     <Marker position={marker2} />
     <Polyline path={path3} options={options} />
     <Marker position={marker3} />
     <Polyline path={path4} options={options} />
     <Marker position={marker4} />
     <Polyline path={path5} options={options} />
     <Marker position={marker5} />
     <Polyline path={path6} options={options} />
     <Marker position={marker6} />
     </GoogleMap>
    </LoadScript>
    </div>
  )
}

export default React.memo(MyComponent)
