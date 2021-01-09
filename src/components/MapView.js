import React from 'react';
import {MapContainer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const MapView = () =>{
    return <MapContainer center={{lat: 28.551577915980367, lng:-16.647648296525695}} zoom={13}>

    </MapContainer>
}



export default MapView;