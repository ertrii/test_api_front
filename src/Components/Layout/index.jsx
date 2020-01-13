import React from 'react'
import PropTypes from 'prop-types'
import { LayoutStyled } from './Layout.style'

// Configure your structure and style
function Layout ({ children }) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
