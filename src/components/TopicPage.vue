<script setup>
import AsciiCanvas from './AsciiCanvas.vue';

</script>

<template>
    <div class="h-screen w-screen">
        <aside class="flex flex-col gap-4 pt-4 items-center w-[20%] bg-black h-full">
            <header class="text-bright flex flex-col gap-2 items-center text-8xl">
                <div class="flex flex-row">
                    <h1 class=" font-milker specialtext">
                        Games
                    </h1>
                    <h1 class="specialtext text-accent font-milker">'</h1>
                </div>
                <h2 class="font-playfair tracking-wide text-accent text-4xl -mt-2">o p i a p i r c p r o j e c t s</h2>
            </header>
            <div class="border-b border border-bright w-[80%]">

            </div>
            <AsciiCanvas class="-z-10 absolute top-0 left-0  opacity-50 overflow-clip"></AsciiCanvas>
        </aside>
    </div>
</template>

<style scoped>
.specialtext
{
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
}

.button-hover{
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  @apply hover:opacity-50
}
</style>