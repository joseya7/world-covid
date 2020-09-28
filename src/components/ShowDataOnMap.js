import React from 'react'
import { Circle, Popup } from 'react-leaflet'
import numeral from 'numeral'
import { connect } from 'react-redux'
import { getCountryInfoFromMap } from '../actions/countryInfoActions'

const casesTypeColors = {
  cases: {
    hex: '#CC1034',
    rgb: 'rgb(204, 16, 52)',
    half_op: 'rgba(204, 16, 52, 0.5)',
    multiplier: 800,
  },
  recovered: {
    hex: '#7dd71d',
    rgb: 'rgb(125, 215, 29)',
    half_op: 'rgba(125, 215, 29, 0.5)',
    multiplier: 1200,
  },
  deaths: {
    hex: '#fb4443',
    rgb: 'rgb(251, 68, 67)',
    half_op: 'rgba(251, 68, 67, 0.5)',
    multiplier: 2000,
  },
}

const ShowDataOnMap = ({ data, casesType = 'cases', getCountryInfoFromMap }) =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      onclick={(e) => {
        getCountryInfoFromMap(country.country)
      }}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <h2 className="info-name" style={{ textAlign: 'center' }}>
            {country.country}
          </h2>
          <h4 className="info-confirmed">
            총 확진자: {numeral(country.cases).format('0,0')}
          </h4>
          <h4 className="info-recovered">
            총 완치자: {numeral(country.recovered).format('0,0')}
          </h4>
          <h4 className="info-deaths">
            총 사망자: {numeral(country.deaths).format('0,0')}
          </h4>
        </div>
      </Popup>
    </Circle>
  ))
export default connect(null, { getCountryInfoFromMap })(ShowDataOnMap)
