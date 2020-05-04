import Rpc from './rpc'

class Auth extends Rpc {
  constructor(...args) {
    super(args)
  }
  async login(login, password) {
    let response = await super.rpc('/web/session/authenticate', { db: super.db, login: login, password: password })
    console.log('auth login response', response)
    return response
  }
  async logout() {
    let response = await super.rpc('/web/session/destroy', {})
    return response
  }
}

export default Auth