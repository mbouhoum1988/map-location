import React, { Component } from 'react';
import Maps from './components/map/Maps'
import DriverList from './components/drivers/DriverList';

import * as drivers from './test_api_response.json'


import './components/styles/style.css';

class Body extends Component {

  state = {
    lat: '',
    lng: '',
    isMarkerShown: false,
    zoom: 4
  }

  driverPosition = (e) => {
    
    e.preventDefault();
    let arr = drivers.users
    const index = e.target.dataset.index;
    let lat = arr[index].user.latlng.lat;
    let lng = arr[index].user.latlng.lng;
         
        this.setState({
                isMarkerShown: true,
                zoom: 7,
                lat: lat,
                lng: lng
            }, () => { 
                    console.log(this.state.lat)            
                    console.log(this.state.lng)            
                    console.log(this.state.isMarkerShown)            
                    console.log(this.state.zoom)            
                }
            ) 
}
render() {
  return (
    <div className="Body">
       <Maps 
            isMarkerShown={this.state.isMarkerShown} 
            zoom={this.state.zoom} 
            lat={this.state.lat} 
            lng={this.state.lng} 
        />
       <DriverList driverPosition={(e) => this.driverPosition(e)}/>
    </div>
  );
}
}

export default Body;
