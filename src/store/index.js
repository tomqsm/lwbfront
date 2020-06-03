import Vue from 'vue'
import Vuex from 'vuex'
import axiosAuth from './../functions/axios-auth';
import axios from 'axios';
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    email: null,
    formData: null,
    users: 'Loading...',
  },
  mutations: {
    authUser(state, userData) {
      state.email = userData.email
      state.idToken = userData.idToken
    },
    setUsers(state, users1) {
      console.log('SEETING', users1)
      state.users = users1
    },
    removeUserMut(state) {
      state.users.shift()
    },
    clearAuthData(state) {
      state.idToken = null
    }
  },
  actions: {
    signUp({ commit, dispatch }, formData) {
      axiosAuth.post(":signUp?key=" + process.env.VUE_APP_FIREBASE_API_KEY, {
        email: formData.email,
        password: formData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log('recieved form: ', formData)
          console.log(res)
          commit('authUser', {
            idToken: res.data.idToken,
            email: res.data.email,
            formData: formData
          })
          const expiresOn = new Date(new Date().getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('idToken', res.data.idToken)
          localStorage.setItem('email', res.data.email)
          localStorage.setItem('expiresOn', expiresOn)
          dispatch('storeForm')
        }).catch(error => console.log(error));
    },
    signIn({ commit, dispatch }, authData) {
      axiosAuth
        .post(
          ":signInWithPassword?key=" + process.env.VUE_APP_FIREBASE_API_KEY,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
        )
        .then(res => {
          console.log(res)
          commit('authUser', {
            idToken: res.data.idToken,
            email: res.data.email
          })
          dispatch('setLogoutTimer', res.data.expiresIn)
          const expiresOn = new Date(new Date().getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('idToken', res.data.idToken)
          localStorage.setItem('email', res.data.email)
          localStorage.setItem('expiresOn', expiresOn)
          router.push({ name: 'Dashboard' })
        })
        .catch(error => console.log(error));
    },
    tryAutoLogin({ commit }) {
      const idToken = localStorage.getItem('idToken')
      console.log(`from local storage ${idToken}`)
      if (idToken) {
        const expiresOn = localStorage.getItem('expiresOn')
        const hasExpired = new Date() > expiresOn
        console.log(`has expired: ${hasExpired}`)
        if (!hasExpired) {
          const email = localStorage.getItem('email')
          console.log(`committing xxx ${email}`)
          commit('authUser', { idToken: idToken, email: email })
        }
      }
    },
    setLogoutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData')
      }, expirationTime * 1000)
    },
    fetchUsers({ commit, state }) {
      if (!state.idToken) {
        console.log('no token found, must login')
        return
      }
      axios.get(
        // "https://us-central1-lwb-system.cloudfunctions.net/webApi/api/v1/ext/users?page=1"
        "https://lwb-system.firebaseio.com/users.json?auth=" + state.idToken
      )
        .then(response => {
          console.log('fetching users ')
          const data = response.data
          const users = []
          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
          }
          commit('setUsers', users)
          console.log(users)
        })
        .catch(error => console.log(error));
    },
    storeForm({ state }) {
      // if (!localStorage.getItem('idToken', true)) {
      if (!state.idToken) {
        return
      }
      const payload = state.formData
      console.log('payload:', payload)
      axios.post("https://lwb-system.firebaseio.com/users.json?auth=" + state.idToken, payload)
        .then(res => {
          console.log(res)
        })
        .catch(error => console.log(error))
    },
    logout({ commit }) {
      console.log('tries to logout')
      commit('clearAuthData')
      localStorage.removeItem('expiresOn')
      localStorage.removeItem('idToken')
      localStorage.removeItem('email')
      router.replace({ name: 'Home' })
    },
    removeUser({ commit }) {
      // const self = this
      this.interval1 = setInterval(function () {
        console.log('calling remove user')
        commit('removeUserMut')
      }, 2000)

    }
  },
  getters: {
    getusers: (state) => {
      return state.users
    },
    isAuthenticated: (state) => {
      // let tokenFromLocalStorage = localStorage.idToken
      // console.log('yyy', tokenFromLocalStorage)
      return state.idToken != null && state.idToken != undefined && state.idToken.length > 0
    },
    authUser: (state) => {
      return state.email
    }
  },
  modules: {
  }
})
