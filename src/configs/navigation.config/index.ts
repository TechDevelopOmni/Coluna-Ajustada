import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE
} from '@/constants/navigation.constant'

import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'home',
        path: '/dashboard',
        title: 'Dashboard',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'ai-platform',
        path: '',
        title: 'Plataforma IA',
        translateKey: 'nav.aiPlatform',
        icon: 'pi',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
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
]

export default navigationConfig
