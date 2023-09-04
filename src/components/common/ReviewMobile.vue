<script setup lang="ts">
import { Review } from '../../data'
defineProps<{ review: Review }>()

const getPortraitURL = (tag: string) => {
    return new URL(`../../assets/image-${tag}.jpg`, import.meta.url).href
}

</script>

<template>
    <div class="flex flex-col p-4 items-center">
        <div class="flex flex-row gap-2">
            <img :src="getPortraitURL(review.portraitTag)" alt="portrait">
            <div class="flex flex-col">
                <p class="text-left">{{ review.name }}</p>
                <p class="text-left">Verified Buyer</p>
            </div>
        </div>
        <p class="text-left">" {{ review.content }} "</p>
    </div>
</template>