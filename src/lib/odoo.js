import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios';

const odooLayer = {
    init(db) {
        Vue.use(VueAxios, axios)
        Vue.axios.defaults.baseURL = 'http://localhost:8090'
        this.db = db
    },
    connect(login, password, callback) {
        let params = {
            db: this.db,
            login: login,
            password: password
        }
        let headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Content-Length': params.length
        }
        console.log('http ', this.db)
        Vue.axios.post(
            '/web/session/authenticate',
            { headers: headers, params: params }
        ).then(response => {
            console.log(response)
            callback(response)
        }).catch(error => {
            console.log(error)
            callback(error)
        })
    }
}

export default odooLayer