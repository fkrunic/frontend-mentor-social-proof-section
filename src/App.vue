<script setup lang="ts">
import Mobile from './components/Mobile.vue'
import Desktop from './components/Desktop.vue'

import { onMounted } from 'vue';
import { content } from './data';

onMounted(() => {
  document.body.className = 'font-league-spartan'
})
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <Mobile class="desktop:hidden" :content="content"></Mobile>
    <Desktop class="hidden desktop:flex" :content="content"></Desktop>
  </div>
</template>

