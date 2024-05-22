<template>
    <div>
      <h1>Countries</h1>
      <h2 v-for="country in countries">{{ country.name }}</h2>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {supabase} from '../supabase';
import CountryCard from  '@/components/CountryCard.vue';
let countries = ref('');

  async function getCountries(){
    const { data, error } = await supabase
  .from('countries')
  .select("*")
  countries.value=data
  console.log(countries)

  }
onMounted(async ()=>{
  await getCountries()
  
})
 
/* await supabase
  .from('countries')
  .insert({ id: 1, name: 'Denmark' }) */
</script>

<style  scoped>

</style>