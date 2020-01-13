import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Wrapper } from '@aventura_tech/advance-erp-web-components'
import './Register'
import Route from './Route'
import { ConfigStyle } from '../../config/Config.style'

function Pages () {
  return (
    <Wrapper>
      <ConfigStyle>
        <Route />
      </ConfigStyle>
    </Wrapper>
  )
}

export default hot(Pages)
