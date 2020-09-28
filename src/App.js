import React, { Fragment } from 'react'
import './App.css'

import 'leaflet/dist/leaflet.css'

import { Provider } from 'react-redux'
import store from './store'

import Main from './components/Main'

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Main />
      </Fragment>
    </Provider>
  )
}

export default App
