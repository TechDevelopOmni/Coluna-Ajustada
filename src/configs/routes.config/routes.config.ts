import { lazy } from 'react'
import authRoute from './authRoute'
import othersRoute from './othersRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    /** Example purpose only, please remove */
    {
        key: 'CriarCliente',
        path: '/Criar-Cliente',
        component: lazy(() => import('@/views/layouts/customers/CustomerCreate')),
        authority: [],
    },
    {
        key: 'ListaCliente',
        path: '/listar-cliente',
        component: lazy(() => import('@/views/layouts/customers/CustomerList/CustomerList')),
        authority: [],
    },
    {
        key: 'DetalheCliente',
        path: '/Detalhe-Cliente',
        component: lazy(() => import('@/views/layouts/customers/CustomerDetails')),
        authority: [],
    },
    {
        key: 'editarCliente',
        path: '/Editar-Cliente',
        component: lazy(() => import('@/views/layouts/customers/CustomerEdit')),
        authority: [],
    },
    {
        key: '',
        path: '/profile-page-view',
        component: lazy(() =>
            import('@/views/layouts/profilepage/Settings')
        ),
        authority: [],
    },
    {
        key: 'agenda',
        path: '/agendar',
        component: lazy(() =>
            import('@/views/layouts/Calendar/Calendar')
        ),
        authority: [],
    },
    {
        key: 'quiropraxista',
        path: '/quiropraxistas',
        component: lazy(() =>
            import('@/views/layouts/quiropraxista/quiroList/QuiroList')
        ),
        authority: [],
    },
    {
        key: 'atendente',
        path: '/atendente',
        component: lazy(() =>
            import('@/views/layouts/Atendimento/atendenteList/AtendenteList')
        ),
        authority: [],
    },
    ...othersRoute,
]
