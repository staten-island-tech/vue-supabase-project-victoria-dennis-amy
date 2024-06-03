import { defineStore } from "pinia";
import { ref } from "vue"

export const useSessionStore = defineStore("session", () => {
    const id = ref("")
    function setSession(newID) {
        id.value = newID
    }
}) 