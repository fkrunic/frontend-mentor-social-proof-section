<script setup lang="ts">
import { Content } from '../data';
import RatingMobile from './common/RatingMobile.vue'
import ReviewMobile from './common/ReviewMobile.vue'
defineProps<{ content: Content }>()
</script>

<template>
    <div class="flex flex-col items-center gap-10 m-6 py-8">
        <div class="flex flex-col items-center gap-1">
            <p class="p-4 text-center leading-7 text-4xl font-bold text-very-dark-magenta">{{ content.banner }}</p>
            <p class="text-lg text-center text-dark-grayish-magenta">{{ content.description }}</p>
        </div>
        <div class="flex flex-col items-center w-full gap-4">
            <RatingMobile :rating-spot="spot" v-for="spot of content.ratingSpots"></RatingMobile>
        </div>
        <div class="flex flex-col items-center gap-4">
            <ReviewMobile :review="review" v-for="review of content.reviews"></ReviewMobile>
        </div>
    </div>
</template>