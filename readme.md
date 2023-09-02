# entneo-api-kit

Entneo REST API Requests Kit

## Usage

- Sign up and create an account authentication key on [auth.entneo.app](https://api.entneo.app/create/auth)

1. Import and create an instance of the kit in your project

```javascript
import { entneoApiKit } from '@entneo-api-kit'

const api = entneoApiKit('your-authentication-key')
```

2. Call the Entneo API using any available interface

```javascript
const { data, status } = await api.account.get('account-reference')
```

- Read the API documentation on [auth.entneo.app](https://api.entneo.app/documentation)
