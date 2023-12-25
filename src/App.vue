<script setup lang="ts">
import { ref } from 'vue';
import { Pagination } from './components';

const currentItem = ref<number>(1)
</script>

<template>
  <main class="flex flex-col justify-center items-center bg-slate-800 w-screen h-screen text-white">
    Allef Lib Starter - {{ currentItem }}
    <Pagination :total="10" v-model:page="currentItem"/>
  </main>
</template>

<style scoped>
</style>
