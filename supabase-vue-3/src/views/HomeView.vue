<template>
<h1>Home Page: List of Countries</h1>

<div>
    <Cards
        v-for="country in countries.data"
        :key="country.name"
        :name="country.name"
        :id="country.id"
        :session="session"
    />
</div>
</template>

<script setup>
import Cards from "../components/Cards.vue"
import { onMounted, ref, computed } from "vue";
import { supabase } from "@/supabase";
import { useUsers } from "@/stores/users";
import { useCountries } from "@/stores/countries";

const session = ref()
const users = useUsers()
const countries = useCountries()
const pathname = window.location.pathname

onMounted(() => {
    supabase.auth.getSession().then(({ data }) => {
        session.value = data.session
    })

    supabase.auth.onAuthStateChange((_, _session) => {
        session.value = _session
    })
})
</script>
