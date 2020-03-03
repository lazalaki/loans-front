<template>
    <div>
        <div class="form-group">
            <label>Enter Password</label>
            <input type="password" v-model="form.password" class="form-control"/>
        </div>
        <button class="btn btn-primary" type="button" @click="submit"></button>
    </div>
</template>

<script>
    import LoginService from '../../services/login-service';

    export default {
        data() {
            return {
                form: {
                    password: '',
                }
            }
        },
        methods: {
            submit() {
                const token = this.$route.query.token;
                const password = this.form.password;

                const payload = {
                    token: token,
                    password: password,
                };
                LoginService.activeAccount(payload).then(() => {
                    this.$router.push({name: 'Login'});
                }).catch(() => {
                    //
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>