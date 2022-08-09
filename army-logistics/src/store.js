import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      isPrivate: false,
      others: '',
    },
    mutations: {
        getDeployMode (state, payload) {
            state.isPrivate = payload
        },
        anotherRequest (state, payload) {
            state.others = payload
        }
    },
    actions: {
        getDeployMode (context) {
            return new Promise((resolve) => {
                setTimeout(() => console.log('got deploy mode') || resolve(true), 0)
            }).then((resp) => {
                context.commit('getDeployMode', resp)
            })
        },
        anotherRequest (context) {
            return new Promise((resolve, reject) => {
                setTimeout(() => reject('something wrong...'))
            }).then((resp) => {
                console.log({resp})
            }).catch((err) => {
                context.commit('anotherRequest', console.log({err}) || err)
            })
        }
    }
  })

export default store