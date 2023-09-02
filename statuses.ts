import axios from 'axios'
import { utils } from './utils'
import { EntneoInit } from './types/index'

export const status = (req: EntneoInit) => ({
  check: async (reason = 'entneo-api is ready') => {
    try {
      await axios.get(`${req.apiUrl}/status`, utils.withHeaders(req.auth))
      return `\x1b[32m${reason} on ${req.apiUrl} \x1b[0m\n`
    } catch (error) {
      return `\x1b[31mentneo-api is not ready on ${req.apiUrl} \x1b[0m\n`
    }
  },

  summary: () => {
     //provides updated detailed summary of all services
   }
})
