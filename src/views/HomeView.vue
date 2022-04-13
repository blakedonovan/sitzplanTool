<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
<div>



{{name}}
</div>
  
  </div>
</template>

<script lang="ts">
import { defineComponent ,computed} from 'vue';
//import store from '@/store';
import { useStore } from '@/store/play'

import HelloWorld from '@/components/HelloWorld.vue'; 


export default defineComponent({

setup(){
 const store = useStore()

return {
  store, // return the entire Pinia Store instance

   name: computed(() => store.name), // grab a varaiable and make it reactive with computed
    isAdmin: computed(()=>store.isAdmin),

};


},

 name: 'HomeView',
  components: {
    HelloWorld,
  
  },

  
});
</script>
