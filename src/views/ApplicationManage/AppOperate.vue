<template>
    <div>
        
        app - operate
        <el-input v-model="input" placeholder="Please input" />

    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup () {
        const input = ref('')

        return {input}
    }
})
</script>

<style scoped>

</style>