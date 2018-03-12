<!-- 修改App.vue文件 -->
<template>
  <div id="app">
    <GetTodo></GetTodo>
    <CurrentTodos></CurrentTodos>
    <CompletedTodos></CompletedTodos>
  </div>
</template>
<script> 
  import GetTodo from './components/GetTodo.vue'
  import CurrentTodos from './components/CurrentTodos.vue'
  import CompletedTodos from './components/CompletedTodos.vue'
  export default {
    components: {
      GetTodo,
      CurrentTodos,
      CompletedTodos
    }
  } 
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>