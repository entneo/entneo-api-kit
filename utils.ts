import { responseMaps, responseType } from './data'

const utils = {
  env: {
    baseUrl: process.env.baseApiUrl,
    jobListing: process.env.baseApiUrl
  },

  withHeaders: (auth: string) => {
    return { headers: { Authorization: auth } }
  }
}

//transformers
const as = {
  response: <T>(obj: AnyObject, schema: responseType) => {
    const response: AnyObject = responseMaps[schema]
    obj.forEach((element: string) => {
      response[element] = obj[element]
    })
    return response as T
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
