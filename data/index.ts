type responseType = 'accountGet' | 'accountPut' | 'accountDelete'

const responseMaps = {
  accountGet: {
    getPayload: ['body'],
    links: ['body', '_links'],
    response: [''],
    statusCode: ['status']
  },
  accountPut: {
    getPayload: ['body'],
    response: [''],
    statusCode: ['status']
  },
  accountDelete: {
    paymentResponse: [''],
    createPayload: ['body'],
    paymentId: ['body', 'id']
  }
}

export { responseMaps, responseType }
