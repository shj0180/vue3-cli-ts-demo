<template>
    <div>
        about
        <el-input v-model="input" placeholder="Please input" />
        {{ input }}
        <!-- {{ response.data }} -->



    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import service from '@/request'
import { response } from 'express'


export default defineComponent({
    setup () {
        const input = ref('')   
        // const rdata = {}

        service.get('/oper')
        .then(
            response => {
                // rdata = response
                console.log(response.data);
            }
        )
        
        service.get('/user')
        .then(
            response => {
                console.log(response);
            }
        )

        return {input}
    }
})
</script>

<style scoped>

</style>