import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/round-borders.css'

import { GeopifyWrapper } from './style'

import { getUserGeolocationRequest, setCurrentCityInfo } from '@/actions/geolocation'

import { GEOPIFY_API_KEY } from '@/constants'

const CurrentCity = () => {
  const dispatch = useDispatch()
  const geolocation = useSelector(state => state.geolocation)

  const [inputCityInfo, setInputCityInfo] = useState(null)

  useEffect(() => {
    if (!geolocation.isInfoLoaded) {
      dispatch(getUserGeolocationRequest())
    } else {
      setInputCityInfo({ ...geolocation })
    }
  }, [])

  const onPlaceSelect = value => {
    if (value === null) {
      setInputCityInfo(value)
    } else if (value.properties.formatted !== geolocation.formatted) {
      dispatch(setCurrentCityInfo({ ...value.properties }))
    }
  }

  return (
    <GeopifyWrapper>
      <GeoapifyContext apiKey={GEOPIFY_API_KEY}>
        <GeoapifyGeocoderAutocomplete
          type='city'
          placeholder='Enter address here'
          placeSelect={onPlaceSelect}
          value={inputCityInfo && inputCityInfo.city}
        />
      </GeoapifyContext>
    </GeopifyWrapper>
  )
}

export default CurrentCity
