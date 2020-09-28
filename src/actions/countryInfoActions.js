import { GET_COUNTRY_INFO, GET_COUNTRY_TABLE } from './types'
import { sortData } from '../util'

export const getCountryInfo = (event, newInputValue) => async (dispatch) => {
  const engName = newInputValue && newInputValue.engName

  if (engName === 'global') {
    console.log('globalTriggered')
    const url = 'https://disease.sh/v3/covid-19/all'
    const res = await fetch(url)
    const data = await res.json()

    const newValues = {
      countryName: engName,
      countryInfo: data,
      countryFlagURL: 'global',
      countryMapCenter: [34.80746, -40.4796],
      countryMapZoom: 3,
    }

    dispatch({
      type: GET_COUNTRY_INFO,
      payload: newValues,
    })
  } else {
    const url = `https://disease.sh/v3/covid-19/countries/${engName}`
    const res = await fetch(url)
    const data = await res.json()

    const newValues = {
      countryName: engName,
      countryInfo: data,
      countryFlagURL: data.countryInfo.flag,
      countryMapCenter: [data.countryInfo.lat, data.countryInfo.long],
      countryMapZoom: 3,
    }
    console.log(newValues)
    dispatch({
      type: GET_COUNTRY_INFO,
      payload: newValues,
    })
  }
}

export const getCountryInfoFromMap = (engName) => async (dispatch) => {
  console.log('mapClick Triggered', engName)
  if (engName === 'global') {
    console.log('globalTriggered')
    const url = 'https://disease.sh/v3/covid-19/all'
    const res = await fetch(url)
    const data = await res.json()

    const newValues = {
      countryName: engName,
      countryInfo: data,
      countryFlagURL: 'global',
      countryMapCenter: [34.80746, -40.4796],
      countryMapZoom: 2,
    }

    dispatch({
      type: GET_COUNTRY_INFO,
      payload: newValues,
    })
  } else {
    const url = `https://disease.sh/v3/covid-19/countries/${engName}`
    const res = await fetch(url)
    const data = await res.json()

    const newValues = {
      countryName: engName,
      countryInfo: data,
      countryFlagURL: data.countryInfo.flag,
      countryMapCenter: [data.countryInfo.lat, data.countryInfo.long],
      countryMapZoom: 3,
    }
    console.log(newValues)
    dispatch({
      type: GET_COUNTRY_INFO,
      payload: newValues,
    })
  }
}

export const getCountryInfoFromTable = () => async (dispatch) => {
  try {
    fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
        let sortedData = sortData(data)
        console.log(sortedData)
        dispatch({
          type: GET_COUNTRY_TABLE,
          payload: sortedData,
        })
      })
  } catch (err) {
    console.log(err)
  }
}
