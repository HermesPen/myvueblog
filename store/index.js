import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/** 状态定义 */
export const state = {
    themeObj: 0
}
export default new Vuex.Store({
    state,
})