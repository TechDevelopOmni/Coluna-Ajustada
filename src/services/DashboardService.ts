import ApiService from './ApiService'
import { mock } from '../mock/MockAdapter'
import {projectData} from '../mock/data/dashboardData'


export async function apiGetEcommerceDashboard<T>() {
    return ApiService.fetchDataWithAxios<T>({
        url: '/api/dashboard/ecommerce',
        method: 'get',
    })
}

export async function apiGetProjectDashboard<T>() {
    //return ApiService.fetchDataWithAxios<T>({
    return mock.onGet(`/api/dashboard/project`).reply(() => {
        const resp = {
            ...projectData,
        }
    
        return [200, resp]
    })
}

export async function apiGetAnalyticDashboard<T>() {
    return ApiService.fetchDataWithAxios<T>({
        url: '/api/dashboard/analytic',
        method: 'get',
    })
}

export async function apiGetMarketingDashboard<T>() {
    return ApiService.fetchDataWithAxios<T>({
        url: '/api/dashboard/marketing',
        method: 'get',
    })
}


mock.onGet(`/api/dashboard/project`).reply(() => {
    const resp = {
        ...projectData,
    }

    return [200, resp]
})