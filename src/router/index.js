import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamsView from '../views/TeamsView.vue'
import TeamCalendarView from '../views/TeamCalendarView.vue'
import LeagueCalendarView from '@/views/LeagueCalendarView .vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/teams',
      component: TeamsView
    },

    {
      path: '/teamcalendar',
      component: TeamCalendarView
    },

    {
      path: '/leaguecalendar',
      component: LeagueCalendarView
    },

  ]
})

export default router
