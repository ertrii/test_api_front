import React from 'react'
import { create } from 'react-test-renderer'
import '../../src/App/Register'
import Home from '../../src/Pages/Home'

describe('Home', () => {
  it('First Test', () => {
    const root = create(<Home />).root
    const h1 = root.findByType('h1')
    const p = root.findByType('p')
    expect(h1.children[0]).toBe('Welcome')
    expect(p.children[0]).toBe('Template vs. 1.0.0')
  })
})
