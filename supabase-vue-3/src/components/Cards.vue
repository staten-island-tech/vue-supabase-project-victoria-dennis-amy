<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>ID: {{ id }}</h2>

    <Button v-if="toggled" @click="visited(name, id)" title="Have not visited" />

    <Button v-else @click="visited(name, id)" title="Visited" />
  </div>
</template>

<script>
import { useCountries } from '../stores/countries.js'
import { useUsers } from '../stores/users.js'
import { supabase } from '@/supabase'
import Button from '../components/Button.vue'

export default {
  name: 'Cards',
  data() {
    return {
      countries: useCountries(),
      toggled: false,
      users: useUsers()
    }
  },
  components: {
    Button
  },
  props: {
    name: String,
    id: Number,
    session: Object
  },
  methods: {
    visited: async function (countryName, countryid) {
      console.log(this.session.user.id)
      const { userData, error } = await supabase
        .from('profiles')
        .select()
        .eq('id', this.session.user.id)
      if (!this.toggled) {
        this.toggled = true

        const { data: insertData, error: insertError } = await supabase.from('visited').insert(
          [
            {
              id: this.session.user.id,
              created_at: new Date(),
              user_id: this.session.user.id,
              visited: countryName,
              country_id: countryid
            }
          ],
          { select: 'id' }
        )
        if (insertError) {
          console.error('Error inserting visit:', insertError)
        } else {
          console.log('Visit inserted successfully:', insertData)
        }
      } else {
        this.toggled = false
      }
    }
  }
}
</script>
