<template>
  <div class="h-screen w-screen pt-2">
    <header>
      
      <UpBar />
    </header>
    
    <main class="flex justify-center items-center h-full w-full">

      <AsciiCanvas class="-z-10 overflow-clip"></AsciiCanvas>
    </main>
  </div>
</template>

<script setup>
import UpBar from './components/UpBar.vue';
import AsciiCanvas from './components/AsciiCanvas.vue';
</script>
