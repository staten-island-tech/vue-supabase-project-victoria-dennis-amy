<script>

</script>

<template>
    <div>
        <h2>{{ name }}</h2>
        <div v-if="session">
            <Button v-if="toggled" @click="favorited"></Button>
            <Button v-else @click="favorited"></Button>
        </div>
    </div>
</template>