import Vue from 'vue'
import Router from 'vue-router'


import Home from "@/components/home";
import Search from "@/components/search";
import Profile from "@/components/profile";
import Favorites from "@/components/favorites";
import SchoolSubject from "@/components/school_subject";


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/search',
      name: 'Search',
      component: Search
    },


    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    },

    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/school_subject/:id',
      name: 'SchoolSubject',
      component: SchoolSubject
    },

  ]
})
