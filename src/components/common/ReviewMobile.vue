<script setup lang="ts">
import { Review } from '../../data'
defineProps<{ review: Review }>()

const getPortraitURL = (tag: string) => {
    return new URL(`../../assets/image-${tag}.jpg`, import.meta.url).href
}
</script>

<template>
    <div class="flex flex-col gap-4 items-left p-8 bg-very-dark-magenta rounded-lg">
        <div class="flex flex-row gap-6">
            <img class="w-10 h-10 rounded-full" :src="getPortraitURL(review.portraitTag)" alt="portrait">
            <div class="flex flex-col">
                <p class="text-left font-bold text-white">{{ review.name }}</p>
                <p class="-mt-1 text-left text-soft-pink">Verified Buyer</p>
            </div>
        </div>
        <p class="text-left text-light-grayish-magenta">&ldquo; {{ review.content }} &rdquo;</p>
    </div>
</template>