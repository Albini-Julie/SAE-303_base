import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import GenresView from '../views/GenresView.vue'
import TempsView from '../views/TempsView.vue'
import TypesEtaView from '../views/TypesEtaView.vue'
import EtuAcaView from '../views/EtuAcaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'accueil', component: AccueilView},
    {path: '/genres', name: 'genres', component: GenresView},
    {path: '/temps', name: 'temps', component: TempsView},
    {path: '/typeseta', name: 'typeseta', component: TypesEtaView},
    {path: '/etuaca', name: 'etuaca', component: EtuAcaView},
  ]
})

export default router
