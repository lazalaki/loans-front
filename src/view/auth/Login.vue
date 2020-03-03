<template>
    <div>
        <div class="form-group">
            <label>Enter Email</label>
            <input type="email" class="form-control" id="input-1" required v-model="form.email"/>
        </div>
        <div class="form-group">
            <label>Enter Password</label>
            <input type="password" class="form-control" id="input-2" required v-model="form.password"/>
        </div>
        <button type="button" class="btn btn-primary" @click="submit">Submit</button>
        <button type="button" class="btn btn-primary" @click="goToRegister">Go To Register</button>
    </div>
</template>

<script>
import LoginService from '../../services/login-service'
    export default {
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },

                error: ''
            }
        },

        methods: {
            submit() {
                this.error = ''
                LoginService.logIn(this.form)
                .then(() => {
                    this.$router.push({ name: 'Homepage', query: { redirect: '/homepage'}})
                })
                .catch(error => {
                    this.error = error.message
                })
            },

            goToRegister() {
                this.$router.push({ name: 'Register', query: { redirect: '/auth/register'}})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>