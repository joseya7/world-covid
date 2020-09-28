import React from 'react'

//Redux
import { connect } from 'react-redux'

// Material-UI
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus } from '@fortawesome/free-solid-svg-icons'

//CSS
import './Header.css'

//Redux-state-actions
import { getCountryInfo } from '../actions/countryInfoActions'

import nameTag from '../fixtures/nameTag'

// 번역된 자동완성을 보여주기 위한 객체

const Header = ({ getCountryInfo }) => {
  return (
    <div className="app__header">
      <h1>
        <FontAwesomeIcon icon={faVirus} />
        코로나 세계현황
      </h1>
      {/* <div>{countryInfo.active}</div> */}

      <Autocomplete
        id="combo-box-demo"
        options={nameTag}
        onChange={getCountryInfo}
        getOptionLabel={(option) => option.korName}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            className="inputRounded"
            {...params}
            label="국가를 검색해보세요 "
            variant="outlined"
          />
        )}
      />
    </div>
  )
}

export default connect(null, { getCountryInfo })(Header)
