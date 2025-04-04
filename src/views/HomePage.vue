<template>
    <div class="h-screen w-screen pt-2">    
      <main class="flex justify-center items-center h-full w-full">
        <div class="flex flex-col md:flex-row gap-2 justify-center items-center header">
          <MainHeader/>
          <Socials></Socials>
        </div>
        <AsciiCanvas class="-z-10 absolute top-0 left-0 opacity-60 h-full w-full overflow-clip background"></AsciiCanvas>
      </main>
    </div>
  </template>

<script setup>
    import Socials from '@/components/Socials.vue';
import AsciiCanvas from '../components/AsciiCanvas.vue';
    import MainHeader from '../components/MainHeader.vue';
</script>

<style scoped>
.header {
  animation: header-enter 1s ease;
}

@keyframes header-enter {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.background{
  animation: background-enter 2.5s ease-in-out;
}

@keyframes background-enter {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}
</style>
