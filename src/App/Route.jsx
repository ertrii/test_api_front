import React, { lazy, Suspense } from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'
import { connect } from 'redity'
import Loading from '../Components/Loading'
import Layout from '../Components/Layout'
// Private
const Home = lazy(() => import('../Pages/Home'))
// Public
const Session = lazy(() => import('../pages/Session'))
// import Layout from './components/Layout'

/**
 * Public Routes, only visible when there is no session
 */
const Public = () => {
  return (
    <Router>
      <Session path='/' />
    </Router>
  )
}

/**
 * Private Routes, only visible when there a session
 */
const Private = () => {
  return (
    <Router>
      <Home path='/' />
    </Router>
  )
}

const Route = ({ isSession }) => {
  return (
    <Suspense fallback={<Loading />}>
      {!isSession && <Public />}
      {isSession && <Layout><Private /></Layout>}
    </Suspense>
  )
}

Route.prototype = {
  isSession: PropTypes.bool.isRequired
}

const mapStateToProps = states => ({
  isSession: states.isSession
})

export default connect('session', mapStateToProps)(Route)
