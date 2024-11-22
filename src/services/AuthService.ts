import ApiService from './ApiService'
import endpointConfig from '@/configs/endpoint.config'
import AxiosBase from './axios/AxiosBase';

import type {
    SignInCredential,
    SignUpCredential,
    ForgotPassword,
    ResetPassword,
    SignInResponse,
    SignUpResponse,
} from '@/@types/auth'

export async function apiSignIn(data: SignInCredential) {
    return ApiService.fetchDataWithAxios<SignInResponse>({
        url: endpointConfig.signIn,
        method: 'post',
        data,
    })
}
//registro Aqui é a API
// export async function apiSignUp(data: SignUpCredential) {
//     return ApiService.fetchDataWithAxios<SignUpResponse>({
//         url: endpointConfig.signUp,
//         method: 'post',
//         data,
//     })
// }

export async function apiSignOut() {
    return ApiService.fetchDataWithAxios({
        url: endpointConfig.signOut,
        method: 'post',
    })
}

export async function apiForgotPassword<T>(data: ForgotPassword) {
    return ApiService.fetchDataWithAxios<T>({
        url: endpointConfig.forgotPassword,
        method: 'post',
        data,
    })
}

export async function apiResetPassword<T>(data: ResetPassword) {
    return ApiService.fetchDataWithAxios<T>({
        url: endpointConfig.resetPassword,
        method: 'post',
        data,
    })
}

export async function apiSignUp(values: SignUpCredential) {
    try {
        const response = await AxiosBase.post('/main/register', values); // Substitua '/register' pelo endpoint correto
        return response.data;
    } catch (error) {
        throw error;
    }
}