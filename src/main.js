import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App';

Vue.use(iView);

/* eslint-disable no-new */
new Vue({
    render: h => h(App)
}).$mount('#app');
