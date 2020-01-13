import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'redity'
import { HomeStyled } from './Home.style'
import { Icon } from '@aventura_tech/advance-erp-web-components/lib/atoms'

function Pages ({ logout }) {
  return (
    <HomeStyled>
      <h1>Welcome</h1>
      <p>Template vs. 1.0.0</p>
      <div title='Logout'>
        <Icon name='close' onClick={logout} />
      </div>
    </HomeStyled>
  )
}

Pages.propTypes = {
  logout: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  logout: dispatch.logout
})

export default connect('home', false, mapDispatchToProps)(Pages)
