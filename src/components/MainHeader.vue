<script setup lang="ts">
import router from '@/router';

</script>

<template>
  <div class="flex flex-col gap-1 drop-shadow-lg w-[70%] cursor-default select-none">
    <div class="flex flex-row text-8xl font-milker">
      <h1 class="-ml-2 mb-2 text-bright">OPIA</h1>
      <h1 class="specialtext md:-ml-2 text-accent">'</h1>
    </div>
    <div class="flex flex-col 2xl:flex-row items-baseline">
      <h2 class="font-playfair font-bold text-bright text-2xl md:text-4xl ">The Ambiguous Intensity of Eye Contact &nbsp;  </h2>
      <a
        target="_blank"
        href="https://www.thedictionaryofobscuresorrows.com/concept/opia"
        class="text-2xl -my-1 2xl:text-4xl font-playfair italic hover:underline transition-all duration-100 ease-in-out hover:opacity-50 font-thin text-bright opacity-30"
      >
        The Dictionary of Obscure Sorrows.
      </a>
    </div>

    <p class="text-sm md:text-lg font-playfair drop-shadow-lg italic bg-black bg-opacity-40 md:bg-opacity-20 text-accent text-pretty">
      "n. the ambiguous intensity of looking someone in the eye, which can feel simultaneously invasive and vulnerable—their pupils glittering, bottomless and opaque—as if you were peering through a hole in the door of a house, able to tell that there’s someone standing there, but unable to tell if you’re looking in or looking out."
    </p>

    <p class=" md:text-2xl font-poppins text-bright w-full text-justify">
      A&nbsp; w e b s i t e&nbsp; f o r&nbsp; guilhermevbagio's&nbsp; p r o j e c t s
    </p>

        <nav class="text-xs flex flex-row justify-between md:text-lg mt-2 border-t pt-4 w-full font-poppins border-bright border-opacity-50 text-bright">
          <router-link to="/games" class="button-hover">games ></router-link>
          <router-link to="/music" class="button-hover">music ></router-link>
          <router-link to="/art" class="button-hover">art ></router-link>
          <router-link to="/code" class="button-hover">code ></router-link>
          <router-link to="/contact" class="button-hover">contact ></router-link>
        </nav>
  </div>
</template>

<style scoped>

.button-hover{
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  @apply hover:opacity-50
}
</style>