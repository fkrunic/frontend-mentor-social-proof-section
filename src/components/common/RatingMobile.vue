<script setup lang="ts">
defineProps<{ ratingSpot: string }>()
</script>

<template>
    <div class="flex flex-col gap-2">
        <div class="flex flex-row gap-2">
            <img v-for="_ of [1,2,3,4,5]" src="../../assets/icon-star.svg" alt="star">
        </div>
        <p>Rated 5 Stars in {{ ratingSpot }}</p>
    </div>
</template>