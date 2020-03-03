import ApiService from './api-service'

const RegisterService = {
    

    async createUser(registerForm) {
        return await ApiService.post('auth/register', registerForm);
    }
    
}

export default RegisterService

