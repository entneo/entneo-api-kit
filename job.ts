import axios, { AxiosResponse } from 'axios'
import { utils, as } from './utils'
import { AnyObject, EntneoInit } from './types/index'

//copied
export const job = (req: EntneoInit) => ({
  /**
   * gets user data by named cookie
   * this cookie is not a validator and should never be used as one, its an alternative to username
   */
  get: async (ref: string) => {
    try {
      if (ref.length > 10) {
        //a way to check if job is 3rd party list
        return as.response(await axios.get(`${req.apiUrl}/${ref}`, utils.withHeaders(req.auth)), 'ok') //change the auth
      } else {
        return as.response(await axios.get(`${req.apiUrl}/reep${ref}`, utils.withHeaders(req.auth)), 'ok')
      }
    } catch (error: AxiosResponse | any) {
      return as.errorResponse(error)
    }
  },

  getSome: async (ref: string, advances?: AnyObject) => {
    try {
      if (advances != undefined) {
        advances.q = ref
        return as.response(await axios.get(`${utils.env.jobListing}`, { ...advances }), 'ok')
      } else {
        return as.response(await axios.get(`${req.apiUrl}/reep${ref}`, utils.withHeaders(req.auth)), 'ok')
      }
    } catch (error: AxiosResponse | any) {
      return as.errorResponse(error)
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
