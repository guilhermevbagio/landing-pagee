<script setup>
import AsciiCanvas from './AsciiCanvas.vue';

</script>

<template>
    <div class="h-screen w-screen">
        <nav class="flex flex-col gap-4 w-full items-center bg-dark">
            <div class="flex flex-row items-end w-full justify-between px-2 border-b pb-4 border-bright border-opacity-50 ">
                <header class="text-bright flex flex-col gap-2 items-center text-8xl ">
                    <div class="flex flex-row">
                        <h1 class=" font-milker specialtext">
                            Games
                        </h1>
                        <h1 class="specialtext text-accent font-milker">'</h1>
                    </div>
                    <h2 class="font-playfair tracking-wide text-accent text-4xl -mt-2">o p i a p i r c p r o j e c t s</h2>
                </header>
                <router-link to="/" class="button-hover">home ></router-link>
                <router-link to="/music" class="button-hover">music ></router-link>
                <router-link to="/art" class="button-hover">art ></router-link>
                <router-link to="/code" class="button-hover">code ></router-link>
                <router-link to="/contact" class="button-hover">contact ></router-link>

            </div>
        </nav>
        <p class="text-lg text-bright font-playfair p-8 w-[40%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <AsciiCanvas class="-z-10 absolute top-0 w-[25%] left-0 opacity-50 h-full overflow-clip ascii-gradient"></AsciiCanvas>
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
  @apply hover:opacity-50 text-bright text-lg
}

.ascii-gradient {
  -webkit-mask-image: linear-gradient(to right, 
    rgba(0, 0, 0, 1) 50%,  /* Fully visible until 50% */
    rgba(0, 0, 0, 1) 60%,  /* Start fading at 60% */
    rgba(0, 0, 0, 0) 100%  /* Fully transparent at 100% */
  );
  mask-image: linear-gradient(to right, 
    rgba(0, 0, 0, 1) 50%, 
    rgba(0, 0, 0, 1) 60%, 
    rgba(0, 0, 0, 0) 100%
  );
}

</style>