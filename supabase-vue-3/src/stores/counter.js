import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', async () => {

const logged = ref(false)
const current_user = ref(null)
const current_id = ref(null)

  return {logged, current_user, current_id }
})