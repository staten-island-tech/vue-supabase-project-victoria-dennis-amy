<template>
    <div>
        <h2>{{ name }}</h2>
        <div v-if="session">
            <Button v-if="toggled" @click="favorited"></Button>
            <Button v-else @click="favorited"></Button>
        </div>
    </div>
</template>

<script>
import { useCountries } from "../stores/countries.vue"
import { useUsers } from "../stores/users.vue"
import { supabase } from "@/supabase";
import Button from "../components/Button.vue"

export default {
    name: "Cards",
    data() {
        return {
            countries: useCountries(),
            toggled: false,
            users: useUsers(),
        }
    },
    components: {
        Button,
    },
    props: {
        title: String,
        id: Number,
        session: Object,
    },
    methods: {
        favorited: async function() {
            if(this.toggled === false) {
                this.toggled === true 
                console.log(this.session)
                let user = this.users.data.filter(
                    (user) => user.id === this.session.user.id
                )
                supabase.from("profiles").select(`id, ${user.id}`)
                console.log(user[0])

                console.log(this.id)
                const { data, error } = await supabase
                    .from("profiles")
                    .select()
                    .eq("id, `${user[0].id}")

            }
        }
    }}

</script>
