import axios, { AxiosError, AxiosResponse } from 'axios'
import { utils } from '../utils'

export const mentor = (auth: string) => ({
  /**
   * gets user data by named cookie
   * this cookie is not a validator and should never be used as one, its an alternative to username
   */
  get: async (cookie: string) => {
    try {
      const { data, status } = await axios.get(`${utils.env.baseUrl}/account/${cookie}`, utils.withHeaders(auth))
      return { data, status }
    } catch (error: AxiosResponse | any) {
      return { data: error.response.data, status: error.response.status }
    }
  },

  put: async (user: any) => {
    //nothing
  }
})
