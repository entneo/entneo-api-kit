import axios from 'axios'
import utils from './utils'
import { mentor } from './mentor'
import { account } from './account'
import { job } from './job'

export const EntneoRequests = (auth: any) => ({
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

export const EntneoMethods = {
  isOkRes: (response: axiosRes | [axiosRes]) => {
    utils.asArray(response).forEach(element => {
      if (parseInt(element.status.toString().charAt(0)) === 2) return true
      console.log('Request was unsuccessful: ' + element.status)
      return false
    })
  }
}
