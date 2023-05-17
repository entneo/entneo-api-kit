import { responseMaps, responseType } from './data'

const utils = {
  env: {
    baseUrl: 'http://localhost:2011'
  },

  withHeaders: (auth: string) => {
    return { headers: { Authorization: auth } }
  },

  asResponse: <T>(obj: AnyObject, schema: responseType) => {
    const response: AnyObject = responseMaps[schema]
    obj.forEach((element: string) => {
      response[element] = element
    })
    return response as T
  },

  asArray: (response: axiosRes | [axiosRes]) => {
    return Array.isArray(response) ? response : [response]
  }
}

export default { ...utils }
