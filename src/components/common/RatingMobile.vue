<script setup lang="ts">
defineProps<{ ratingSpot: string }>()
</script>

<template>
    <div class="flex flex-col items-center gap-2 w-full py-3 bg-soft-pink/10 rounded-lg">
        <div class="flex flex-row gap-2">
            <img v-for="_ of [1,2,3,4,5]" src="../../assets/icon-star.svg" alt="star">
        </div>
        <p class="font-bold text-very-dark-magenta">Rated 5 Stars in {{ ratingSpot }}</p>
    </div>
</template>