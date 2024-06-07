<template>
    <div>
        <h2>{{ name }}</h2>
        <h2>ID: {{ id }}</h2>

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
        visited: async function(countryName) {
            if (!this.toggled) {
                this.toggled = true;
                console.log(this.session);

                let user = this.users.data.find(
                    (user) => user.id === this.session.user.id
                );
                if (!user) {
                    console.error('User not found');
                    return;
                }

                console.log(user);
                console.log(this.id);

                // Fetch profile data
                const { data, error } = await supabase
                    .from("profiles")
                    .select()
                    .eq('id', user.id);

                if (error) {
                    console.error('Error fetching profile:', error);
                    return;
                }

                if (data.length === 0) {
                    console.error('Profile not found');
                    return;
                }

                console.log(data[0]?.visited);

                // Insert visit data into 'visited' table
                const { insertData, insertError } = await supabase
                    .from('visited')
                    .insert([
                        { id: user.id, visit_time: new Date(), country_visited: countryName }
                    ]);

                if (insertError) {
                    console.error('Error inserting visit:', insertError);
                    return;
                }

                console.log(insertData);
            } else {
                this.toggled = false;
            }
            console.log(supabase);
            console.log(this.session);
        }
    }
}
</script>
