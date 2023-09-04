<script setup lang="ts">
import { Content } from '../data';
defineProps<{ content: Content }>()
</script>

<template>
    <h1 className="text-3xl font-bold underline">
        Hello world!
    </h1>    
</template>