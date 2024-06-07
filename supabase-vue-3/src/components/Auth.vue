<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useStore } from '@/stores/counter';

const loading = ref(false)
const email = ref('')
const password = ref('')

const store = useStore()

async function signUp() {
  console.log(email.value, password.value)
    let { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,    
  })
  if (error) {
    console.log(error)
  }
  else {
    handleLogin()
  }
}

const handleLogin = async () => {
  try {
    loading.value = true
    console.log(email.value, password.value)
    /* const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    }) */

    const currentuser = data
    store.logged = true
    store.current_id = currentuser.user.id
    console.log(store.current_id)

    if (error) throw error
    
  } catch (error) {
    if (error instanceof Error) {

    }
  } 
}


</script>

<template>
<!--   <form @submit.prevent = "handleLogin">
    <input class = "inputField" required type=""/>

  </form> -->
  
  <form class="row flex-center flex" @submit.prevent="handleLogin">    
     <div class="col-6 form-widget">
      <h1 class="header">Destinations Tracker</h1>
      <p class="description">Sign inwith your email and password below</p>
      <div>
        <input class="inputField" required type="email" placeholder="Your email" v-model="email" />
        <input required type="password" placeholder="Your password" v-model="password"/>
      </div>
      <div>
        <button @click="signUp">Sign Up</button>
        <button @click="handleLogin">Sign In</button>
      </div>
    </div> 
  </form>
</template>