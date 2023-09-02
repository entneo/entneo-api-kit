import axios from 'axios'
import { utils } from './utils'
import { EntneoInit } from './types/index'
import { AnyObject } from './types'

export const service = (req: EntneoInit) => ({
  sendMail: async (content: AnyObject, template = 'default') => {
    try {
      const { data, status } = await axios.post(`${req.apiUrl}/mailer`, { content, template: template }, utils.withHeaders(req.auth))
    } catch (error) {
      return `\x1b[31mentneo-api is not ready on ${req.apiUrl} \x1b[0m\n`
    }
  }
})
