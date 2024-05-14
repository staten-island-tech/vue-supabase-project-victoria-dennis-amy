<template>
    <div>

    </div>
</template>

<script setup>

const { data, error } = await supabase
  .from('countries')
  .select("*")
console.log(.select)
  
await supabase
  .from('countries')
  .insert({ id: 1, name: 'Denmark' })
</script>

<style lang="scss" scoped>

</style>