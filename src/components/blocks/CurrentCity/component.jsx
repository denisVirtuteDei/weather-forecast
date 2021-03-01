import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Div } from './style';

import { getUserGeolocationRequest } from '../../../actions/geolocation'


export const CurrentCity = (props) => {

    const geolocation = useSelector(state => state.geolocation.userGeolocation);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!geolocation.city)
            dispatch(getUserGeolocationRequest());
    }, [])

    return (
        <Div >
            <div className='city-div'>
                {geolocation.city || 'City'}
            </div>
            <div className='region-div'>
                {geolocation.region || 'Region'}
            </div>
        </Div>
    )
}