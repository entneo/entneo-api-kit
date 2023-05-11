const utils = {
  env: {
    baseUrl: 'http://localhost:2011'
  },
  withHeaders: (auth: string) => {
    return { headers: { Authorization: auth } }
  }
}

export default { ...utils }
