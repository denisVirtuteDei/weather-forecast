import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'

import { getUserGeolocationRequest } from '../../../actions/geolocation';

const CurrentCity = (props) => {

    const geolocation = useSelector(state => state.geolocation.userGeolocation);
    const dispatch = useDispatch();



    useEffect(() => {
        if (!geolocation.city)
            dispatch(getUserGeolocationRequest ());
    }, [])

    const onPlaceSelect = value => {
        //setQuery(value);
        console.log(value);
    }


    return (
        <GeoapifyContext apiKey="4d452340ced347708fa6f45256620b3f">
            <GeoapifyGeocoderAutocomplete
                placeholder="Enter address here"
                type='city'
                placeSelect={onPlaceSelect}
                value={geolocation.city}
                //value={query !== null ? query.properties.formatted : ''}
            />
        </GeoapifyContext>
    )
}

export default CurrentCity;

// const CurrentCity = (props) => {

//     const geolocation = useSelector(state => state.geolocation.userGeolocation);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         if (!geolocation.city)
//             dispatch(getUserGeolocationRequest());
//     }, [])

//     return (
//         <Div >
//             <div className='city-div'>
//                 {geolocation.city || 'City'}
//             </div>
//             <div className='region-div'>
//                 {geolocation.region || 'Region'}
//             </div>
//         </Div>
//     )
// }