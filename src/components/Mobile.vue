<script setup lang="ts">
import { Content } from '../data';
import RatingMobile from './common/RatingMobile.vue'
import ReviewMobile from './common/ReviewMobile.vue'
defineProps<{ content: Content }>()
</script>

<template>
    <div class="flex flex-col">
        <p>{{ content.banner }}</p>
        <p>{{ content.description }}</p>
        <RatingMobile :rating-spot="spot" v-for="spot of content.ratingSpots"></RatingMobile>
        <ReviewMobile :review="review" v-for="review of content.reviews"></ReviewMobile>
    </div>
</template>