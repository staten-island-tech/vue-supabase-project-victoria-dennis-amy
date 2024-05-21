<template>
    <div>
      <CountryCard 
      v-for="item in countries"
      :Name="item"
      :key="item.id"
      />
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import {supabase} from '../supabase';
import CountryCard from  '@/components/CountryCard.vue';
let countries = ref('');

  async function getCountries(){
    const { data, error } = await supabase
  .from('countries')
  .select("*")
  countries=data
  console.log(countries)

  }
onBeforeMount(()=>{
  getCountries()
  
})
 
/* await supabase
  .from('countries')
  .insert({ id: 1, name: 'Denmark' }) */
</script>

<style lang="scss" scoped>

</style>