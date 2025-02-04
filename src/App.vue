<template>
  <div class="h-screen w-screen pt-2">

    
    <main class="flex justify-center items-center h-full w-full">
      <MainHeader/>
      <AsciiCanvas class="-z-10 absolute top-0 left-0 opacity-50 h-full w-full overflow-clip"></AsciiCanvas>
    </main>
  </div>
</template>

<script setup>
import AsciiCanvas from './components/AsciiCanvas.vue';
import MainHeader from './components/MainHeader.vue';
</script>

