<script setup>
    import Form from '../components/Form.vue';
    import listToDo from '../components/ListToDo.vue';

</script>


<template>
    <h2>To Do app</h2>
    <div class="row">
        <listToDo />
        <Form ></Form>

    </div>
</template>
<style>
    .row{
        display: flex;
        justify-content: space-between;
        align-content: center;
        box-sizing: border-box;
        padding: 0px 4%;
    }
</style>