<template>
<div class="container">
    <router-link to="/" class="btn btn-default  pull-left">返回</router-link>
    <h1 class="page-header text-left">
        {{customer.name}}

        <span class="pull-right">
            <router-link :to="'/edit/'+customer.id" class="btn btn-primary">编辑</router-link>&nbsp;
            <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
        </span>

    </h1>
    <ul class="list-group text-left">
        <li class="list-group-item">
            <span class="glyphicon glyphicon-earphone"> {{customer.phone}}</span>
        </li>
        <li class="list-group-item">
            <span class="glyphicon glyphicon-envelope"> {{customer.email}}</span>
        </li>
    </ul>
    <ul class="list-group text-left">
        <li class="list-group-item">
            <span class="glyphicon glyphicon-education"> {{customer.education}}</span>
        </li>
        <li class="list-group-item">
            <span class="glyphicon glyphicon-tasks"> {{customer.profession}}</span>
        </li>
        <li class="list-group-item">
            <span class="glyphicon glyphicon-pencil"> {{customer.profile}}</span>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            customer:''
        }
    },
    methods: {
        fetchCustomers (id) {
            this.$http.get("http://localhost:3000/users/"+id)
                .then((res) =>{
                    this.customer = res.body
                })
        },
        deleteCustomer(id) {
            this.$http.delete("http://localhost:3000/users/"+id)
                .then((res) => {
                    this.$router.push({path: '/', query: {alert: `${this.customer.name}信息删除成功`}})
                })
        }
    },
    created () {
        this.fetchCustomers(this.$route.params.id)
    }
}
</script>

<style>

</style>