import { responseMaps, responseType } from './data'
import { AnyObject, axiosRes } from './types/index'

const utils = {
  env: {
    jobListing: 'https://some url'
  },

  withHeaders: (auth: string) => {
    return { headers: { Authorization: auth } }
  }
}

//transformers
const as = {
  response: (obj: AnyObject, schema: responseType) => {
    const response: AnyObject = responseMaps[schema]
    obj.forEach((element: string) => {
      //todo breaks on inactive api, cus res is undefined, fix
      response[element] = obj[element]
    })
    return response as axiosRes
  },

  errorResponse: (error: AnyObject) => {
    return as.response(error, 'error')
  },

  array: (param: axiosRes | [axiosRes]): [any] => {
    return Array.isArray(param) ? param : [param]
  },

  object: (param: any | AnyObject): AnyObject => {
    return Object.keys(param).length > 0 ? param : { x: param }
  }
}

export { utils, as }
