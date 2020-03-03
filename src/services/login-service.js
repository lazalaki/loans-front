import ApiService from './api-service'

const LoginService = {

    async logIn(loginForm) {
        return await ApiService.post('auth/login', loginForm)
    },

    async activeAccount(activeBody) {
        return await ApiService.post('auth/activate', activeBody);
    }
}

export default LoginService