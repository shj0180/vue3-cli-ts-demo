<template>
    <div class="login-box">
        <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="80px"
      class="demo-ruleForm"
    >
      <h2 style="color:blue">后台管理系统</h2>
      <el-form-item label="username" prop="username">
        <el-input v-model="ruleForm.username"  autocomplete="off" />
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="submitForm(ruleFormRef)"
          >login</el-button
        >
        <el-button class="login-btn" @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
    </div>
    
  </template>
  
 
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import {LoginData} from '@/type/loginForm'

export default defineComponent({
    setup () {
        // const data = reactive({
        //     ruleForm: {
        //         username: '',
        //         password: '',
        //     }
        // });
        const data = reactive(new LoginData())
        
        const rules = {
            username: [
                { required: true, message: 'Please input Activity name', trigger: 'blur' },
                { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
            ],
            password: [
                { required: true, message: 'Please input Activity password', trigger: 'blur' },
                { min: 8, max: 10, message: 'Length should be 8 to 10', trigger: 'blur' },
                
            ]
        }


        return {...toRefs(data), rules}
    }
})
</script>

<style lang="scss" scoped>
    .login-box{
        width: 100%;
        height: 100%;
        background: url('@/assets/bk.heic');
        padding: 1px;
        text-align: center;

        .demo-ruleForm{
            width: 500px;
            margin: 200px auto;
            background-color: darkgrey;
            padding: 40px;
            border-radius: 20px;
        }
        .login-btn{
            width: 48%;

        }
        h2{
            margin-bottom: 30px;
        }
    }
</style>