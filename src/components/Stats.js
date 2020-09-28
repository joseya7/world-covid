import React, { useEffect, useState } from 'react'
import InfoBox from './InfoBox'
import { connect } from 'react-redux'
import { changeCasesTypes } from '../actions/casesTypeAction'

import './Stats.css'

const Stats = ({
  countryInfo: {
    countryName,
    countryInfo,
    countryFlagURL,
    countryMapCenter,
    countryMapZoom,
  },
  changeCasesTypes,
  casesType,
}) => {
  const [initCountryInfo, setInitCountryInfo] = useState({})
  const [casesTypes, setCasesTypes] = useState('cases')

  //전체 세계 총 확진자, 완치자, 사망자 수
  //첫 InfoBox Rendering에 사용됨.
  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then((response) => response.json())
      .then((data) => {
        setInitCountryInfo(data)
      })
  }, [])

  return (
    <div className="app__stats">
      <InfoBox
        title="확진자"
        isRed
        confirmed
        onClick={(e) => changeCasesTypes('cases')}
        flag={countryFlagURL}
        active={casesType === 'cases'}
        cases={
          !countryInfo ? initCountryInfo.todayCases : countryInfo.todayCases
        }
        total={initCountryInfo.cases}
        country={countryName}
      />
      <InfoBox
        title="완치자"
        recover
        onClick={(e) => changeCasesTypes('recovered')}
        active={casesType === 'recovered'}
        flag={countryFlagURL}
        cases={initCountryInfo.todayRecovered}
        total={initCountryInfo.recovered}
        country={countryName}
      />
      <InfoBox
        title="사망자"
        isRed
        death
        onClick={(e) => changeCasesTypes('deaths')}
        active={casesType === 'deaths'}
        flag={countryFlagURL}
        cases={initCountryInfo.todayDeaths}
        total={initCountryInfo.deaths}
        country={countryName}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  countryInfo: state.country.countryInfo,
  casesType: state.type.casesTypes,
})

export default connect(mapStateToProps, { changeCasesTypes })(Stats)
