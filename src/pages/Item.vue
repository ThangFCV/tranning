<script setup>
    import { inject } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    // hung data tu cha
    const items = inject('items') 
    // console.log('d', items);
    
    const itemId = Number(route.params.id)
    const item = items?.find(i => i.id === itemId)
</script>

<template>
    <div v-if="item">
        <p>ID: {{ item.id }}</p>
        <h2>Name: {{ item.name }}</h2>
        <p>Des: {{ item.des }}</p>
        <p>Type: {{ item.type }}</p>
    </div>
</template>