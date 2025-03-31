<script setup lang="ts">
import AsciiCanvas from './AsciiCanvas.vue';
import { ref } from 'vue'

const isHovered = ref(false)

defineProps({
    title: {
        type: String,
        default: 'title'
    },
    big: {
        type: Boolean,
        default: false
    },
    linked: {
        type: Boolean,
        default: true
    }
})

</script>

<template>
    <div class="cursor-pointer hover:-translate-y-2 transition-all will-change-transform duration-150 ease-in-out"
         @mouseover="isHovered = true" @mouseleave="isHovered = false">
        <div class="w-full h-fit border rounded p-4 border-accent transition-border"
             :class="{'border-bright': isHovered}">
            <div v-if="big" class="h-32 w-full overflow-clip relative rounded-sm border mb-4 transition-border"
                 :class="isHovered ? 'border-bright' : 'border-accent'">
            </div>
            <h1 class="flex flex-row gap-2 items-center" :class="[ 
                    isHovered ? 'text-bright' : (big ? 'text-accent' : 'text-bright'),
                    'font-milker',
                    big ? 'text-4xl' : 'text-lg'
                ]">
                {{ title }} 
                <svg v-if="linked" xmlns="http://www.w3.org/2000/svg" :width="big ? 24 : 20" :height="big ? 24 : 20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </h1>
        </div>
        <div v-if="linked" class="w-full px-4 mt-2 pb-0">
            <div  class="line-appear border-b border-accent" :class="isHovered ? 'border-opacity-100 w-full' : 'border-opacity-0 w-0 '"></div>
        </div>
    </div>
</template>

<style scoped>

.transition-border {
    transition: border-color 0.3s ease-in-out;
}

.line-appear {
    transition: opacity 0.2s ease, width 0.5s ease;
}

.line-appear-enter-from {
    opacity: 0;
    width: 0;
}
</style>

