<template>
    <div>
        <h2>{{ name }}</h2>

            <Button v-if="toggled" @click="visited" title="Have not visited"/>
            <Button v-else @click="visited" title="Visited"/>

    </div>
</template>

<script>
import { useCountries } from "../stores/countries.js"
import { useUsers } from "../stores/users.js"
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
        name: String,
        id: Number,
        session: Object,
    },
    methods: {
        visited: async function() {
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
                    .eq('id', `${user[0].id}`)
                console.log(data[0].visited)
                console.log(error)
            } else {
                this.toggled = false;
            }
            console.log(supabase)
            console.log(this.session)
        }
    }
}
</script>
