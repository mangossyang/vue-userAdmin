<template>
<div class="edit container">
    <Alert v-if="alert" :message="alert"></Alert>
    <h1 class="page-header text-left">编辑用户</h1>
    <form @submit.prevent="updateCustomer" class="text-left">
        <div class="well">
            <h4>用户信息</h4>
            <div class="form-group">
                <label>姓名</label>
                <input type="text" class="form-control" placeholder="name" v-model="customer.name">
            </div>
            <div class="form-group">
                <label>电话</label>
                <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
            </div>
            <div class="form-group">
                <label>邮箱</label>
                <input type="text" class="form-control" placeholder="email" v-model="customer.email">
            </div>
            <div class="form-group">
                <label>学历</label>
                <input type="text" class="form-control" placeholder="education" v-model="customer.education">
            </div>
            <div class="form-group">
                <label>职业</label>
                <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
            </div>  
            <div class="form-group">
                <label>个人简介</label>
                <textarea rows="10" class="form-control" v-model="customer.profile"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">确认</button>                                                          
        </div>
    </form>
</div>
</template>

<script>
import Alert from './Alert'
export default {
    data() {
        return {
            customer: {},
            alert: ''
        }
    },
    methods: {
        fetchCustomer (id) {
            this.$http.get("http://localhost:3000/users/"+id)
                .then((res) => {
                    this.customer = res.data
                })
        },
        updateCustomer() {
            if (!this.customer.name || !this.customer.phone || !this.customer.email) {
                this.alert = '请添加相应的信息！'
            } else {
                let newCustomer = {
                    name: this.customer.name,
                    phone: this.customer.phone,
                    email: this.customer.email,
                    education: this.customer.education,
                    profession: this.customer.profession,
                    profile: this.customer.profile,
                }
                this.$http.put("http://localhost:3000/users/"+this.$route.params.id, newCustomer)
                    .then((res) => {
                        this.$router.push({path: '/', query: {alert: '用户信息更新成功'}})
                    })
            }
        }
    },
    created () {
       this.fetchCustomer(this.$route.params.id) 
    },
    components: {
        Alert
    }
}
</script>

<style>

</style>