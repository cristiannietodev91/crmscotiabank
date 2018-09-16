import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import CrearPromocion from '@/pages/Promociones/CrearPromocion.vue'
import ListaPromociones from '@/pages/Promociones/ListaPromociones.vue'
import ListaUsuarios from '@/pages/Usuarios/ListaUsuarios.vue'
import CrearUsuario from '@/pages/Usuarios/CrearUsuario.vue'
import Typography from '@/pages/Typography.vue'
import Icons from '@/pages/Icons.vue'
import Maps from '@/pages/Maps.vue'
import Notifications from '@/pages/Notifications.vue'
import UpgradeToPRO from '@/pages/UpgradeToPRO.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'crear-promocion',
        name: 'Crear Promocion',
        component: CrearPromocion
      },
      {
        path: 'listapromociones',
        name: 'Lista Promociones',
        component: ListaPromociones
      },
      {
        path: 'crear-usuario',
        name: 'Crear Usuario',
        component: CrearUsuario
      },
      {
        path: 'listausuarios',
        name: 'Lista Usuarios',
        component: ListaUsuarios
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        meta: {
          hideFooter: true
        },
        component: Maps

      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: UpgradeToPRO
      }
    ]
  }
]

export default routes
