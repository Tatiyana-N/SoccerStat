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
      name:'Home',
      component: HomeView
    },
    {
      path: '/leagues',
      name:'LeaguesList',
      component: HomeView
    },
    {
      path: '/teams',
      name:'TeamsList',
      component: TeamsView
    },
    {
      path: '/teams/:id/calendar',
      name:'TeamCalendar',
      component: TeamCalendarView,
      
    },
    {
      path: '/leagues/:id/calendar',
      name:'LeagueCalendar',
      component: LeagueCalendarView
    },

  ]


});

export default router;
