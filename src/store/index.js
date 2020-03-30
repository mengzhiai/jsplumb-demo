/*
 * @Author: your name
 * @Date: 2019-12-02 10:07:12
 * @LastEditTime: 2019-12-02 10:56:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-jsplumb\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nodeList:null
  },
  mutations: {
    nodeListData(state,data){
      state.nodeList = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
