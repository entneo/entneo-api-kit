import { as } from './utils'
import { mentor } from './mentor'
import { account } from './account'
import { job } from './job'
import { status } from './statuses'
import { service } from './service'
import { EntneoInit, axiosRes } from './types/index'

export const entneoRequests = (request: EntneoInit) => ({
  index: () => {
    return 'null'
  },

  status: status(request),
  account: account(request),
  mentor: mentor(request),
  job: job(request),
  service: service(request)
})

export const entneoMethods = {
  isOkRes: (response: axiosRes | [axiosRes]) => {
    return as.array(response).every(element => {
      return parseInt(element.status.toString().charAt(0)) === 2
    })
  }
}
