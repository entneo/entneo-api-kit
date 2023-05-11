import axios from 'axios'
import utils from './utils'
import { mentor } from './mentor'
import { account } from './account'
import { job } from './job'

export const requests = (auth: any) => ({
  index: () => {
    return 'null'
  },

  status: {
    check: async (reason = 'mspn-api is ready') => {
      try {
        await axios.get(`${utils.env.baseUrl}/status`, utils.withHeaders(auth))
        return `\x1b[32m${reason} on ${utils.env.baseUrl} \x1b[0m\n`
      } catch (error) {
        return `\x1b[31mmspn-api is not ready on ${utils.env.baseUrl} \x1b[0m\n`
      }
    }
  },

  account: account(auth),
  mentor: mentor(auth),
  job: job(auth)
})
