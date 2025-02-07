<script setup>
import AsciiCanvas from './AsciiCanvas.vue';
import TopicCard from './TopicCard.vue';

</script>

<template>
    <div class="h-screen w-screen">
        <nav class="flex flex-col gap-4 w-full items-center bg-dark">
            <div class="flex flex-row items-end w-full justify-between px-2 border-b pb-4 border-bright border-opacity-50 ">
                <header class="text-bright flex flex-col gap-2 items-center text-8xl ">
                    <div class="flex flex-row">
                        <h1 class=" font-milker specialtext pb-2">
                            Games
                        </h1>
                        <h1 class="specialtext text-accent font-milker">'</h1>
                    </div>
                </header>
                <router-link to="/" class="button-hover">home ></router-link>
                <router-link to="/music" class="button-hover">music ></router-link>
                <router-link to="/art" class="button-hover">art ></router-link>
                <router-link to="/code" class="button-hover">code ></router-link>
                <router-link to="/contact" class="button-hover">contact ></router-link>

            </div>
        </nav>
        <div class="flex flex-row items-start justify-center w-full h-full p-8">
          <div class="flex flex-col gap-2 w-[40%]">
            <h2 class="text-2xl text-accent font-poppins">December 2024</h2>
            <p class="text-lg text-bright font-playfair ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div class="flex flex-col gap-8 w-full pl-8 ml-8 relative">
            <div class="absolute h-screen rounded border border-accent w-2 -z-10 left-0"></div>
            <TopicCard title="HARSH. released" big></TopicCard>
            <TopicCard title="GMTK game jam"></TopicCard>
            <TopicCard title="Opia pirc is born" big></TopicCard>

          </div>
        </div>
    </div>
</template>

<style scoped>


.button-hover{
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  @apply hover:opacity-50 text-bright text-lg
}

.ascii-gradient {
  -webkit-mask-image: linear-gradient(to right, 
    rgba(0, 0, 0, 1) 50%, 
    rgba(0, 0, 0, 1) 60%, 
    rgba(0, 0, 0, 0) 100%
  );
  mask-image: linear-gradient(to right, 
    rgba(0, 0, 0, 1) 50%, 
    rgba(0, 0, 0, 1) 60%, 
    rgba(0, 0, 0, 0) 100%
  );
}

</style>