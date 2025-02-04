<template>
  <div class="h-screen w-screen pt-2">

    
    <main class="flex justify-center items-center h-full w-full">
      <h1 class="text-8xl font-noto font-black text-white">opia</h1>
      <h1 class=" text-8xl font-noto font-thin text-white">pirc</h1>

      <AsciiCanvas class="-z-10 absolute"></AsciiCanvas>
    </main>
  </div>
</template>

<script setup>
import UpBar from './components/UpBar.vue';
import AsciiCanvas from './components/AsciiCanvas.vue';
</script>
