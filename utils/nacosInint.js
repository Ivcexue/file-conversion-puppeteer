const axios = require('axios')

const {instanceBetaUrl, initRequestUrl, clientBeatInterval} = require('../config')

function nacosInstance() {
  axios({
    url: initRequestUrl,
    method: "POST",
    headers: {
      "content-type": "application/json",
    }
  }).then(res => {
    if (res.data === 'ok') {
      console.log('NOCOS INIT SUCCESS✔')

      setInterval(() => {
        instanceBeat()
      }, clientBeatInterval)

    } else {
      console.log('NOCOS INIT FAIL❌')
    }
  })
}

function instanceBeat() {
  axios({
    url: instanceBetaUrl,
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
  }).then(res => {
    if (res.status === 200) {
      console.log('NOCOS CONNECTION...')
    } else {
      console.log('NOCOS ERRORED...')
    }
  })
}

module.exports = nacosInstance
