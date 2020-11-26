import axios from 'axios'
import jwtDecode from "jwt-decode";

// namespaced: true,
const state = {
  token: null,
  user: null
}

const mutations = {
  setToken(state, token) {
    state.token = token
    localStorage.setItem('token', JSON.stringify(token))
    axios.defaults.headers.common['Authorization'] = `Bearer ${token.access}`
  },
  removeToken(state) {
    state.token = null
    state.user = null
    localStorage.removeItem('token')
  },
  setUser(state, user) {
    state.user = user
  }
}

const getters = {
  userID: (state) => jwtDecode(state.token).user_id,
  user: (state) => state.user
}

const actions = {
  async getUser({commit}) {
    const response = await axios.get(`/api/roster/users/detail/${getters.userID}/`)
    commit('setUser', response.data)
  },
  async login({commit}, credentials) {
    const response = await axios.post('/api/token_auth/token/', credentials)
    commit('setToken', response.data)
  },
  logout({commit}) {
    commit('removeToken')
  }
}



export default {
  state,
  getters,
  actions,
  mutations,
}
