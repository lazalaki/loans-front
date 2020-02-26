import ApiService from './api-service'

const LoginService = {

    async logIn(loginForm) {
        return await ApiService.post('login', loginForm)
    }
}

export default LoginService