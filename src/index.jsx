/* eslint-disable no-console */
import React from 'react'
import { render } from 'react-dom'

import App from './App'

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  const registration = require('serviceworker-webpack-plugin/lib/runtime').register()
  registration.then(() => {
    console.log('Service worker registration succeeded')
  })
    .catch(err => {
      console.error('Service worker registration failed:', err)
    })
}

render(<App />, document.getElementById('app'))
