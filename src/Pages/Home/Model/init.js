export default initial => {
  initial.states.cars = []
  initial.states.user = {
    name: '',
    lastname: '',
    email: '',
    birthdate: '1990-10-10',
    money: 0,
    company_id: 1,
    weight: 70,
    gender: 'male',
    car_ids: []
  }

  initial.dispatchers = {
    logout: null
  }
}
