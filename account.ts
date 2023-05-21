import axios, { AxiosResponse } from 'axios'
import { utils, as } from './utils'
//todo clean up response mapper and use globally

export const account = (auth: string) => ({
  /**
   * gets user data by named cookie
   * this cookie is not a validator and should never be used as one, its an alternative to username
   */
  get: async (cookie: string) => {
    try {
      const { data, status } = await axios.get(`${utils.env.baseUrl}/account/${cookie}`, utils.withHeaders(auth))
      return as.response({ data, status }, 'accountGet')
    } catch (error: AxiosResponse | any) {
      return as.response({ data: error.response.data, status: error.response.status }, 'accountGet')
    }
  },

  put: async (user: string) => {
    //nothing
  },

  delete: async (user: string) => {
    //delete user request
  }
})
