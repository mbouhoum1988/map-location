import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

import * as drivers from '../../test_api_response.json'

function Map(props) {
   return (
    <div>
      {!props.isMarkerShown ? 
        <GoogleMap 
              zoom={4} 
              center={{ 
                        lat: 39.011902, 
                        lng: -98.484245         
                      }}
              >
              {drivers.users.map((driver) =>(
              <Marker                       
                 key={driver.user.id} 
                 position={{ 
                    lat: driver.user.latlng.lat, 
                    lng: driver.user.latlng.lng 
                  }} 
              />
              ))}
         </GoogleMap>
         : 
          <GoogleMap 
                zoom={props.zoom} 
                center={{
                          lat:props.lat, 
                          lng: props.lng
                        }
                      }
              >
              {drivers.users.map((driver) =>(
           <Marker                       
                key={driver.user.id} 
                position={{ 
                  lat: driver.user.latlng.lat, 
                  lng: driver.user.latlng.lng 
               }} 
              />
              ))}
           </GoogleMap>
    }
    </div>
  )               
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Maps(props) {
    return (
        <div className="map">
        <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAff_wMo0dnJ7dOag7rEQ2MEcE6Y8tfXLA&v=3.exp&libraries=geometry,drawing,places`} 
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            isMarkerShown = {props.isMarkerShown}
            lat = {props.lat}
            lng = {props.lng}
            zoom = {props.zoom}
        />
      </div>
    )
}

