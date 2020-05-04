import Auth from './auth'

class Odoo {
  constructor(database) {
    this.database = database
    this._auth = new Auth(database)
  }
  async login(username, password) {
    return await this._auth.login(username, password)
  }
}

export default Odoo