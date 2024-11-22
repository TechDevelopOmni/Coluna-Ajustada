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
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'concepts.customers',
        path: '',
        title: 'CRM',
        translateKey: 'nav.conceptsCustomers.customers',
        icon: 'pi',
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
        title: 'Quiropraxista',
        translateKey: 'nav.conceptsCustomers.customers',
        icon: 'pi',
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
]

export default navigationConfig
