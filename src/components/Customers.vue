<template>
<div class="container">
    <Alert :message="alert" v-if="alert"></Alert>
    <h1 class="page-header text-left">用户管理系统</h1>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>姓名</th>
                <th>电话</th>
                <th>邮箱</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(customer, index) in customers" :key="index" class="text-left">
                <td>{{customer.name}}</td>
                <td>{{customer.phone}}</td>
                <td>{{customer.email}}</td>
                <td><router-link :to="'/customer/' + customer.id" class="btn btn-default">详情</router-link></td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import Alert from '../components/Alert'
export default {
    data() {
        return {
            customers: [],
            alert:''
        }
    },
    methods: {
        fetchCustomer () {
            this.$http.get("http://localhost:3000/users")
                .then((res) =>{
                    this.customers = res.body
                })
        }
    },
    components: {
        Alert
    },
    created () {
        this.fetchCustomer()
        if (this.$route.query.alert) {
            this.alert = this.$route.query.alert
        }

    },
}
</script>

<style>

</style>