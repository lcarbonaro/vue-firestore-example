import Vue from 'vue';
import App from './App.vue';

import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire);
firebase.initializeApp({
  projectId: 'fire-1a6fc',
  databaseURL: 'https://fire-1a6fc.firebaseio.com'
});


// was: export const db = firebase.firestore();

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
export const db = firestore;

import '../node_modules/materialize-css/dist/css/materialize.min.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
