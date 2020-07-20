import home from './pages/home/index.vue';
import commande from './pages/commandes/index.vue';
import menu from './pages/menus/index.vue'
import ligneComs from './pages/ligneCom/index.vue'

const routes = [
  { path: '/', component: home },
  { path: '/commandes', component: commande },
  { path: '/menus', component: menu },
  { path: '/ligneComs/:id', component: ligneComs },
]
export default routes;
