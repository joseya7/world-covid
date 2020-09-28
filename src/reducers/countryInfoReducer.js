import { GET_COUNTRY_INFO, GET_COUNTRY_TABLE } from '../actions/types'

const initialState = {
  countryInfo: {
    countryMapCenter: [24.80746, 2.4796],
    countryMapZoom: 2,
    countryName: 'global',
    countryFlagURL: 'global',
  },
  countryTable: [],
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_INFO:
      return {
        ...state,
        countryInfo: action.payload,
      }
    case GET_COUNTRY_TABLE:
      console.log(action.payload)
      return {
        ...state,
        countryTable: action.payload,
      }
    default:
      return state
  }
}
