import React from 'react'
import { create } from 'react-test-renderer'
import '../../src/App/Register'
import Session from '../../src/Pages/Session'

describe('Session', () => {
  it('Testing Basic', () => {
    const root = create(<Session />).root
    const button = root.findByType('button')
    expect(button.props.children[1]).toBe('Log In')
  })
})
