import React, { useState, useEffect } from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet'
import './Map.css'
import 'leaflet/dist/leaflet.css'

import ShowDataOnMap from './ShowDataOnMap'

function Map({ center, zoom, caseTypes }) {
  const [mapCountries, setMapCountries] = useState([])

  //전체 각각의 나라마다 확진자, 완치자, 사망자 수 (Array)
  //맨 처음 Rendering 할 때만 사용됨.
  useEffect(() => {
    const getCountriesData = async () => {
      const res = await fetch('https://disease.sh/v3/covid-19/countries')
      const data = await res.json()

      setMapCountries(data)
    }
    getCountriesData()
  }, [])

  return (
    <div className="map">
      <LeafletMap
        center={center}
        zoom={zoom}
        maxZoom={4}
        minZoom={2}
        
        // maxBounds={[
        //   [
        //     //south west
        //     [40.712, -74.227],
        //     //north east
        //     [40.774, -74.125],
        //   ],
        // ]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ShowDataOnMap data={mapCountries} casesType={caseTypes} />
        {/* {showDataOnMap(mapCountries, caseTypes)} */}
      </LeafletMap>
    </div>
  )
}

export default Map
