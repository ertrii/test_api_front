export default (initial, settings) => {
  const token = localStorage.getItem('token')

  initial.states = {
    isSession: token !== null,
    message: '',
    interval: false
  }

  initial.dispatchers = {
    login: null,
    logout: null,
    verifySession: null,
    runExpire: null
  }

  settings.dispatchers = {
    runExpire: {
      now: true
    }
  }

  settings.publicStates = true
  settings.publicDispatchers = true
}
