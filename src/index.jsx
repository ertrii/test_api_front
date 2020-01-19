/* eslint-disable no-console */
import React from 'react'
import { render } from 'react-dom'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'

import App from './App'

if ('serviceWorker' in navigator) {
  const registration = runtime.register()
  registration.then(() => {
    console.log('Service worker registration succeeded')
  })
    .catch(err => {
      console.error('Service worker registration failed:', err)
    })
} else {
  console.warn('Service workers are not supported.')
}

render(<App />, document.getElementById('app'))
