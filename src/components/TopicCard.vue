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
    }
})

</script>

<template>
    <div class="cursor-pointer hover:-translate-y-1 transition-all will-change-transform duration-150 ease-in-out"
         @mouseover="isHovered = true" @mouseleave="isHovered = false">
        <div class="w-full h-fit border rounded p-4"
             :class="{'border-accent': !isHovered, 'hover:border-bright': isHovered}">
            <div v-if="big" class="h-32 w-full overflow-clip relative rounded-sm border mb-4" :class="isHovered ? 'border-bright' : 'border-accent'">
                <AsciiCanvas class="w-full h-full absolute"></AsciiCanvas>
            </div>
            <h1 :class="[
                    isHovered ? 'text-bright' : (big ? 'text-accent' : 'text-bright'),
                    'font-milker',
                    big ? 'text-4xl' : 'text-lg',
                    !isHovered && (big ? 'text-accent' : 'text-bright')
                ]">
                {{ title }} 
            </h1>
        </div>
        <div class="self-center mx-2 mt-2" :class="!isHovered ? '' : ' border-b border-accent'"></div>
    </div>
</template>