import ApiService from './api-service'

const RegisterService = {
    

    async createUser(registerForm) {
        return await ApiService.post('register', registerForm);
    }
    
}

export default RegisterService

