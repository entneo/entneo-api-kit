type responseType = 'accountGet' | 'accountPut' | 'accountDelete' | 'error' | 'ok'

const responseMaps = {
  error: {
    data: {},
    status: {}
  },
  ok: {
    data: {},
    status: {}
  },
  accountGet: {
    data: {},
    status: {}
  },
  accountPut: {
    data: {},
    status: {}
  },
  accountDelete: {
    data: {},
    status: {}
  }
}

export { responseMaps, responseType }
