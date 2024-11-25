import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE
} from '@/constants/navigation.constant'

import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'navigation',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'concepts.ai.image',
        path: `/agendar`,
        title: 'Agenda',
        translateKey: 'nav.conceptsAi.image',
        icon: 'aiImage',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        meta: {
            description: {
                translateKey: 'nav.conceptsAi.imageDesc',
                label: 'AI image processing',
            },
        },
        subMenu: [],
    },
    {
        key: 'concepts.customers',
        path: '',
        title: 'CRM',
        translateKey: 'nav.conceptsCustomers.customers',
        icon: 'customers',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        meta: {
            description: {
                translateKey: 'nav.conceptsCustomers.customersDesc',
                label: 'Customer management',
            },
        },
        subMenu: [
            {
                key: 'concepts.customers.customerList',
                path: `/listar-cliente`,
                title: 'Lista',
                translateKey: 'nav.conceptsCustomers.customerList',
                icon: 'customerList',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                meta: {
                    description: {
                        translateKey:
                            'nav.conceptsCustomers.customerListDesc',
                        label: 'List of all customers',
                    },
                },
                subMenu: [],
            },
            {
                key: 'concepts.customers.customerCreate',
                path: `/Criar-Cliente`,
                title: 'Criar',
                translateKey: 'nav.conceptsCustomers.customerCreate',
                icon: 'customerCreate',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                meta: {
                    description: {
                        translateKey:
                            'nav.conceptsCustomers.customerEditDesc',
                        label: 'Edit customer info',
                    },
                },
                subMenu: [],
            },
        ],
    },
    {
        key: 'concepts.customers',
        path: '',
        title: 'Clinica',
        translateKey: 'nav.conceptsCustomers.customers',
        icon: 'products',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        meta: {
            description: {
                translateKey: 'nav.conceptsCustomers.customersDesc',
                label: 'Customer management',
            },
        },
        subMenu: [
            {
                key: 'concepts.customers.customerList',
                path: `/quiropraxistas`,
                title: 'Quiropraxista',
                translateKey: 'nav.conceptsCustomers.customerList',
                icon: 'customerList',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                meta: {
                    description: {
                        translateKey:
                            'nav.conceptsCustomers.customerListDesc',
                        label: 'List of all customers',
                    },
                },
                subMenu: [],
            },
            {
                key: 'concepts.products.productList',
                path: `/Planos`,
                title: 'Planos',
                translateKey: 'nav.conceptsCustomers.customerCreate',
                icon: 'customerCreate',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                meta: {
                    description: {
                        translateKey:
                            'nav.conceptsCustomers.customerEditDesc',
                        label: 'Edit customer info',
                    },
                },
                subMenu: [],
            },
        ],
    },
    {
        key: 'concepts.customers',
        path: '',
        title: 'Financeiro',
        translateKey: 'nav.conceptsCustomers.customers',
        icon: 'uiDataDisplayTooltip',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        meta: {
            description: {
                translateKey: 'nav.conceptsCustomers.customersDesc',
                label: 'Customer management',
            },
        },
        subMenu: [
            {
                key: 'concepts.customers.customerList',
                path: `/Lista-Cliente`,
                title: 'Contas a Pagar',
                translateKey: 'nav.conceptsCustomers.customerList',
                icon: 'customerList',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                meta: {
                    description: {
                        translateKey:
                            'nav.conceptsCustomers.customerListDesc',
                        label: 'List of all customers',
                    },
                },
                subMenu: [],
            },
            {
                key: 'concepts.customers.customerCreate',
                path: `/Criar-Cliente`,
                title: 'Contas a Receber',
                translateKey: 'nav.conceptsCustomers.customerCreate',
                icon: 'customerCreate',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                meta: {
                    description: {
                        translateKey:
                            'nav.conceptsCustomers.customerEditDesc',
                        label: 'Edit customer info',
                    },
                },
                subMenu: [],
            },
            {
                key: 'concepts.customers.customerCreate',
                path: `/Criar-Cliente`,
                title: 'Fluxo de Caixa',
                translateKey: 'nav.conceptsCustomers.customerCreate',
                icon: 'customerCreate',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                meta: {
                    description: {
                        translateKey:
                            'nav.conceptsCustomers.customerEditDesc',
                        label: 'Edit customer info',
                    },
                },
                subMenu: [],
            },
        ],
    },
]

export default navigationConfig
