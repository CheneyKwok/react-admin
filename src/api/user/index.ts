import request from '@/utils/request.ts'
import { LoginParams } from '@/api/user/type.ts'

enum API {
    LOGIN = '/user/login',
    USER_INFO = '/user/info',
}

export const login = (data: LoginParams) => {
    request.post<any>(API.LOGIN, data)
}

export const userInfo = () => {
    request.get(API.USER_INFO)
}
