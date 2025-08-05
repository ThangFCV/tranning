<script setup>
    import { ref } from 'vue'
    import { useTodoStore } from '../store/todoStore'
    import Modal from './Modal.vue'

    const openModal = ref(false)
    const store = useTodoStore()
    const id = ref(null)
    const name = ref('')
    const action = ref('')
    const type = ref('')

    function remove (id){
        store.removeTodo(id)
    }
    function getData(item){
        id.value = item.id,
        name.value = item.name,
        action.value = item.action,
        type.value = item.type,
        openModal.value = true
    }
    function update(){
        // console.log("UPDATE:", { id, name, action, type });
        store.update({
            id: id.value,
            name: name.value,
            action: action.value,
            type: type.value,

        })
        openModal.value=false
    }
</script>
<template>
    <ul>
        <li v-for=" item in store.todos" :key="item.id" @click="openModal=true; getData(item)">
            <!-- <p>{{ item.id }}</p> -->
            <p>{{ item.name }}</p>
            <p>{{ item.action }}</p>
            <p>{{ item.type }}</p>
            <button @click.stop="remove(item.id)">X</button> 
            <!-- stop de ngan chan viec lan ra ngaoif cuar hanh dong remove -->
        </li>
    </ul>
    <!-- teleport render modal ngoai dom -->
    <Teleport to="body">
        <modal :open="openModal" @close="openModal = false">
        <template #header>
            <h3>Update Todo</h3>
        </template>
        <template #body>
            <div>
            <label>
                <p>Name:</p>
                <input placeholder="name" v-model="name">
            </label>
            <label>
                <p>Action:</p>
                <input placeholder="Action" v-model="action">
            </label>
            <label>
                <p>Typle:</p>
                <input type="radio" name="type" value="done" v-model="type"><span>done</span>
                <br>
                <input type="radio" name="type" value="none" v-model="type"><span>none</span>
            </label>
            </div>
        </template>
        <button @click="update">Update</button>
        </modal>
    </Teleport>
</template>
<style>
    ul li{
        cursor: pointer;
    }
</style>
