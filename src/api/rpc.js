import axios from 'axios'

class Rpc {
  constructor(database) {
    this.db = database
    console.log('rpc args ', database)
    this.http = axios.create()
  }

  async rpc(url, params) {
    try {
      let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Content-Length': params.length
      }
      let res = await axios.post(url, { headers: headers, params: params })
      return res
    } catch (err) {
      console.error('err rpc', err)
      return err
    }
  }
}

export default Rpc