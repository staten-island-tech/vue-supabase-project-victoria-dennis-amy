<template>
  <h1 v-if="session">Visited countries will appear here.</h1>
  <h2 v-if="session">(its locked behind login please spare some points)</h2>

  <div>
    <Cards
        v-for="country in visitedCountries"
        :key="country.name"
        :name="country.name"
        :id="country.id"
        :session="session"
    />
</div>
</template>

<script setup>
import Cards from "../components/Cards.vue"
import { onMounted, ref, computed } from "vue"
import { supabase } from "@/supabase";
import { useUsers } from "@/stores/users";
import { useCountries } from "@/stores/countries";

const session = ref()
const users = useUsers()
const countries = useCountries()
const pathname = window.location.pathname
const visitedCountries = []


onMounted(async () => {
  const {data, error} = await supabase.from("visited").select()
  supabase.auth.getSession().then(({ info }) => {
    console.log(data)
    console.log(info)
    session.value = info.session
    
     const user = users.data.filter(
      (user) => user.id === session.value.user.id
    ) 
    user.visited.forEach((visited) => {
      visitedCountries.push(
        countries.data.filter((country) => country.id === visited) 
      )
    }) 
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  })
})
</script>
