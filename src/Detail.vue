<script setup>
    import { useRouter, useRoute } from 'vue-router'
    import { ref , reactive, provide} from 'vue';

    const router = useRouter()
    const route = useRoute()
    let id =0
    const state = reactive({
        items:[
            {id:id++, name:'tiem1', des: 'test test', type:'tp1' },
            {id:id++, name:'tiem2', des: 'test test', type:'tp1' },
            {id:id++, name:'tiem3', des: 'test test', type:'tp1' },
            {id:id++, name:'tiem3', des: 'test test', type:'tp1' },
        ]
    })
    //provie truyen data xuong con
    provide('items', state.items)
    function gotoItem (item){
        router.push(`/detail/${item.id}`)
    }
</script>

<template>
    <h1>Detail</h1>
     <ul v-if="!route.params.id">
        <li class="item" v-for="item in state.items" :key="item.id" @click="gotoItem(item)">
            <p>{{ item.id }}</p>
            <p>{{ item.name }}</p>
            <p>{{ item.des }}</p>
            <p>{{ item.type }}</p>
        </li>
    </ul>
    <router-view />
</template>
<style>
    .item{
        cursor: pointer;
    }
</style>