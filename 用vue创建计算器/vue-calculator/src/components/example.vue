<template>
    <div v-on:click="ShowExample">点击显示另一个组件</div>
</template>
<script>
    export default {
        name: 'Example',
        data() {
            return {

            }
        },
        methods: {
            ShowExample: function () {
                alert('弹出对话框')
            }
        }
    }
</script>
<style scoped>
    button {
        width: 140px;
        height: 40px;
    }
</style>