import axios from 'axios'
const baseUrl = '/api/users/login'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

export { login, create, setToken }