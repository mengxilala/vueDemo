<template>
    <div id="app">
        <Calculator class=page-1 v-show=currentPage></Calculator>
        <Example class=page-2 v-show=!currentPage></Example>
        <button v-on:click="currentPage = !currentPage">切换</button>
    </div>
</template>

<script>
    import Calculator from './components/calculator';
    import Example from './components/example';

    export default {
        components: {
            Calculator: Calculator,
            Example: Example
        },
        data() {
            return {
                currentPage: true
            };
        },
        name: 'app'
    }
</script>

<style>
    body {
        background: linear-gradient(to right, #85D8CE, #085078);
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>