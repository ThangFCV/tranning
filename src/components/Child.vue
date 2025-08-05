<script setup>

    const props= defineProps({
        say: String,
        lists: Array
    })

</script>
<template>
    <h3>{{ say || "father no say child" }}</h3>
    <ul>
        <li v-for="list in lists" :key="list.id">
            {{ list.ass }}
        </li>
    </ul>
    <slot>slot of child</slot>
</template>