import Vue from 'vue'
import Router from 'vue-router'


import Home from "@/components/home";
import Search from "@/components/search";
import Profile from "@/components/profile";
import Discord from "@/components/discord";
import SchoolSubject from "@/components/school_subject";
import Tuto from "@/components/tuto";

import APropos from "@/components/a_propos"
import Mentions from "@/components/mentions"
import Contact from "@/components/contact"

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
      path: '/discord',
      name: 'Discord',
      component: Discord
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

    {
      path: '/tuto/:id',
      name: 'Tuto',
      component: Tuto
    },


    {
      path: '/a_propos',
      name: 'APropos',
      component: APropos
    },


    {
      path: '/mentions',
      name: 'Mentions',
      component: Mentions
    },


    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },

  ]
})
