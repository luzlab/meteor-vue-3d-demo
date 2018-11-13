import './both.js';

import 'roboto-npm-webfont';
import 'material-design-icons';

import Vue from 'vue';
import app from '/imports/ui/app.vue';
import VueMeteorTracker from 'vue-meteor-tracker';

// import VueGL from "vue-gl";

import Vue3d from 'vue-3d-model';
import Vuetify from 'vuetify'

Vue.use(VueMeteorTracker);
Vue.use(Vuetify)

// Object.keys(VueGL).forEach(name => {
//   Vue.component(name, VueGL[name]);
// });

Object.keys(Vue3d).forEach(name => {
  Vue.component(name, Vue3d[name]);
});

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...app,
  });
});
