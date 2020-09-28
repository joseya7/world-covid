import { CHANGE_CASES_TYPES } from '../actions/types'
const initialState = {
  casesTypes: 'cases',
}
export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CASES_TYPES:
      return {
        ...state,
        casesTypes: action.payload,
      }
    default:
      return state
  }
}
