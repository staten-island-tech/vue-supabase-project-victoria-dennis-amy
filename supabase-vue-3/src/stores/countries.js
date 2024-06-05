import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { supabase } from '../supabase.js'

const { data, error } = await supabase.from("countries").select();

export const useCountries = defineStore("country", {
  state: () => {
    return {
      data: data,
      error: error,
    }
  }
})

export const countryList = reactive({
  country: [],
})

data.forEach(() => {
  countryList.country.push()
})

console.log(countryList);
