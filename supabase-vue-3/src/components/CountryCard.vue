<template>
    <div class="Country">
<h1>{{ Object.name }}</h1>
<button @click="$emit()">Visited</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
const props=defineProps({

});
</script>

<style lang="scss" scoped>

</style>