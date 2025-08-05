<script setup>
import { reactive, ref, watchEffect } from 'vue';

const url_API ="http://localhost:3000/data/users"

const num = ref('')
const filter = ref(null)

watchEffect(async () => {
  const response = await fetch(
    url_API
  )
  const data = (await response.json())
  filter.value = data.slice(0, 10)
})

</script>
<template>
    <h1>User</h1>
    <ul>
        <li v-for="(user, id) in filter" :key="id">
            <p>
                 {{ id + 1 }}-{{ user.username }}
            </p>
            <p>
                {{ user.lastname }}
            </p>
        </li>
    </ul>
</template>
