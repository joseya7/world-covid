import { CHANGE_CASES_TYPES } from './types'
export const changeCasesTypes = (event) => (dispatch) => {
  dispatch({
    type: CHANGE_CASES_TYPES,
    payload: event,
  })
}
