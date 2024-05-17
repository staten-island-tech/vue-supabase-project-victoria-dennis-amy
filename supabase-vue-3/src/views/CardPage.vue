<template>
    <div>
      <CountryCard
      v-for=""
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {supabase} from '../supabase';
import CountryCard from  '@/components/CountryCard.vue';
let countries = ref('getCountries');

  async function getCountries(){
    const { data, error } = await supabase
  .from('countries')
  .select("*")
  countries=data
  console.log(countries)

  }
onMounted(()=>{
  getCountries()
  
})
 
/* await supabase
  .from('countries')
  .insert({ id: 1, name: 'Denmark' }) */
</script>

<style lang="scss" scoped>

</style>