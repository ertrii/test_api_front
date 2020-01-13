import axios from 'axios'

export const API_BASE_URL = process.env.API_BASE_URL
export const TIME_OUT = 5000

// ====================================== //
// API Config                             //
export let API = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token')
  }
})

/**
 * Refresh create API
 */
export const refreshAPI = () => {
  API = axios.create({
    baseURL: API_BASE_URL,
    timeout: TIME_OUT,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    }
  })
}
