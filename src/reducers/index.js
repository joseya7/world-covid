import { combineReducers } from 'redux'
import countryInfoReducer from './countryInfoReducer'
import casesTypesReducer from './casesTypesReducer'
export default combineReducers({
  country: countryInfoReducer,
  type: casesTypesReducer,
})
