<script setup>
import { reactive, ref, watch, watchEffect } from 'vue';

const url_API ="http://localhost:3000/data/users"

const num = ref(5)
// const data = ref([])
// const filter = ref([])
const state = reactive({
  data:[],
  filter: []
})

watchEffect(async () => {
  const response = await fetch(
    url_API
  )
  state.data = (await response.json())
  state.filter = state.data.slice(0, num.value)
})
watch(num ,()=>{
    state.filter = state.data.slice(0, num.value)
})

</script>
<template>
    <h1>User</h1>
    <div>
      <div class="mb-10">
        <label>
          <input type="number"  id="number" placeholder="5" v-model="num">
          <span> Number user</span>
        </label>
      </div>
      <div>
        <label>
          <input type="search"  id="search">
          <span> Search user</span>
        </label>
      </div>
    </div>
    <ul>
        <li v-for="(user, id) in state.filter" :key="id" @click="detaillUser">
            <p>
                 {{ id + 1 }}-{{ user.username }}
            </p>
            <p>
                {{ user.lastname }}
            </p>
        </li>
    </ul>

</template>
<style scoped>
    ul li{
        cursor: pointer;
    }
    .mb-10{
      margin-bottom: 10px;
    }
</style>