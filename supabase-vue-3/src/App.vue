<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
 -->

 <script setup>
 import { onMounted, ref } from 'vue'
 import Account from './views/Account.vue'
 import Auth from './components/Auth.vue'
 import { supabase } from './supabase'
 import { RouterLink } from 'vue-router'
 
 const session = ref()
 const store = useSessionStore()
 session.value = store.id
 
 onMounted(() => {
   supabase.auth.getSession().then(({ data }) => {
     session.value = data.session
     store.id = data.session
   })
 
   supabase.auth.onAuthStateChange((_, _session) => {
     session.value = _session
     store.id = _session
   })
 })
 </script>
 
 <template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/visited">Visited</RouterLink>
      </nav>
    </div>
  </header>

   <div class="container" style="padding: 50px 0 100px 0">
     <Account v-if="session" :session="session" />
     <Auth v-else />
  
   </div>
   <router-view/>
 </template> 