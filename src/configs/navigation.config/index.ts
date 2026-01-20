import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_DIVIDER
} from '@/constants/navigation.constant'

import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'ai-platform',
        path: '',
        title: 'Studio IA',
        translateKey: 'nav.aiPlatform',
        icon: 'groupMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'ai-platform.dashboard',
                path: '/dashboard',
                title: 'Dashboard',
                translateKey: 'nav.aiPlatform.dashboard',
                icon: 'home',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'ai-platform.agents',
                path: '/agentes',
                title: 'Agentes',
                translateKey: 'nav.aiPlatform.agents',
                icon: 'pi',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'ai-platform.triggers',
                path: '/gatilhos',
                title: 'Gatilhos',
                translateKey: 'nav.aiPlatform.triggers',
                icon: 'pi',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'ai-platform.library',
                path: '/Biblioteca',
                title: 'Biblioteca',
                translateKey: 'nav.aiPlatform.library',
                icon: 'files',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
    {
        key: 'arquivos',
        path: '/Arquivos',
        title: 'Arquivos',
        translateKey: 'nav.files',
        icon: 'files',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'divider.after-files',
        path: '',
        title: '',
        translateKey: '',
        icon: '',
        type: NAV_ITEM_TYPE_DIVIDER,
        authority: [],
        subMenu: [],
    },
]

export default navigationConfig
