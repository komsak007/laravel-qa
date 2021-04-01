<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"></div>

                    <div class="card-body">
                        <form @submit.prevent="login">

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                                <div class="col-md-6">
                                    <input type="text" name="title" v-model="username" class="form-control">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">password</label>

                                <div class="col-md-6">
                                    <input v-model="password" type="password" class="form-control">

                                        <span v-if="errors" class="invalid-feedback" role="alert">
                                            {{errors}}
                                        </span>

                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            errors: ''
        }
    },

    methods: {
        login() {
            // console.log(this.username);
            axios.post('/token', {
                username: this.username,
                password: this.password
            }).then(({data}) => {
                // console.log(data.access_token);
                localStorage.setItem("token", data.access_token);
                this.$router.push('/');
            }).catch(({ response }) => {
                    this.error = response.data.message
                 })
        }
    }
}
</script>