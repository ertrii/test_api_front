import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'redity'
import TreeImg from '../../Assets/img/tree.jpg'
import { SessionStyled, FormLogin, Label, Img, Message } from './Session.style'
import { Button, Input, Icon } from '@aventura_tech/advance-erp-web-components/lib/atoms'

function Pages ({ message, login }) {
  const handleSubmit = ev => {
    ev.preventDefault()
    const form = ev.target
    login({
      username: form.username.value,
      password: form.password.value
    })
  }
  return (
    <SessionStyled>
      <FormLogin onSubmit={handleSubmit}>
        <Img src={TreeImg} alt='Logo' />
        <div>
          <Label htmlFor='username'>Username</Label>
          <Input name='username' required id='username' placeholder='Username' />
        </div>
        <div>
          <Label htmlFor='password'>Password</Label>
          <Input name='password' required id='passoword' type='password' placeholder='Password' />
        </div>
        {
          message && <Message><Icon name='warning circle' /><span>{message}</span></Message>
        }
        <Button type='submit' maxWidth='100%'>Log In</Button>
      </FormLogin>
    </SessionStyled>
  )
}

Pages.propTypes = {
  message: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired
}

const mapStateToProps = states => ({
  message: states.message
})

const mapDispatchToProps = dispatch => ({
  login: dispatch.login
})

export default connect('session', mapStateToProps, mapDispatchToProps)(Pages)
