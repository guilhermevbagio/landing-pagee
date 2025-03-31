<template>
    <div class="h-screen w-screen pt-2">    
      <main class="flex justify-center items-center h-full w-full">
        <div class="flex flex-col md:flex-row gap-2 justify-center items-center">
          <MainHeader/>
          <Socials></Socials>
        </div>
        <AsciiCanvas class="-z-10 absolute top-0 left-0 opacity-50 h-full w-full overflow-clip"></AsciiCanvas>
      </main>
    </div>
  </template>

<script setup>
    import Socials from '@/components/Socials.vue';
import AsciiCanvas from '../components/AsciiCanvas.vue';
    import MainHeader from '../components/MainHeader.vue';
</script>
