import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home'
import tHeader from '@/components/header'
Vue.component(tHeader)

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/QuestionnaireSurvey',
      name: 'QuestionnaireSurvey',
      component: () => import('@/views/QuestionnaireSurvey')
    }
  ]
})
