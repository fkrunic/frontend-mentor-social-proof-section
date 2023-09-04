<script setup lang="ts">
import { Review } from '../../data'
defineProps<{ review: Review, portraitTag: string }>()
</script>

<template>
    <div class="flex flex-col p-4 items-center">
        <div class="flex flex-row gap-2">
            <img :src="`../../assets/image-${review.portraitTag}.jpg`" alt="portrait">
            <div class="flex flex-col">
                <p class="text-left">{{ review.name }}</p>
                <p class="text-left">Verified Buyer</p>
            </div>
        </div>
        <p class="text-left">" {{ review.review }} "</p>
    </div>
</template>