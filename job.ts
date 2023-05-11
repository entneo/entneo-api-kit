import axios, { AxiosResponse } from 'axios'
import utils from './utils'

//copied
export const job = (auth: string) => ({
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

  put: async (user: string) => {
    //nothing
  },

  delete: async (user: string) => {
    //delete user request
  },

  update: async (user: string) => {
    //delete user request
  }
})
