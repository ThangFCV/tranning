<script setup>
import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue';
import { useTodoStore } from '../store/todoStore'

    const store = useTodoStore()
    const name = ref('')
    const action = ref('')
    const type = ref('none')

    function submit(){
        if (!name.value || !action.value) return
       store.addTodo({
        name: name.value,
        action: action.value,
        type: type.value
       })
       name.value=''
       action.value=''
       type.value='none'


    }

</script>

<template>
    <div>
        <h2>Form data</h2>
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
            <p>

                <button v-on:click="submit">Add todo</button>
            </p>
        </div>
    </div>

</template>