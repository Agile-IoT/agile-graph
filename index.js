// grafana stuff
'use strict'
const axios = require('axios');
const debug = require('debug-levels')('agile-graph');
let data = {
  name: 'influx',
  type: 'influxDB',
  url: 'http://agile-data:8086',
  access: 'proxy',
  isDefault: true
}

const PORT = process.env.GF_SERVER_PORT || '3000'

axios({
  method: 'POST',
  url: 'http://admin:admin@127.0.0.1:' + PORT + '/api/datasources',
  data: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
}).then(function (response) {
  debug.log(response);
}).catch(function (error) {
  debug.error(error);
})
