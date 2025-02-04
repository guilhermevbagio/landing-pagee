<template>
  <div class="h-screen w-screen pt-2">

    
    <main class="flex justify-center items-center h-full w-full">
      <div class="flex flex-col justify-center items-center gap-2">

        <MainHeader/>

      </div>
      <AsciiCanvas class="-z-10 absolute opacity-50 w-full h-[99%] overflow-clip"></AsciiCanvas>
    </main>
  </div>
</template>

<script setup>
import UpBar from './components/UpBar.vue';
import AsciiCanvas from './components/AsciiCanvas.vue';
import MainHeader from './components/MainHeader.vue';
</script>

<style scoped>
.specialtext
{
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
}
</style>