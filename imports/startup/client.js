import './both.js';

import 'roboto-npm-webfont';
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Vue from 'vue';

import app from '/imports/ui/app.vue';
import VueMeteorTracker from 'vue-meteor-tracker';
Vue.use(VueMeteorTracker);

import Vuetify from 'vuetify/dist/vuetify.js';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);

// import VueGL from "vue-gl";
// Object.keys(VueGL).forEach(name => {
//   Vue.component(name, VueGL[name]);
// });

import Vue3d from 'vue-3d-model';
Object.keys(Vue3d).forEach(name => {
  Vue.component(name, Vue3d[name]);
});

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...app,
  });
});
