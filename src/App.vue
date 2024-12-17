<template>
  <div class="bg-black h-screen w-screen pt-2">
    <header>
      
      <UpBar />
    </header>
    
    <main class="flex justify-center h-full w-full items-center">
      <Card />
    </main>
  </div>
</template>

<script setup>
import UpBar from './components/UpBar.vue';
import Card from './components/Card.vue';

</script>
