<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import addCount from '../components/addCount.vue'
import Child from '../components/Child.vue'


const ttlClass = ref('ttl')

let id = 0
const hiden = ref(false)
const text = ref('')
const modal = ref(true)
const state = reactive({
  newList: '',
  lists :[
  {id: id++, ass: 'lesson 1', type: true},
  {id: id++, ass: 'lesson 2', type: true},
  {id: id++, ass: 'lesson 3', type: false},
]
})

function onSay(msg) {
  alert(msg) 

}
const fatherData = ref('hello child')


function onInput(e){
  text.value = e.target.value
}
function toggle(){
  modal.value= !modal.value
} 
function addTodo (){
  state.lists.push({
    id: id++, ass: state.newList, type: false
  })
  state.newList=''
}
function remove(list){
   const index = state.lists.indexOf(list)
  if (index !== -1) {
    state.lists.splice(index, 1)
  }
}
const filter = computed(() => {
  return hiden.value
    ? state.lists.filter(t => !t.type)
    : state.lists;
});
const refmouted = ref(null)
onMounted(()=>{
  refmouted.value.textContent="mouted"
})

</script>

<template>
  <!-- <h2 class="ttl"> Point:  {{ addCount }}</h2>
  <button @click="addCount.count++">addCount</button> -->
  <!-- <input :value="text" @input="onInput"> -->
  <addCount @say="onSay" />
  <Child :say="fatherData" />
  <Child :lists="state.lists" :say="`hello child2`"/>
  <Child><div>
    <h4>Slot father</h4>
  </div> </Child>
  <p>{{ text }}</p>
  <div class="toggle">
    <button v-on:click="toggle">toggle</button>
    <p v-if="modal">modal1</p>
    <p v-else>modal2</p>
  </div>
  <form @submit.prevent="addTodo">
    <input v-model="state.newList" placeholder="new ass" required>
    <!-- <button v-on:click="addTodo">ADD</button> -->
    <button>ADD</button>

  </form>

  <ul>
    <li v-for="list in filter" :key="list.id">
      <input type="checkbox" v-model="list.type">
      <span>
        {{ list.ass }}
      </span>
      <button v-on:click="remove(list)">X</button>
    </li>
  </ul>
  <button v-on:click="hiden =! hiden">
  {{ hiden ? 'Show all' : 'Hide completed' }}</button>
  <p ref="refmouted">hello</p>
</template>
<style>
  .ttl{
    color: red;
  }
</style>
