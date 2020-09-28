import React, { useEffect } from 'react'
import './Table.css'
import numeral from 'numeral'
import { connect } from 'react-redux'

import { getCountryInfoFromTable } from '../actions/countryInfoActions'

function Table({ countries, getCountryInfoFromTable }) {
  useEffect(() => {
    getCountryInfoFromTable()
  }, [])

  return (
    <div className="table">
      {countries &&
        countries.map((country) => (
          <tr>
            <td>{country.country}</td>
            <td>
              <strong>{numeral(country.cases).format('0,0')}</strong>
            </td>
          </tr>
        ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  countries: state.country.countryTable,
})

export default connect(mapStateToProps, { getCountryInfoFromTable })(Table)
