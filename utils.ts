import { responseMaps, responseType } from './data'
import { AnyObject, axiosRes } from './types/index'
import { serviceTemplate } from './schema/templates'

const utils = {
  env: {
    jobListing: 'https://indeed-indeed.p.rapidapi.com/apisearch'//todo implement https://rapidapi.com/indeed/api/indeed https://rapidapi.com/vuesdata/api/indeed-jobs-api/
  },

  withHeaders: (auth: string) => {
    return { headers: { Authorization: auth } }
  }
}

//transformers
const as = {
  response: (obj: AnyObject, schema: responseType) => {
    const response: AnyObject = responseMaps[schema]
    if (obj.data != undefined) {
      obj.forEach((element: string) => {
        response[element] = obj[element]
      })
    } else {
      Object.assign(response, {
        ...serviceTemplate.emptyRequest
      })
    }
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
