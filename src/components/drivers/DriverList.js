import React from 'react';

import * as drivers from '../../test_api_response.json'

function DriverList(props) {

        return (
            <div className="drivers-list">
                <h1>List of drivers</h1>
                {drivers.users.map((driver, index) =>(
                   <li 
                        className="driver-info"     
                        data-index={index} 
                        key={index}
                        index={index} 
                        id={driver.user.id}
                        onClick={props.driverPosition}
                    >                      
                        {driver.user.first_name} {driver.user.last_name} 
                   </li>
                ))}       
            </div>
        )
    }


export default DriverList
