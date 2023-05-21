import { responseMaps, responseType } from './data'

const utils = {
  env: {
    baseUrl: 'http://localhost:2011'
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
      response[element] = element
    })
    return response as T
  },

  array: (param: axiosRes | [axiosRes]) => {
    return Array.isArray(param) ? param : [param]
  },

  object: (param: any | AnyObject) => {
    return Object.keys(param).length > 0 ? param : { 0: param }
  }
}

export { utils, as }
