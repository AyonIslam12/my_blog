import Vue from "vue";
import Vuex, { Store } from "vuex";
Vue.use(Vuex);

import blog from "./modules/blog";

const store = new Vuex.Store({
    modules: {
        blog,

    },
    state: {},
    getters: {},
    mutations: {},
    actions: {},

});
export default store;
