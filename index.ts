import { as } from './utils'
import { mentor } from './mentor'
import { account } from './account'
import { job } from './job'
import { status } from './statuses'

export const entneoRequests: AnyObject = (auth: any) => ({
  index: () => {
    return 'null'
  },

  status: status(auth),
  account: account(auth),
  mentor: mentor(auth),
  job: job(auth)
})

export const entneoMethods: AnyObject = {
  isOkRes: (response: axiosRes | [axiosRes]) => {
    as.array(response).forEach(element => {
      if (parseInt(element.status.toString().charAt(0)) === 2) return true
      console.log('Request was unsuccessful: ' + element.status)
      return false
    })
  }
}
