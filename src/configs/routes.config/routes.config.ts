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
        key: 'Cliente',
        path: '/cliente',
        component: lazy(() => import('@/views/layouts/ClienteView')),
        authority: [],
    },
    {
        key: 'CriarCliente',
        path: '/Criar-Cliente',
        component: lazy(() => import('@/views/layouts/customers/CustomerCreate')),
        authority: [],
    },
    {
        key: 'ListaCliente',
        path: '/Lista-Cliente',
        component: lazy(() => import('@/views/layouts/customers/CustomerList')),
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
    ...othersRoute,
]
