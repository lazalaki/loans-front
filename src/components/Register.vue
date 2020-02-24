<template>
    <div>
        <div class="form-group">
            <label>Enter First Name</label>
            <input type="text" class="form-control" id="input-1" required v-model="form.firstName"/>
        </div>
        <div class="form-group">
            <label>Enter Last Name</label>
            <input type="text" class="form-control" id="input-2" required v-model="form.lastName">
        </div>
        <div class="form-group">
            <label>Enter Email</label>
            <input type="email" class="form-control" id="input-3" required v-model="form.email">
        </div>
        <div class="form-group">
            <label>Enter Password</label>
            <input type="password" class="form-control" id="input-4" required v-model="form.password">
        </div>
        <button type="button" class="btn btn-primary" @click="submit">Submit</button>        
    </div>
</template>

<script>
import RegisterService from '../services/register-service'
    export default {
        data() {
            return {
                form: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                }
            }
        },

        methods: {
            submit() {
                RegisterService.createUser(this.form)
                .then(response => console.log(response))
            }
        }
    }
</script>

<style>
.form-group {
    padding-left: 5px;
    padding-right: 5px; 
}

</style>