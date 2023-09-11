import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    common_value: 0,
    MOBIUS_CONNECTION_CONNECTED: false,
    //VUE_APP_MOBIUS_HOST: '125.132.13.63',

    //VUE_APP_MOBIUS_HOST: '203.253.128.177',
    //VUE_APP_MOBIUS_HOST: 'gcs.iotocean.org',
    VUE_APP_MOBIUS_HOST: '127.0.0.1',
    VUE_APP_MOBIUS_APPROVAL: 'MUV',
    //VUE_APP_MOBIUS_APPROVAL: 'KETI_RTK',
    APPROVAL_LIST: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
