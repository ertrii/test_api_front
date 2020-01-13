import React from 'react'
import { create } from 'react-test-renderer'
import Loading from '../../src/Components/Loading'

describe('Loading Component', () => {
  it('Expect message', () => {
    const root = create(<Loading />).root
    expect(root.props.children).toBe('Loading...')
  })
})
