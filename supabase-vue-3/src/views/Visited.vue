<template>
  <h1 v-if="session">Ids of your Visited Countries!</h1>

  <ul v-if="session">
    <li v-for="(country, index) in visitedCountries" :key="index">
      {{ country }}
    </li>
  </ul>
</template>

<script setup>
import Cards from '../components/Cards.vue'
import { onMounted, ref, computed } from 'vue'
import { supabase } from '@/supabase'
import { useUsers } from '@/stores/users'
import { useCountries } from '@/stores/countries'

const session = ref(false)
const users = useUsers()
const countries = useCountries()
const pathname = window.location.pathname
const visitedCountries = ref([])

const visitedCountryNames = computed(() => {
  return visitedCountries.value.flatMap((country) => country.map((c) => c.name))
})

onMounted(async () => {
  const { data, error } = await supabase.from('visited').select();
  const session = await supabase.auth.getSession();
  console.log(session)
  

  const currentUserId = session.data.session.user.id

  console.log(`Current session ID: ${currentUserId}`)

  const currentUserVisitedData = data.filter((visit) => visit.user_id === currentUserId)

  visitedCountries.value = currentUserVisitedData.map((visit) => visit.country_id || '')
  console.log(visitedCountries)
})

supabase.auth.onAuthStateChange((_, _session) => {
  session.value = !!_session
})
</script>

<!-- const user = users.data.filter(
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
</script> -->
