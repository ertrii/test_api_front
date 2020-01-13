import React from 'react'
import PropTypes from 'prop-types'
import { LoadingStyled } from './Loading.style'

function Loading ({ children }) {
  return (
    <LoadingStyled>
      {children}
    </LoadingStyled>
  )
}

Loading.propTypes = {
  children: PropTypes.node
}

Loading.defaultProps = {
  children: 'Loading...'
}

export default Loading
