<script setup lang="ts">
import { Content } from '../data';
import RatingMobile from './common/RatingMobile.vue'
import ReviewMobile from './common/ReviewMobile.vue'
defineProps<{ content: Content }>()
</script>

<template>
    <div class="relative flex flex-col items-center gap-10 m-6 py-8 overflow-visible">
        <!-- Top Background Pattern -->
        <svg class="absolute -top-[6rem]" width="584" height="362" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient x1="100%" y1="69.212%" x2="9.399%" y2="32.183%" id="a">
                    <stop stop-color="#8A4389" stop-opacity="0" offset="0%"/>
                    <stop stop-color="#512051" offset="100%"/>
                    <stop stop-color="#512051" offset="100%"/>
                    <stop stop-color="#512051" offset="100%"/>
                </linearGradient>
            </defs>
            <path d="M0 362c40.022-82.8 115.736-135.154 227.141-157.064 167.108-32.864 103.85-66.012 185.949-131.796C467.823 29.284 524.793 4.904 584 0v362H0z" transform="rotate(180 292 181)" fill="url(#a)" fill-rule="evenodd" opacity=".25"/>
        </svg>
        <div class="flex flex-col items-center gap-1">
            <p class="p-4 text-center leading-7 text-4xl font-bold text-very-dark-magenta">{{ content.banner }}</p>
            <p class="text-lg text-center text-dark-grayish-magenta">{{ content.description }}</p>
        </div>
        <div class="flex flex-col items-center w-full gap-4">
            <RatingMobile :rating-spot="spot" v-for="spot of content.ratingSpots"></RatingMobile>
        </div>
        <div class="flex flex-col items-center gap-4">
            <ReviewMobile class="z-10" :review="review" v-for="review of content.reviews"></ReviewMobile>
        </div>
        <!-- Bottom Background Pattern -->
        <svg class="absolute -bottom-[10rem] z-0" width="375" height="503" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient x1="100%" y1="69.237%" x2="9.399%" y2="32.159%" id="a">
                <stop stop-color="#8A4389" stop-opacity="0" offset="0%"/>
                <stop stop-color="#512051" offset="100%"/>
                <stop stop-color="#512051" offset="100%"/>
                <stop stop-color="#512051" offset="100%"/>
            </linearGradient></defs>
            <path d="M-355 1530c74.356-153.934 215.022-251.268 422-292 310.466-61.099 192.94-122.724 345.47-245.025C514.157 911.442 620 866.116 730 857v673H-355z" transform="translate(0 -1027)" fill="url(#a)" fill-rule="evenodd" opacity=".55"/>
        </svg>        
    </div>
</template>