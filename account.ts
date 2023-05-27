import axios, { AxiosResponse } from 'axios'
import { utils, as } from './utils'

export const account = (auth: string) => ({
  /**
   * gets user data by named cookie
   * this cookie is not a validator and should never be used as one, its an alternative to username identifier
   */
  get: async (cookie: string) => {
    try {
      return as.response(await axios.get(`${utils.env.baseUrl}/account/${cookie}`, utils.withHeaders(auth)), 'ok')
    } catch (error: AxiosResponse | any) {
      return as.errorResponse(error)
    }
  },

  put: async (user: string) => {
    //nothing
  },

  delete: async (user: string) => {
    //delete user request
  }
})
