<script>
    import { ref, defineEmits } from 'vue';

    export default {
        setup(){
            const count = ref(0)
            return{count}
        },
        emits: ['say'],
        methods:{
            sensay(){
                this.$emit('say', 'hi')
            }
        },
        template:`
        <h2 class="ttl"> Point:  {{ count }}</h2>
        <button @click="count++">addCount</button>
        <button @click="sensay">child say</button>
        `
    }


</script>