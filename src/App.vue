<template>
  <div class="bg-black h-screen w-screen pt-2">
    <header>
      
      <UpBar />
    </header>
    
    <main class="flex justify-center items-center h-full w-full">
      <TetrisCards />
    </main>
  </div>
</template>

<script setup>
import UpBar from './components/UpBar.vue';
import TetrisCards from './components/TetrisCards.vue';
</script>
