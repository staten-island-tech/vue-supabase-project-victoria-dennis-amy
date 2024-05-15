<template>
    <div>
<h2>cjklxvbklzjxcvhbhlkzxb</h2>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {supabase} from '../supabase';
const countries = ref('getCountries');

  async function getCountries(){
    const { data, error } = await supabase
  .from('countries')
  .select("*")
  console.log(data)

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