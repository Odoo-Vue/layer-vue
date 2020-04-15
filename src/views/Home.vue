<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <br/>
    <p>Please add the param 'cors' to the route in Odoo</p>
    <pre>
      @http.route('/web/session/authenticate', type='json', auth="none", cors="*")
    </pre>
    <button @click="connect()">Connect to Odoo</button>
    <div v-if="response">
      <p>{{ response }}</p>
    </div>
  </div>
</template>

<script>
import odooLayer from '@/lib/odoo'

export default {
  name: 'Home',
  data() {
    return {
      response: false
    }
  },
  methods: {
    connect() {
      odooLayer.connect('admin', 'admin', (response) => {
        this.response = response
      })
    }
  }
}
</script>
