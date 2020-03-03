import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'redity'
import { HomeStyled } from './Home.style'
import Input from '@aventura_tech/advance-erp-web-components/lib/atoms/Input'
import Button from '@aventura_tech/advance-erp-web-components/lib/atoms/Button'
import { Table } from '@aventura_tech/advance-erp-web-components/lib/molecules'
import UserForm from './UserForm'

const thead = [
  { label: '#' },
  { label: 'Licencia' },
  { label: 'Modelo' }
]

function Pages ({ cars, setCars }) {
  function handleSubmit (ev) {
    ev.preventDefault()
    setCars([...cars, {
      license: ev.target.license.value,
      model: ev.target.model.value
    }])
    ev.target.reset()
    ev.target.license.focus()
  }
  return (
    <HomeStyled>
      <div>
        <h1>Testing API</h1>
      </div>
      <form className='form_car' onSubmit={handleSubmit}>
        <Input name='license' placeholder='Licencia' />
        <Input name='model' placeholder='Modelo' />
        <Button type='submit'>Add Car</Button>
      </form>
      <Table thead={thead} emptyText='agregar un nuevo car'>
        {
          cars.map((car, i) => () => (
            <tr>
              <td>{i + 1}</td>
              <td>{car.license}</td>
              <td>{car.model}</td>
            </tr>
          ))
        }
      </Table>
      <UserForm />
      <div style={{ marginTop: '2em' }}>
        <Button>Guardar</Button>
      </div>
    </HomeStyled>
  )
}

Pages.propTypes = {
  logout: PropTypes.func.isRequired,
  cars: PropTypes.array.isRequired,
  setCars: PropTypes.func.isRequired
}

const mapStateToProps = (states, setStates) => ({
  cars: states.cars,
  setCars: setStates.cars
})

const mapDispatchToProps = dispatch => ({
  logout: dispatch.logout
})

export default connect('home', mapStateToProps, mapDispatchToProps)(Pages)
