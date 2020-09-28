import React from 'react'
import { connect } from 'react-redux'
import './Main.css'

//Components
import Header from './Header'
import Map from './Map'
import Stats from './Stats'
import Table from './Table'
import Footer from './Footer'
import Prevention from './Prevention'

//leaflet rendering
import 'leaflet/dist/leaflet.css'

const Main = ({
  countryInfo: {
    countryName,
    countryInfo,
    countryFlagURL,
    countryMapCenter,
    countryMapZoom,
  },
  casesType,
}) => {
  return (
    <div>
      <div className="container">
        <Header />
        <Stats />

        <Map
          caseTypes={casesType}
          center={countryMapCenter}
          zoom={countryMapZoom}
          // casesType="cases"
          // country={countryName}
        />

        <Prevention />
      </div>

      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => ({
  countryInfo: state.country.countryInfo,
  casesType: state.type.casesTypes,
})

export default connect(mapStateToProps)(Main)
