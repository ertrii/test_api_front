import moment from 'moment'
import { navigate } from '@reach/router'
import {
  // API,
  refreshAPI
} from '../../../../config/App'
import { isEmpty } from './resolve'

export default async (payload, states, header) => {
  const { login, logout, runExpire } = header.actions
  const { message, isSession, interval } = states

  if (login) {
    const res = isEmpty(payload)
    if (res) {
      message(res)
      return
    }

    if (payload.username !== 'admin' || payload.password !== '123456') {
      message('User invalidate!')
      return
    }
    // const res = await API.post('/login', payload)
    // const expireIn = res.data.result.expire_in - res.data.result.created_at // Esto la API me deberá retornar
    const expireIn = 9999 // Time Total for expire (s)
    const access_token = '123456asdqwe'
    const currentUnix = moment().unix()

    localStorage.setItem('token', 'Bearer ' + access_token)
    localStorage.setItem('expireIn', currentUnix + expireIn)
    message.unseen('')
    refreshAPI()
    isSession(true)
    header.dispatchers.runExpire()
  }

  if (logout) {
    localStorage.removeItem('token')
    localStorage.removeItem('expireIn')
    isSession(false)
    refreshAPI()
    navigate('/')
    header.dispatchers.runExpire()
  }

  if (runExpire) {
    if (interval()) {
      clearInterval(interval())
    }
    let expireIn = localStorage.getItem('expireIn')
    if (expireIn === null) return

    expireIn = parseInt(expireIn)
    const intervalForExpire = setInterval(() => {
      const currentUnix = moment().unix()
      if (expireIn < currentUnix) {
        header.dispatchers.logout()
      }
    }, 1000)

    interval(intervalForExpire)
  }
}
