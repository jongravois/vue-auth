import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let app = '';
const config = {
  apiKey: "AIzaSyAezqwnL-Zjf_zKtCD9RL14ChrwfA0oxOI",
  authDomain: "vue-firebase-d087f.firebaseapp.com",
  databaseURL: "https://vue-firebase-d087f.firebaseio.com",
  projectId: "vue-firebase-d087f",
  storageBucket: "vue-firebase-d087f.appspot.com",
  messagingSenderId: "387428730329"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
