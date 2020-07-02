import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import BottomBar from "./components/BottomBar";

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {path:'/bottomBar',component:BottomBar}
    ]
  }]
})
