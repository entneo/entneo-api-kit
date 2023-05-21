import axios from 'axios'
import { utils } from './utils'

export const status = (auth: string) => ({
  check: async (reason = 'mspn-api is ready') => {
    try {
      await axios.get(`${utils.env.baseUrl}/status`, utils.withHeaders(auth))
      return `\x1b[32m${reason} on ${utils.env.baseUrl} \x1b[0m\n`
    } catch (error) {
      return `\x1b[31mentneo-api is not ready on ${utils.env.baseUrl} \x1b[0m\n`
    }
  },

  summary: () => {
     //provides updated detailed summary of all services
   }
})
