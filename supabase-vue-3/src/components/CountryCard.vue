<template>
    <div class="Country">
        <h2>test</h2>
     <h1>{{ Name.name }}</h1>
<button @click="$emit()">Visited</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
const props=defineProps({
Name:Object
});
</script>

<style lang="scss" scoped>

</style>