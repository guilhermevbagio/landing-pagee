<template>
  <div class="h-screen w-screen pt-2">
    <header>
      
      <UpBar />
    </header>
    
    <main class="flex justify-center items-center h-full w-full">
      <div class="flex flex-row gap-8">
        <CardAtribuicao v-for="i in 4"/>
      </div>
    </main>
  </div>
</template>

<script setup>
import UpBar from './components/UpBar.vue';
import CardAtribuicao from './components/CardAtribuicao.vue';
</script>
