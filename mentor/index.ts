import axios, { AxiosResponse } from 'axios'
import { utils } from '../utils'
import { EntneoInit } from '../types/index'

export const mentor = (req: EntneoInit) => ({
  /**
   * gets user data by named cookie
   * this cookie is not a validator and should never be used as one, its an alternative to username
   */
  get: async (cookie: string) => {
    try {
      const { data, status } = await axios.get(`${req.apiUrl}/account/${cookie}`, utils.withHeaders(req.auth))
      return { data, status }
    } catch (error: AxiosResponse | any) {
      return { data: error.response.data, status: error.response.status }
    }
  },

  put: async (user: any) => {
    //nothing
  }
})
