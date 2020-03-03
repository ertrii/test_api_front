import React from 'react'
// import PropTypes from 'prop-types'
import Input from '@aventura_tech/advance-erp-web-components/lib/atoms/Input'
import Select from '@aventura_tech/advance-erp-web-components/lib/atoms/Select'

function UserForm () {
  return (
    <form className='user_form'>
      <h2>Usuario</h2>
      <Input placeholder='Nombre' name='name' />
      <Input placeholder='Apellido' name='lastname' />
      <Input placeholder='Email' name='email' />
      <Input placeholder='moneda' name='money' />
      <Select
        placeholder='sexo' options={[
          { label: 'male', value: 'male' },
          { label: 'female', value: 'female' }
        ]}
      />
    </form>
  )
}

UserForm.propTypes = {
  // your props...
}

export default UserForm
