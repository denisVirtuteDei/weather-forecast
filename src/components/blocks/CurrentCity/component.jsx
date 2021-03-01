import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserGeolocationRequest } from '../../../actions/geolocation'


export const CurrentCity = (props) => {

    const geolocation = useSelector(state => state.geolocation.userGeolocation);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!geolocation.city)
            dispatch(getUserGeolocationRequest());
    }, [])

    return (
        <div >
            <div style={{ fontSize: 24 }}>
                {geolocation.city || 'City'}
            </div>
            <div style={{ fontSize: 20 }}>
                {geolocation.region || 'Region'}
            </div>
        </div>
    )
}