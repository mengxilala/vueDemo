<template>
    <div id="get-todo" class="container">
        <input class="form-control"  v-bind:value="newTodo" v-on:change="getTodo" placeholder="I need to ...">
        <button class="btn btn-primary" v-on:click="addTodo">Todo</button>
    </div>
</template>

<script>
    export default{
        methods:{
            getTodo(e){
                this.$store.dispatch('getTodo',e.target.value);
            },
            addTodo(){
                this.$store.dispatch('addTodo');
                this.$store.dispatch('clearTodo');
            }
        },
        computed:{
            newTodo(){
                return this.$store.getters.newTodo;
            }
        }
    }
</script>